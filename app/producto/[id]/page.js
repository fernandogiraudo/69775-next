'use client';
import mockData from '@/data/mockData';
import { useParams } from 'next/navigation'
import React from 'react'

const ProductDetail = () => {
    const { id } = useParams();
    const singleProduct = mockData.find(product => product.id == id);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{singleProduct.title}</div>
          <p className="text-gray-700 text-base">{singleProduct.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {singleProduct.category}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {singleProduct.price}
          </span>
        </div>
      </div>
  )
}

export default ProductDetail