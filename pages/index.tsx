import { PageError } from '@components/Errors/PageError/PageError'
import { CardSkeleton } from '@components/Loaders/CardSkeleton/CardSkeleton'
import { ProductList } from '@components/ProductList/ProductList'

import React, { useEffect, useState } from 'react'
import { Segment } from 'semantic-ui-react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => {
        setProductList(data)
      })
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (error) {
    return <PageError error={error} />
  }

  return (
    <>
      <Segment textAlign="center" basic>
        <h1>Avocados and Next.js!</h1>
        <p>Should I eat an avo today?</p>
      </Segment>
      {loading ? <CardSkeleton /> : <ProductList products={productList} />}
    </>
  )
}

export default HomePage
