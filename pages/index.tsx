import { ProductList } from '@components/ProductList/ProductList'

import React, { useEffect, useState } from 'react'
import { Container, Divider, Segment } from 'semantic-ui-react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => {
        setProductList(data)
      })
  }, [])

  return (
    <>
      <Segment textAlign="center" basic>
        <h1>Avocados and Next.js!</h1>
        <p>Should I eat an avo today?</p>
      </Segment>

      <ProductList products={productList} />
    </>
  )
}

export default HomePage
