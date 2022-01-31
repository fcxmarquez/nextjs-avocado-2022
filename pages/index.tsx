import React, { useEffect, useState } from 'react'
import { Input } from 'semantic-ui-react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
