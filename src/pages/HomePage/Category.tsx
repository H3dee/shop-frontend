import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ID, PromotedCategoryProps } from "../../interfaces/IPromotedCategory";
import { Product } from "../../interfaces/IProductCard";
import { Product as ProductDTO } from "../../api/generated/models/Product";
import { useHttp } from "../../hooks/http.hook";
import { getProductImage } from "../../util/getImage";
import { useDispatch } from "react-redux";
import { openCategory } from "../../redux/category/actionCreators";
import ProductCard from "../../components(shared)/ProductCard";
import Loader from "../../components(shared)/Loader";
import testImg from "../../assets/img/image 29.png";
import "../../scss/components/category.scss";

const qs = require("qs");

const Category: React.FC<PromotedCategoryProps> = (props) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [currentSubCategoryId, setSubCategoryId] = useState<ID | null>(null);
  const { loading, request } = useHttp<ProductDTO[]>();
  const history = useHistory();
  const dispatch = useDispatch();

  const previewClickHandler = () => {
    dispatch(openCategory(String(props.id)));

    currentProducts.length && history.push(`/category/${props.parent.name}/${props.id}`);
  };

  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      setCurrentProducts([]);
      const query = qs.stringify({
        _where: [
          {
            "category.id":
              currentSubCategoryId ||
              props?.subcategoriesNames[0]?.id ||
              props?.id,
          },
        ],
        _limit: 4,
      });
      const data = await request(`/products?${query}`, "GET");

      if (!isMounted) return;

      data &&
        data instanceof Array &&
        setCurrentProducts(
          data.map((product) => ({
            id: product.id,
            imageUrl: getProductImage(product),
            productName: product.name,
            price: product.price,
          }))
        );
    };

    getProducts();

    return () => {
      isMounted = false;
    };
  }, [request, currentSubCategoryId, props?.id, props?.subcategoriesNames]);

  return (
    <div className="category">
      <div className="category__selectors">
        {props.subcategoriesNames &&
          props.subcategoriesNames.map((item, i) => (
            <div
              key={item.id}
              className={
                (!currentSubCategoryId && i === 0) ||
                currentSubCategoryId === item.id
                  ? "selector__name active"
                  : "selector__name"
              }
              onClick={() => setSubCategoryId(item.id)}
            >
              {item.name}
            </div>
          ))}
      </div>
      <div className="category__body">
        <div className="category__preview" onClick={previewClickHandler}>
          <img src={props.parent.imgUrl} alt="" />
          <div className="preview-title">
            <div>{props.parent.name}</div>
          </div>
          <div className="preview__see-all">
            <div onClick={(e) => e.stopPropagation()}>see all new products</div>
          </div>
        </div>
        <div className="category__products">
          {!loading ? (
            currentProducts.length ? (
              currentProducts.map((product, i) => {
                return (
                  <ProductCard
                    key={String(i)}
                    imageUrl={product.imageUrl || testImg}
                    price={product.price}
                    productName={product.productName}
                    isExpanded={false}
                  />
                );
              })
            ) : (
              <div className="products__empty-alert">
                There are no products yet....
              </div>
            )
          ) : (
            <div className="products__loading">{<Loader />}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
