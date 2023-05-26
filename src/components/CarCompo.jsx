import React from 'react';

const CarCompo = ({ src, name, price }) => {
  return (
    <div className="p-2 md:w-1/2 lg:w-1/4 sm:w-1/2 mx-auto">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-300 transform hover:scale-105"
            src={src}
            alt="blog"
          />
        </div>
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
          <b className="text-red-900 text-xl mt-5">{price}</b>
        </div>
      </div>
    </div>
  );
};

export default CarCompo;
