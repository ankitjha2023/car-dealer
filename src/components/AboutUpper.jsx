import React from 'react'

const AboutUpper = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-20  mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold mb-2 ">
                ABOUT US
              </h1>
              <div className="leading-relaxed">
                <h2 className=' md:text-xl mb-4'>Everything you need to build an amazing dealership website.</h2>
                <p className='text-violet-600'>Car Dealer is the best premium HTML5 Template. We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers. You can use this template for creating website based on any framework and any language</p>
              </div>
            </div>

          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img
              className="object-contain object-center w-full h-full"
              src="/car2.png"
              alt="stats"
            />
          </div>
        </div>
      </section>
  )
}

export default AboutUpper
