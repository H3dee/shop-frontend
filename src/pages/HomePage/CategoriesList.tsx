import React, { useEffect, useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { PromotedCategory } from "../../interfaces/IPromotedCategory";
import { Category as CategoryDTO } from "../../api/generated/models/Category";
import { getCategoryImage } from "../../util/getImage";
import { getSubCategoriesById } from "../../util/getSubCategories";
import Category from "./Category";
import Loader from "../../components(shared)/Loader";

const qs = require("qs");

const CategoriesList: React.FC = () => {
  const [promotedCategories, setPromotedCategories] = useState<PromotedCategory[]>([]);
  const { loading, request } = useHttp();

  useEffect(() => {
    const getPromotedCategories = async () => {
      try {
        const { categories } = await request("/promoted-categories", "GET");
        const query = qs.stringify({
          _where: {
            _or: [
              ...categories.map((category: CategoryDTO) => ({
                "parent.id": category.id,
              })),
            ],
          },
        });

        const subCategories: CategoryDTO[] = await request(
          `/categories?${query}`,
          "GET"
        );

        subCategories.length &&
          setPromotedCategories(
            categories.map((category: CategoryDTO) => ({
              id: category.id,
              parent: {
                name: category.name,
                imgUrl: getCategoryImage(category),
              },
              subcategoriesNames: getSubCategoriesById(
                subCategories,
                category.id
              ).map((subCategory) => ({
                id: subCategory.id,
                name: subCategory.name,
              })),
            }))
          );
      } catch (e) {
        console.log(e);
      }
    };

    getPromotedCategories();
  }, [request]);

  return (
    <div className="content__categories">
      {loading ? (
        <Loader />
      ) : (
        promotedCategories.map((item, i) => (
          <Category
            key={String(i)}
            id={item.id}
            parent={item.parent}
            subcategoriesNames={item.subcategoriesNames}
          />
        ))
      )}
    </div>
  );
};

export default CategoriesList;
