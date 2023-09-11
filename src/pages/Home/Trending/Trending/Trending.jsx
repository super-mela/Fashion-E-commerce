import React, { useState, } from "react";
import { useQuery } from "@tanstack/react-query";

import bg from "../../../../assets/line-red.svg";
import BookingModal from "../../../../components/BookingModal/BookingModal";
import Title from "../../../../components/Title/Title";
import TrendingCard from "../TrendingCard/TrendingCard";
import Preloader from "../../../shared/Preloader/Preloader";

const Trending = () => {
    const [bookingProduct, setBookingProduct] = useState("");
    const {
        data: { products } = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["products"],
        queryFn: () =>
            fetch(`https://resales-utopia-server.vercel.app/products/${'638256504464b0d5fe6cc72f'}`).then(
                (res) => res.json()
            ),
    });
    if (isLoading) {
        return <Preloader></Preloader>;
    }
    return (
        <section
            className="bg-no-repeat bg-right-bottom  lg:px-24 mx-auto my-10 font-urbanist"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <Title>Trending Products</Title>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 my-10">
                {products?.map((product) => (
                    <TrendingCard
                        key={product._id}
                        product={product}
                        setBookingProduct={setBookingProduct}
                    ></TrendingCard>
                ))}
            </div>
            {bookingProduct && (
                <BookingModal
                    bookingProduct={bookingProduct}
                    setBookingProduct={setBookingProduct}
                ></BookingModal>
            )}
        </section>
    );
};

export default Trending;
