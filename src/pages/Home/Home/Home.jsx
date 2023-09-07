import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Preloader from "../../shared/Preloader/Preloader";
import Advertise from "../Advertise/Advertise";
import Trending from "../Trending/Trending/Trending";
import Categories from "../Categories/Categories/Categories";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  const categoriesData = useLoaderData();
  const navigation = useNavigation();

  const {
    data: { adevertisements } = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["advertisement"],
    queryFn: () =>
      fetch(`https://resales-utopia-server.vercel.app/advertise`).then((res) =>
        res.json()
      ),
  });

  if (navigation.state === "loading" || isLoading) {
    return <Preloader></Preloader>;
  }
  return (
    <div>
      {adevertisements?.length && <Advertise>{adevertisements}</Advertise>}
      <Categories categoriesData={categoriesData}></Categories>
      <Trending />
    </div>
  );
};

export default Home;
