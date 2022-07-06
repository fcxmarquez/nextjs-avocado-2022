import React, { useState } from 'react'
import { Container, Icon, Input, Transition } from 'semantic-ui-react'
import { useCart, useCartMutation } from 'store/Cart'

interface InputCartProps {
  product: TProduct
}

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const addCartRequest = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 600)
  })

export const InputCart: React.FC<InputCartProps> = ({ product }) => {
  const { countById } = useCart()
  const [itemValue, setItemValue] = useState(countById(product.id))
  const [loadingInput, setLoadingInput] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [messageVisible, setMessageVisible] = useState(false)
  const { addCartItem } = useCartMutation()

  const toggleMessage = () => {
    setTimeout(() => {
      setMessageVisible(false)
    }, 1000)
  }

  const handleButtonAdd = async () => {
    const error = validate(itemValue)
    setErrorMessage(error)

    if (!error) {
      setLoadingInput(true)
      try {
        await addCartRequest()
        addCartItem(product, itemValue)
        setLoadingInput(false)
        setMessageVisible(true)
        toggleMessage()
      } catch (error: any) {
        setErrorMessage(error.message)
        setLoadingInput(false)
      }
    }
  }

  return (
    <>
      <Input
        type="number"
        min={1}
        step={1}
        value={itemValue || ''}
        error={!!errorMessage}
        placeholder="Add to cart"
        onChange={(e) => setItemValue(Number(e.target.value))}
        action={{
          color: 'green',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: handleButtonAdd,
          loading: loadingInput,
          disabled: loadingInput,
        }}
      />
      {errorMessage && (
        <div style={{ color: 'red', position: 'absolute' }}>{errorMessage}</div>
      )}
      <Transition duration={{ hide: 500, show: 500 }} visible={messageVisible}>
        <div style={{ color: 'green', position: 'absolute' }}>
          <Icon name="check" />
          Added to cart
        </div>
      </Transition>
    </>
  )
}
function CartContext(CartContext: any) {
  throw new Error('Function not implemented.')
}
