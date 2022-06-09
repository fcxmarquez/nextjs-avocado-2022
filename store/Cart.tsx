import React, { ReactNode } from 'react'

type CartAction = {
  type: string
  item: TProduct
  quantity?: number
}

type CartItemType = TProduct & { quantity: number }

type CartState = { [key: string]: CartItemType }

const CartContext = React.createContext<any | undefined>({})

const initialState = {} as CartState

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState)
  const value = React.useMemo(() => [state, dispatch], [state])

  return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}

export const useCart = () => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  const [itemsById] = context

  return context
}

const cartReducer = (
  state: CartState,
  { item, quantity = 1, type }: CartAction
) => {
  const existingCartItem = state[item.id]

  switch (type) {
    case 'add': {
      if (existingCartItem != undefined) {
        const quantityToAdd = existingCartItem.quantity + quantity
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity: quantityToAdd,
          },
        }
      }
      return {
        ...state,
        [item.id]: {
          ...item,
          quantity,
        },
      }
    }

    case 'remove':
      return {}

    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

export const useCartMutation = () => {
  const [, dispatch] = useCart()

  const addCartItem = (item: TProduct, quantity: number) => {
    dispatch({ type: 'add', item, quantity })
  }

  return { addCartItem }
}
