import React, {useEffect, useState} from 'react';
import useAxiosFunction from '../hooks/useAxiosFunction';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
import StarRating from '../components/StarRating';
import {ProductGrid, HomeContainer} from '../styled-components-css/styles.product-card';
import {SliderData} from '../utils/sliderData';
import axios from '../apis/admin-rest';
import {
    FlowerLoaderSc,
} from '../styled-components-css/styles.loader';
import AppContext from "../context/AppContext";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setiSLoading] = useState(false);
    const {productList, setProductsLIst} = React.useContext(AppContext);

    const [response, error, loading, axiosFetch] = useAxiosFunction();
    useEffect(() => {
        // axiosFetch({
        //   axiosInstance: axios,
        //   auth: '',
        //   method: 'GET',
        //   url: `/api/v1/products`,
        //   requestConfig: {},
        // });

        setiSLoading(true);

        axios
            .get('https://geoeco-t7js76po3a-uc.a.run.app/api/v1/products')
            .then((res) => {
                // console.log(res);

                setProducts(res.data.data.data);
                setiSLoading(false);
                setProductsLIst(res.data.data.data)

            })
            .catch((err) => {
                setiSLoading(false);
            });
    }, []);

    // useEffect(() => {}, [response]);

    return (
        <>
            <HomeContainer isLoading={isLoading}>
                <Carousel slides={SliderData}/>
                {isLoading && (
                    <section>
                        <div class="loader loader-3">
                            <div class="dot dot1"></div>
                            <div class="dot dot2"></div>
                            <div class="dot dot3"></div>
                        </div>
                    </section>
                )}
                {productList &&
                    !isLoading &&
                    productList.map((product, i) => {
                        console.log(product);
                        return <ProductCard product={product}
                                            key={`product${i}`}
                                            index={i}
                        />;
                    })}
            </HomeContainer>

        </>
    );
};

export default Home;
