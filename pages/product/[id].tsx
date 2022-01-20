import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then(({ data }) => {
          setProduct(data)
        })
    }
  }, [id])

  return (
    <div>
      <h1>{product?.name}</h1>
      {/* Conditional cause maybe you don't recive any params */}
    </div>
  )
}

export default ProductPage
