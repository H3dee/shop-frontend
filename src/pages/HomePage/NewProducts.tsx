import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../../components(shared)/ProductCard";
import { Product } from "../../interfaces/IProductCard";
import { useHttp } from "../../hooks/http.hook";
import Loader from "../../components(shared)/Loader";

const NewProducts: React.FC = React.memo(() => {
  const { loading, request } = useHttp();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    const amount = await request("/products/count", "GET");
    const queryParams = new URLSearchParams("?_start=value");
    queryParams.set("_start", String(amount - 6));

    const data = await request(`/products?${queryParams.toString()}`, "GET");
    data &&
      data instanceof Array &&
      setProducts(
        data.map((product) => ({
          id: product.id,
          imageUrl:
            product?.photo[0]?.formats?.medium?.url ||
            product?.photo[0]?.formats?.small?.url ||
            product?.photo[0]?.formats?.thumbnail?.url,
          productName: product.name,
          price: product.price,
        }))
      );
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
          products.map((product, index) => (
            <ProductCard
              key={String(product.id)}
              imageUrl={product.imageUrl}
              productName={product.productName}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
});

export default NewProducts;
