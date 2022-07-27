import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { ProductListProps } from './ProductList.interface'

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  
  return (
    <Card.Group centered>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} passHref key={product.id}>
          <Card>
            <Image src={product.image} />
            <Card.Content style={{ color: 'black' }}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Card.Content>
          </Card>
        </Link>
      ))}
    </Card.Group>
  )
}
