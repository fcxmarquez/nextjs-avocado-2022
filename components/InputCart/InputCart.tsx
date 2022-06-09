import React, { useContext, useState } from 'react'
import { Button, Container, Input } from 'semantic-ui-react'
import { useCart, useCartMutation } from 'store/Cart'

interface InputCartProps {
  product: TProduct
}

// Add context
// Add a fetching simulation
// Add a loading state
// Add a error state
// Add a toast notification when the product is added

export const InputCart: React.FC<InputCartProps> = ({ product }) => {
  const [itemValue, setItemValue] = useState(1)
  const { addCartItem } = useCartMutation()
  const [state] = useCart()
  console.log(state)

  const handleButtonAdd = () => {
    addCartItem(product, itemValue)
  }

  /* 
  {
    sku,
    count
  }
  */

  return (
    <Container>
      <Input
        type="number"
        min={1}
        step={1}
        value={itemValue}
        onChange={(e) => setItemValue(Number(e.target.value))}
        action={{
          color: 'green',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: handleButtonAdd,
        }}
      />
    </Container>
  )
}
function CartContext(CartContext: any) {
  throw new Error('Function not implemented.')
}
