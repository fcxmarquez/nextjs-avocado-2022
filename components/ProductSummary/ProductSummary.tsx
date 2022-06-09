import { InputCart } from '@components/InputCart/InputCart'
import React from 'react'
import { Item, Image, Label, Container } from 'semantic-ui-react'

type ProductSummaryProps = {
  product: TProduct
}

export const ProductSummary: React.FC<ProductSummaryProps> = ({ product }) => {
  return (
    <>
      <Item.Group as="section">
        <Item style={{ alignItems: 'center' }}>
          <Item.Image size="medium" src={product.image} />
          <Item.Content verticalAlign="middle">
            <Item.Header as="h2">{product.name}</Item.Header>
            <Item.Meta>
              <p>{product.sku}</p>
              <Label>{`PRICE: $${product.price}`}</Label>
            </Item.Meta>
            <Item.Extra>
              <InputCart product={product} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <Container>
        <h3>Description Info</h3>
        <p>{product.attributes.description}</p>
      </Container>
    </>
  )
}
