import React, { useEffect, useState } from "react";
import { Product as ProductDTO } from "../../api/generated/models/Product";
import { useHttp } from "../../hooks/http.hook";
import { getProductImage } from "../../util/getImage";
import { useDispatch } from "react-redux";
import {
  clearFilters,
  removePriceFilter,
  removeSubcategoryFilter,
} from "../../redux/category/actionCreators";
import { ISubCategoriesName as subCategoriesName } from "../../redux/interfaces/ISubCategoryName";
import { PriceFilterItem } from "../../redux/interfaces/IPriceFilterItem";
import {
  hideProductsLoading,
  showProductsLoading,
} from "../../redux/application/actionCreators";
import { setProducts } from "../../redux/product/actionCreators";
import { useTypedSelector } from "../../redux/modules";
import ProductCard from "../../components(shared)/ProductCard";
import Loader from "../../components(shared)/Loader";
import Pagination from "./Pagination";
import gridIcon from "../../assets/img/icons/Group 201grid-icon.svg";
import lineIcon from "../../assets/img/icons/Frame 50line-type.svg";
import rightArrow from "../../assets/img/icons/Vector 13right-pointer.svg";
import cancelIcon from "../../assets/img/icons/Group 108cancel.svg";
import reserveImg from "../../assets/img/image 29test.png";

const qs = require("qs");

const ListSection: React.FC = () => {
  const [isGrid, setIsGrid] = useState(true);
  const products = useTypedSelector((state) => state.products.products);
  const { filtersByPrice, filtersBySubCategory } = useTypedSelector(
    (state) => state.filters
  );
  const categoryId = useTypedSelector(
    (state) => state.category.parentCategoryId
  );
  const subCategories = useTypedSelector(
    (state) => state.category.subCategoriesNames
  );
  const loading = useTypedSelector((state) => state.app.productsLoading);
  const [amount, setAmount] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch();
  const filters: (subCategoriesName | PriceFilterItem)[] = [
    ...filtersBySubCategory,
    ...filtersByPrice,
  ];
  const { request } = useHttp();

  const switchPageHandler = (page: number): void => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!categoryId || products.length) return;

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
            _limit: 10,
            _start: currentPage * 10
          },
          { encode: false }
        );

        dispatch(showProductsLoading());
        const productsAmount: number = await request("/products/count", "GET");
        const data: ProductDTO[] = await request(`/products?${query}`, "GET");

        dispatch(
          data.length &&
            setProducts(
              data.map((product) => ({
                id: product.id,
                imageUrl: getProductImage(product),
                productName: product.name,
                price: product.price,
              }))
            )
        );

        dispatch(hideProductsLoading());
        productsAmount && setAmount(Math.ceil(productsAmount / 10));
      } catch (e) {
        console.log(e);
      }
    };

    getProducts();
  }, [request, categoryId, dispatch, products.length, subCategories, currentPage]);

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
                    id={product.id}
                    key={String(i)}
                    imageUrl={product.imageUrl || reserveImg}
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
        {amount && <Pagination pagesAmount={amount!} />}
      </div>
    </div>
  );
};

export default ListSection;
