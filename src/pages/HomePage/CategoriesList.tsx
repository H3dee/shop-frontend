import React, { useCallback, useEffect, useState } from "react";
import Loader from "../../components(shared)/Loader";
import { useHttp } from "../../hooks/http.hook";
import { PromotedCategory } from "../../interfaces/IPromotedCategory";
import Category from "./Category";

const qs = require('qs')

const CategoriesList: React.FC = () => {
  const [promotedCategories, setPromotedCategories] = useState<PromotedCategory[]>([])
  const { loading, request } = useHttp()

  const getPromotedCategories = useCallback(async () => {
    const { categories } = await request("/promoted-categories", "GET")

    for (const category of categories) {
      const query = qs.stringify({
        _where: [{ 'parent.id': category.id }],
        _limit: 6
      }, { encode: false })
      const subCategories = await request(`/categories?${query}`, "GET")

      setPromotedCategories(prev => [...prev, {
        id: category.id,
        parent: {
          name: category.name,
          imgUrl: category?.image?.formats?.medium?.url ||
            category?.image?.formats?.small?.url ||
            category?.image?.formats?.thumbnail?.url
        },
        subcategoriesNames: subCategories.map(
          (subCategory: { id: string | number, name: string }) => ({
            id: subCategory.id,
            name: subCategory.name,
          })),
      }])
    }
  }, [request])

  useEffect(() => {
    getPromotedCategories()
  }, [getPromotedCategories])

  return (
    <div className="content__categories">
      {loading && <Loader />}
      {!loading && promotedCategories.map((item, i) =>
        <Category key={String(i)} id={item.id} parent={item.parent} subcategoriesNames={item.subcategoriesNames} />
      )}
    </div>
  );
};

export default CategoriesList