import React, { useEffect, useState } from 'react'
import { HoveredMenuProps } from '../../interfaces/IMenu'
import { useHttp } from '../../hooks/http.hook'
import { Product } from '../../interfaces/IProductCard'
import { Product as ProductDTO } from '../../api/generated'
import { getProductImage } from '../../util/getImage'
import qs from 'qs'
import CompaniesLogos from '../CompaniesLogos'
import reservedImg from '../../assets/img/image 29test.png'
import ProductCard from '../ProductCard'
import Loader from '../Loader'

const HoveredMenu: React.FC<HoveredMenuProps> = ({ items: categories }) => {
  const [currentProducts, setCurrentProducts] = useState<Product[]>([])
  const { request, loading } = useHttp()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsQuery = qs.stringify({
          _where: {
            _or: [
              ...categories!.flatMap((parentCategory) => [
                {
                  'category.id': parentCategory.id,
                },
              ]),
            ],
          },
          _limit: 4,
          _sort: 'id:desc',
        })

        const products: ProductDTO[] = await request(
          `/products?${productsQuery}`,
          'GET'
        )

        products &&
          products.length &&
          setCurrentProducts(
            products.map((product) => ({
              id: product.id,
              productName: product.name,
              price: product.price,
              imageUrl: getProductImage(product),
            }))
          )
      } catch (err) {
        console.log(err)
      }
    }

    getProducts()

    return () => {
      setCurrentProducts([])
    }
  }, [request, categories])

  return (
    <div className="hovered-menu">
      {categories?.length ? (
        <>
          <div className="menu__body">
            <div className="menu__categories">
              {categories?.map((category) => (
                <div className="categories__item" key={String(category.id)}>
                  <div className="item__name">{category.name}</div>
                  {!category.subCategories && (
                    <div className="item__pointer"></div>
                  )}
                </div>
              ))}
            </div>
            {loading && !currentProducts.length ? (
              <div className="menu__products">
                <div className="products__loading">
                  <Loader />
                </div>
              </div>
            ) : null}
            {!loading && (
              <div className="menu__products">
                {currentProducts.length ? (
                  currentProducts.map((product) => (
                    <ProductCard
                      id={product.id}
                      imageUrl={product.imageUrl || reservedImg}
                      price={product.price}
                      productName={product.productName}
                      key={product.id}
                    />
                  ))
                ) : (
                  <div className="products__empty-placeholder">
                    There are no products yet...
                  </div>
                )}
              </div>
            )}
          </div>
          <CompaniesLogos />
        </>
      ) : (
        <div className="hovered-menu">
          <div className="menu__empty-alert">
            There are no categories yet...
          </div>
        </div>
      )}
    </div>
  )
}

export default HoveredMenu
