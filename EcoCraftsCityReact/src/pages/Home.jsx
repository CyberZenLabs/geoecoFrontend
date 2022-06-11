import React, { useEffect, useState } from "react";
import useAxiosFunction from "../hooks/useAxiosFunction";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import StarRating from "../components/StarRating";
import {
  ProductGrid,
  HomeContainer,
} from "../styled-components-css/styles.product-card";
import { SliderData } from "../utils/sliderData";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [response, error, loading, axiosFetch] = useAxiosFunction();
  useEffect(() => {
    // axiosFetch({
    //   axiosInstance: axios,
    //   auth: "",
    //   method: "GET",
    //   url: `https://radiant-river-29802.herokuapp.com/api/v1/products`,
    //   requestConfig: {},
    // });
    // setProducts([response]);

    axios
      .get("https://radiant-river-29802.herokuapp.com/api/v1/products")
      .then((res) => {
        setProducts(res.data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <HomeContainer>
        <Carousel slides={SliderData} />

        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </HomeContainer>
    </>
  );
};

export default Home;
