import { time } from 'console'
import React from 'react'
import { Button, Item } from 'semantic-ui-react'
import { CartItemType, useCartMutation } from 'store/Cart'

type CartItemProps = {
  item: CartItemType
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeCartItem } = useCartMutation()

  return (
    <Item.Group>
      <Item>
        <Item.Image size="small" src={item.image} />
        <Item.Content verticalAlign="middle">
          <Item.Header as="h3">{item.name}</Item.Header>
          <Item.Meta>
            <b>
              {item.quantity} x {item.price}
            </b>
            <Button
              floated="right"
              icon={'cancel'}
              onClick={() => removeCartItem(item)}
            />
          </Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}
