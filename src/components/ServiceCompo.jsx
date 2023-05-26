import React from 'react'

const ServiceCompo = ({classes,title,desc}) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2">
  <div className="p-4">
  <i className={`${classes} text-2xl text-red-600 mb-2`}></i>
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{desc}</p>
  </div>
</div>
  )
}

export default ServiceCompo
