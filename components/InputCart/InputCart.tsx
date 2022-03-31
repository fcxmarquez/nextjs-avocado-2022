import React, { useState } from 'react'
import { Button, Container, Input } from 'semantic-ui-react'

export const InputCart = () => {
  const [itemValue, setItemValue] = useState(1)

  const handleChange = (e: any) => {
    if (e.target.value > 1) {
      setItemValue(1)
    }
    setItemValue(e.target.value)
  }

  return (
    <Container>
      <Input type="number" onChange={handleChange} value={itemValue} />
      <Button
        color="green"
        size="large"
        style={{ height: '100%', borderRadius: '0', margin: '0' }}
      >
        Add to cart
      </Button>
    </Container>
  )
}
