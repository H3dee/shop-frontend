import React, { useEffect, useMemo, useState } from "react";
import { Product as ProductDTO } from "../../api/generated";
import Loader from "../../components(shared)/Loader";
import { useHttp } from "../../hooks/http.hook";
import { Product } from "../../interfaces/IProductCard";
import { getProductImage } from "../../util/getImage";
import GeneralDetails from "./GeneralDetails";
import Preview from "./Preview";

const qs = require("qs");

const ProductInfo: React.FC<{ productId: string }> = ({ productId }) => {
  const [product, setProduct] = useState<Product>();
  const [typeOfContent, setTypeOfContent] = useState("about");
  const { request, loading } = useHttp();

  const setTypeHandler = (type: string) => setTypeOfContent(type.toLowerCase());

  const tabContent = useMemo((): JSX.Element => {
    switch (typeOfContent) {
      case "specs":
        return (
          <div className="description__specs">
            {product?.specs?.length ? (
              product?.specs?.map((spec) => (
                <div className="specs__item" key={String(spec.id)}>
                  <div className="item__name">{spec.spec}</div>
                  <div className="item__value">{spec.value}</div>
                </div>
              ))
            ) : (
              <div className="specs__empty-placeholder">
                There are no some specs yet...
              </div>
            )}
          </div>
        );
      case "details":
        return (
          <div className="description__details">
            {product?.details?.length ? (
              product?.details?.map((detail) => (
                <div className="details__item" key={String(detail.id)}>
                  •<span className="name">{detail.detail}</span>
                </div>
              ))
            ) : (
              <div className="details__empty-placeholder">
                There are no some details yet...
              </div>
            )}
          </div>
        );
      default:
        return <div className="description__about">{product?.productName}</div>;
    }
  }, [typeOfContent, product?.details, product?.productName, product?.specs]);

  useEffect(() => {
    const getProduct = async () => {
      const query = qs.stringify({
        _where: { id: productId },
      });
      const data: ProductDTO[] = await request(`/products?${query}`, "GET");

      Array.isArray(data) &&
        data.length &&
        setProduct({
          id: data[0].id,
          productName: data[0].name,
          imageUrl: getProductImage(data[0]),
          price: data[0].price,
          details: data[0].details,
          specs: data[0].specs,
        });
    };

    getProduct();
  }, [productId, request]);

  return (
    <>
      {loading ? (
        <div className="product__content__loading">
          <Loader />
        </div>
      ) : (
        <>
          <GeneralDetails
            type={typeOfContent}
            setTypeHandler={setTypeHandler}
            productName={product?.productName}
            id={product?.id}
            price={product?.price}
            imageUrl={product?.imageUrl}
          />
          <div className="product__content__product-info">
            <div className="product__content__container">
              <div className="product-info__row">
                <div className="product-info__description">
                  <div className="product-info__description__container">
                    <div className="product-info__description__row">
                      <div className="product-info__description__body">
                        <div className="body__path">
                          <div className="path__item">Home</div>
                          <div className="path__item">Laptops</div>
                          <div className="path__item">MSI WS Series</div>
                        </div>
                        <div className="body__title">MSI MPG Trident 3</div>
                        <div className="body__subtitle">
                          Be the first to review this product
                        </div>
                        <div className="body__description">{tabContent}</div>
                        <div className="body__color-selectors">
                          {Array.from({ length: 3 }, (_, i) => (
                            <div
                              className="color-selectors__item"
                              key={String(i)}
                            ></div>
                          ))}
                        </div>
                        <div className="body__bottom">
                          <div className="bottom__question-ref">
                            Have a Question? <a href="/home">Contact Us</a>
                          </div>
                          <div className="bottom__product-code">
                            SKU D5515AI
                          </div>
                        </div>
                      </div>
                      <div className="product-info__description__show-more">
                        + More information
                      </div>
                    </div>
                  </div>
                </div>
                <Preview image={product?.imageUrl} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductInfo;
