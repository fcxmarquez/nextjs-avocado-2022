import React, { ReactNode } from 'react'

type CartAction = {
  type: string
  item: TProduct
  quantity?: number
}

export type CartItemType = TProduct & { quantity: number }

type CartState = { [key: string]: CartItemType }

const CartContext = React.createContext<any | undefined>({})

const initialState = {} as CartState

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = React.useReducer(cartReducer, initialState)
  const value = React.useMemo(() => [state, dispatch], [state])
  return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}

const cartReducer = (
  state: CartState,
  { item, quantity = 1, type }: CartAction
) => {
  const existingCartItem = state[item.id]

  switch (type) {
    case 'add': {
      if (existingCartItem != undefined) {
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
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
      if (existingCartItem == undefined) {
        return state
      }

      const newCartItems = { ...state }
      delete newCartItems[item.id]
      return newCartItems

    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

const getCountItems = (sum: number, item: CartItemType) => sum + item.quantity

const getSumItems = (sum: number, item: CartItemType) =>
  sum += item.price * item.quantity

export const useCart = () => {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  const items: CartItemType[] = Object.values(context[0])
  const [itemsById] = context
  const count = items.reduce(getCountItems, 0)
  const subtotal = items.reduce(getSumItems, 0)
  const countById = (id: string) => {
    if (itemsById[id]) {
      return itemsById[id].quantity as number
    }
    return 0
  }

  return { items, itemsById, count, countById, subtotal }
}

export const useCartMutation = () => {
  const [, dispatch] = React.useContext(CartContext)

  const addCartItem = (item: TProduct, quantity: number) => {
    dispatch({ type: 'add', item, quantity })
  }

  const removeCartItem = (item: TProduct) => {
    dispatch({ type: 'remove', item })
  }

  return { addCartItem, removeCartItem }
}
