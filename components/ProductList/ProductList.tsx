import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Card } from 'semantic-ui-react'
import { ProductListProps } from './ProductList.interface'
import Image from 'next/image'

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Card.Group centered>
      {products.map((product) => (
        <Link href={`/product/${product.id}`} passHref key={product.id}>
          <Card>
            <Image src={product.image} width="290" height="290" />
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
