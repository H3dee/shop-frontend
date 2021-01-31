import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../../components(shared)/ProductCard";
import { Product } from "../../interfaces/IProductCard";
import { useHttp } from "../../hooks/http.hook";
import Loader from "../../components(shared)/Loader";

const qs = require('qs')

const NewProducts: React.FC = React.memo(() => {
  const { loading, request } = useHttp();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const query = qs.stringify({
        _limit: 6,
        _sort: 'id:desc'
      })

      const data = await request(`/products?${query}`, "GET");

      data &&
        data instanceof Array &&
        setProducts(
          data.map((product) => ({
            id: product.id,
            imageUrl:
              product?.photo[0]?.formats?.medium?.url ||
              product?.photo[0]?.formats?.small?.url ||
              product?.photo[0]?.formats?.thumbnail?.url ||
              product?.photo[0]?.url,
            productName: product.name,
            price: product.price,
          }))
        );
    } catch (err) {
      console.log(err)
    }
  }, [request]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="content__new-products">
      <div className="new-products__head">
        <div className="head__title">New Products</div>
        <div className="head__see-all">
          <a href="/home">see all new products</a>
        </div>
      </div>
      <div className="new-products__list">
        {loading && <Loader />}
        {!loading &&
          products.map((product) => (
            <ProductCard
              id={product.id}
              key={String(product.id)}
              imageUrl={product.imageUrl}
              productName={product.productName}
              price={product.price}
              isExpanded={false}
            />
          ))}
      </div>
    </div>
  );
});

export default NewProducts;
