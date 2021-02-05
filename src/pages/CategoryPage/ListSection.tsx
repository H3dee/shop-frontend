import React, { useEffect, useRef, useState } from 'react'
import { Product as ProductDTO } from '../../api/generated/models/Product'
import { useHttp } from '../../hooks/http.hook'
import { getProductImage } from '../../util/getImage'
import { useDispatch } from 'react-redux'
import {
  applyFilters,
  clearFilters,
  removePriceFilter,
  removeSubcategoryFilter,
  setPagination,
} from '../../redux/category/actionCreators'
import { ISubCategoriesName as subCategoriesName } from '../../redux/interfaces/ISubCategoryName'
import { PriceFilterItem } from '../../redux/interfaces/IPriceFilterItem'
import {
  hideProductsLoading,
  showProductsLoading,
} from '../../redux/application/actionCreators'
import { setProducts } from '../../redux/product/actionCreators'
import { useTypedSelector } from '../../redux/modules'
import ProductCard from '../../components(shared)/ProductCard'
import Loader from '../../components(shared)/Loader'
import Pagination from './Pagination'
import gridIcon from '../../assets/img/icons/Group 201grid-icon.svg'
import lineIcon from '../../assets/img/icons/Frame 50line-type.svg'
import rightArrow from '../../assets/img/icons/Vector 13right-pointer.svg'
import cancelIcon from '../../assets/img/icons/Group 108cancel.svg'
import reserveImg from '../../assets/img/image 29test.png'
import { getFocus } from '../../util/getFocus'

const qs = require('qs')

const ListSection: React.FC = () => {
  const [isGrid, setIsGrid] = useState(true)
  const products = useTypedSelector((state) => state.products.products)
  const { filtersByPrice, filtersBySubCategory } = useTypedSelector(
    (state) => state.filters
  )
  const categoryId = useTypedSelector(
    (state) => state.category.parentCategoryId
  )
  const subCategories = useTypedSelector(
    (state) => state.category.subCategoriesNames
  )
  const loading = useTypedSelector((state) => state.app.productsLoading)
  const pagination = useTypedSelector((state) => state.pagination)
  const dispatch = useDispatch()
  const filters: (subCategoriesName | PriceFilterItem)[] = [
    ...filtersBySubCategory,
    ...filtersByPrice,
  ]
  const focusRef = useRef<HTMLDivElement>(null)
  const { request } = useHttp()

  const switchPageHandler = (page: number): void => {
    dispatch(setPagination({ ...pagination, currentPage: page }))

    const toggleProducts = async () => {
      try {
        if (filters.length) {
          dispatch(applyFilters(true))
          getFocus(focusRef.current!)
          return
        }

        const query = qs.stringify({
          _where: {
            _or: [
              { 'category.id': categoryId },
              ...subCategories.map((subCategory) => ({
                'category.id': subCategory.id,
              })),
            ],
          },
          _limit: 10,
          _start: (pagination.currentPage - 1) * 10,
        })

        getFocus(focusRef.current!)
        dispatch(showProductsLoading())
        const products: ProductDTO[] = await request(
          `/products?${query}`,
          'GET'
        )

        products &&
          products.length &&
          dispatch(
            setProducts(
              products.map((product) => ({
                id: product.id,
                imageUrl: getProductImage(product),
                productName: product.name,
                price: product.price,
              }))
            )
          )

        dispatch(hideProductsLoading())
      } catch (e) {
        console.log(e)
      }
    }

    toggleProducts()
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!categoryId || products.length) return

        const query = qs.stringify(
          {
            _where: {
              _or: [
                { 'category.id': categoryId },
                ...subCategories.map((subCategory) => ({
                  'category.id': subCategory.id,
                })),
              ],
            },
          },
          { encode: false }
        )
        dispatch(showProductsLoading())
        const data: ProductDTO[] = await request(`/products?${query}`, 'GET')

        data.length &&
          dispatch(
            setPagination({
              currentPage: 1,
              pagesAmount: Math.ceil(data.length / 10),
              productsAmount: data.length,
            })
          )

        data.length &&
          dispatch(
            setProducts(
              data.splice(0, 10).map((product) => ({
                id: product.id,
                imageUrl: getProductImage(product),
                productName: product.name,
                price: product.price,
              }))
            )
          )

        dispatch(hideProductsLoading())
      } catch (e) {
        console.log(e)
      }
    }

    getProducts()
  }, [request, categoryId, dispatch, products.length, subCategories])

  return (
    <div className="list__body" ref={focusRef}>
      <div className="container">
        <div className="list__body__row">
          {!loading ? (
            <>
              <div className="body__top">
                <div className="top__items-count-info">
                  <div className="items-count-info__text">
                    Total products:
                    <span className="all">{pagination.productsAmount}</span>
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
                      <span>10</span> per page
                    </div>
                    <div className="arrow">
                      <img src={rightArrow} alt=" " />
                    </div>
                  </div>
                </div>
                <div className="top__display-type-btns">
                  <div className={isGrid ? 'grid-type active' : 'grid-type'}>
                    <img
                      src={gridIcon}
                      alt=""
                      onClick={() => !isGrid && setIsGrid(true)}
                    />
                  </div>
                  <div className={!isGrid ? 'line-type active' : 'line-type'}>
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
        {pagination.pagesAmount ? (
          <Pagination
            pagesAmount={pagination.pagesAmount}
            switchPage={switchPageHandler}
            currentPage={pagination.currentPage}
          />
        ) : null}
      </div>
    </div>
  )
}

export default ListSection
