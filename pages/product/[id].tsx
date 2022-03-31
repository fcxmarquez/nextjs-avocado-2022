import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Segment, Image, Item, Divider } from 'semantic-ui-react'
import { ProductSummary } from '@components/ProductSummary/ProductSummary'
import { AttributesTable } from '@components/AttributesTable/AttributesTable'

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
    <>
      {product == null ? null : (
        <>
          <ProductSummary product={product} />
          <Divider />
          <AttributesTable product={product} />
        </>
      )}
    </>
  )
}

export default ProductPage
