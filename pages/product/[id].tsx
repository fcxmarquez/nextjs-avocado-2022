import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  Container,
  Segment,
  Image,
  Item,
  Divider,
  Loader,
} from 'semantic-ui-react'
import { ProductSummary } from '@components/ProductSummary/ProductSummary'
import { AttributesTable } from '@components/AttributesTable/AttributesTable'
import { PageLoader } from '@components/Loaders/PageLoader/PageLoader'
import { PageError } from '@components/Errors/PageError/PageError'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://nextjs-avocado-2022.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: { id },
  }))

  return {
    paths,
    // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(
    `https://nextjs-avocado-2022.vercel.app/api/avo/${id}`
  )
  const errorCode = response.ok ? false : response.status
  const { data: product }: TAPIAvoResponse = await response.json()
  return { props: { errorCode, product } }
}

const ProductPage = ({
  errorCode,
  product,
}: {
  errorCode: number
  product: TProduct
}) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (product) {
      setLoading(false)
    }
  }, [])

  if (errorCode) {
    return <PageError error={`Ups, error code: ${errorCode}`} />
  }

  return (
    <>
      {loading ? <PageLoader /> : null}
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
