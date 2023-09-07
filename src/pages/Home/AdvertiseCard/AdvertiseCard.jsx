import React from "react";

const AdvertiseCard = ({ advertise }) => {
  return (
    <div
      className="grid grid-cols-3 rounded-md h-[650px] bg-no-repeat  bg-cover"
      style={{
        backgroundImage: `url("https://img.freepik.com/premium-vector/modern-curve-frame-design-business_336924-4473.jpg")`,
      }}
    >
      <figure className="flex items-center justify-center px-5 col-span-1 bg-white">
        <img
          src={`${advertise.photoURL}`}
          alt=""
          className="w-full h-[300px] rounded-md"
        />
      </figure>
      <div className="card-body text-white col-span-2 px-12 pt-32">
        <h2 className="card-title text-accent">Get 20% Off Today</h2>
        <p className="text-3xl font-bold">
          <span className="text-white lg:text-6xl ">
            {advertise.productName}
          </span>
        </p>
        <p className="lg:text-2xl">
          {advertise?.desc?.length > 50
            ? advertise?.desc.slice(0, 50)
            : advertise.desc}
        </p>
        <div className="card-actions justify-center">
          <button className="btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseCard;
