import {ICartItem} from "../../../redux/cart"

export type CartTableProps = {
    cartItems: ICartItem[]
    deleteCartItem: (cartId: string) => void
}