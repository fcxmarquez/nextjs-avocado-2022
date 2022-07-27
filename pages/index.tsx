import { PageError } from '@components/Errors/PageError/PageError'
import { CardSkeleton } from '@components/Loaders/CardSkeleton/CardSkeleton'
import { ProductList } from '@components/ProductList/ProductList'
import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://nextjs-avocado-2022.vercel.app/api/avo')
  const errorCode = response.ok ? false : response.status
  const { data: productList }: TAPIAvoResponse = await response.json()
  return { props: { errorCode, productList } }
}

const HomePage = ({
  productList,
  errorCode,
}: {
  productList: TProduct[]
  errorCode: number
}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (productList) {
      setIsLoading(false)
    }
  }, [])

  if (errorCode) {
    return <PageError error={`Ups, error code: ${errorCode}`} />
  }

  return (
    <>
      <Segment textAlign="center" basic>
        <h1>Avocados and Next.js!</h1>
        <p>Should I eat an avo today?</p>
      </Segment>
      {isLoading ? <CardSkeleton /> : <ProductList products={productList} />}
    </>
  )
}

export default HomePage
