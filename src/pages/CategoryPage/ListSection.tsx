import React, { useEffect, useState } from "react";
import { Category as CategoryDTO } from "../../api/generated";
import { Product as ProductDTO } from "../../api/generated/models/Product";
import { Product } from "../../interfaces/IProductCard";
import { useHttp } from "../../hooks/http.hook";
import { getProductImage } from "../../util/getImage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/interfaces/IRootState";
import {
  clearFilters,
  removePriceFilter,
  removeSubcategoryFilter,
} from "../../redux/category/actionCreators";
import ProductCard from "../../components(shared)/ProductCard";
import Loader from "../../components(shared)/Loader";
import gridIcon from "../../assets/img/icons/Group 201grid-icon.svg";
import lineIcon from "../../assets/img/icons/Frame 50line-type.svg";
import rightArrow from "../../assets/img/icons/Vector 13right-pointer.svg";
import cancelIcon from "../../assets/img/icons/Group 108cancel.svg";
import tempImg from "../../assets/img/image 29test.png";
import { ISubCategoriesName as subCategoriesName } from "../../redux/interfaces/ISubCategoryName";
import { PriceFilterItem } from "../../redux/interfaces/IPriceFilterItem";

const qs = require("qs");

const ListSection: React.FC<{ categoryId: string }> = ({ categoryId }) => {
  const [isGrid, setIsGrid] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const { filtersByPrice, filtersBySubCategory } = useSelector(
    (state: RootState) => state.filters
  );
  const { loading, request } = useHttp();
  const dispatch = useDispatch();
  const filters: (subCategoriesName | PriceFilterItem)[] = [
    ...filtersBySubCategory,
    ...filtersByPrice,
  ];

  useEffect(() => {
    const getProducts = async () => {
      try {
        const subcategoriesParams = qs.stringify({
          _where: { "parent.id": categoryId },
        });

        const subCategories: CategoryDTO[] = await request(
          `/categories?${subcategoriesParams}`,
          "GET"
        );

        const query = qs.stringify(
          {
            _where: {
              _or: [
                { "category.id": categoryId },
                ...subCategories.map((subCategory) => ({
                  "category.id": subCategory.id,
                })),
              ],
            },
            _limit: 20,
          },
          { encode: false }
        );

        const data: ProductDTO[] = await request(`/products?${query}`, "GET");

        data &&
          data instanceof Array &&
          setProducts(
            data.map((product) => ({
              id: product.id,
              imageUrl: getProductImage(product),
              productName: product.name,
              price: product.price,
            }))
          );
      } catch (e) {
        console.log(e);
      }
    };

    getProducts();
  }, [request, categoryId]);

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
              {filters.length ? (
                <div className="body__applied-filters">
                  {filters.map((filter, i) => (
                    <div className="applied-filters__item" key={String(i)}>
                      <div className="item__name">{filter.name}</div>
                      <div className="item__cancel-icon">
                        <img
                          src={cancelIcon}
                          alt=" "
                          onClick={() =>
                            dispatch(
                              filter.id
                                ? removeSubcategoryFilter(filter)
                                : removePriceFilter(filter)
                            )
                          }
                        />
                      </div>
                    </div>
                  ))}
                  <div className="applied-filters__clear-btn">
                    <button onClick={() => dispatch(clearFilters())}>
                      Clear All
                    </button>
                  </div>
                </div>
              ) : null}
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
