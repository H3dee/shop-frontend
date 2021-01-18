import React, { useCallback, useEffect, useState } from "react";
import { Product } from "../../interfaces/IProductCard";
import { useHttp } from "../../hooks/http.hook";
import ProductCard from "../../components(shared)/ProductCard";
import Loader from "../../components(shared)/Loader";
import gridIcon from "../../img/icons/Group 201grid-icon.svg";
import lineIcon from "../../img/icons/Frame 50line-type.svg";
import rightArrow from "../../img/icons/Vector 13right-pointer.svg";
import cancelIcon from "../../img/icons/Group 108cancel.svg";
import tempImg from "../../img/image 29test.png";

const qs = require("qs");

const ListSection: React.FC<{ categoryId: string }> = ({ categoryId }) => {
  const [isGrid, setIsGrid] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const { loading, request } = useHttp();

  const getProducts = useCallback(async () => {
    try {
      setProducts([]);
      const subcategoriesParams = qs.stringify({
        _where: { "parent.id": categoryId },
      });

      const subCategories = await request(
        `/categories?${subcategoriesParams}`,
        "GET"
      );

      const query = qs.stringify(
        {
          _where: {
            _or: [
              { "category.id": categoryId },
              [
                ...subCategories.map((subCategory: { id: string }) => ({
                  "category.id": subCategory.id
                })),

              ],
            ],
          },
          _limit: 20,
        },
        { encode: false }
      );
      const data = await request(`/products?${query}`, "GET");

      data &&
        data instanceof Array &&
        data.forEach((product) => {
          setProducts((prev) => [
            ...prev,
            {
              id: product.id,
              imageUrl:
                product?.photo[0]?.formats?.medium?.url ||
                product?.photo[0]?.formats?.small?.url ||
                product?.photo[0]?.formats?.thumbnail?.url ||
                product?.photo[0]?.url,
              productName: product.name,
              price: product.price,
            },
          ]);
        });
    } catch (e) {
      console.log(e);
    }
  }, [request, categoryId]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="list__body">
      <div className="container">
        <div className="list__body__row">
          {!loading ? (
            <>
              <div className="body__top">
                <div className="top__items-count-info">
                  <div className="items-count-info__text">
                    Items <span className="current">1-35</span> of
                    <span className="all">61</span>
                  </div>
                </div>
                <div className="top__sort-menu">
                  <div className="sort-menu__placeholder">
                    <div className="text">Sort by</div>:
                    <div className="selected">Position</div>
                    <div className="arrow">
                      <img src={rightArrow} alt=" " />
                    </div>
                  </div>
                </div>
                <div className="top__show-amount">
                  <div className="top__show-amount__placeholder">
                    <div className="text">Show:</div>
                    <div className="selected">
                      <span>20</span> per page
                    </div>
                    <div className="arrow">
                      <img src={rightArrow} alt=" " />
                    </div>
                  </div>
                </div>
                <div className="top__display-type-btns">
                  <div className={isGrid ? "grid-type active" : "grid-type"}>
                    <img
                      src={gridIcon}
                      alt=""
                      onClick={() => !isGrid && setIsGrid(true)}
                    />
                  </div>
                  <div className={!isGrid ? "line-type active" : "line-type"}>
                    <img
                      src={lineIcon}
                      alt=""
                      onClick={() => isGrid && setIsGrid(false)}
                    />
                  </div>
                </div>
              </div>
              <div className="body__applied-filters">
                <div className="applied-filters__item">
                  <div className="item__name">CUSTOM PCS</div>
                  <div className="item__cancel-icon">
                    <img src={cancelIcon} alt=" " />
                  </div>
                </div>
                <div className="applied-filters__item">
                  <div className="item__name">HP/COMPAQ PCS</div>
                  <div className="item__cancel-icon">
                    <img src={cancelIcon} alt=" " />
                  </div>
                </div>
                <div className="applied-filters__clear-btn">
                  <button>Clear All</button>
                </div>
              </div>
              <div className="body__products">
                {products.map((product, i) => (
                  <ProductCard
                    key={String(i)}
                    imageUrl={product.imageUrl || tempImg}
                    price={product.price}
                    productName={product.productName}
                    isExpanded={!isGrid}
                  />
                ))}
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListSection;
