import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
const initialState = {
    cartstate: false,
    cartitems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount: 0,
    cartTotalQty: 0
}
const cartSlice = createSlice({
    initialState,
    name: 'Cart',
    reducers: {
        SetopenCart: (state, action) => {
            state.cartstate = action.payload.cartstate
        },

        SetcloseCart: (state, action) => {
            state.cartstate = action.payload.cartstate
        },
        AdditemstoCart: (state, action) => {
            const itemindex = state.cartitems.findIndex((item) => (item.id === action.payload.id))
            if (itemindex >= 0) {
                state.cartitems[itemindex].cartQuantity += 1;
                toast.success(`Item QTY Increased`)
            } else {
                const temp = {...action.payload, cartQuantity: 1 }
                state.cartitems.push(temp)
                toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem("cart", JSON.stringify(state.cartitems))


        },
        setRemoveItemFRomCart: (state, action) => {
            const removeitem = state.cartitems.filter((item) => item.id !== action.payload.id);
            state.cartitems = removeitem;
            localStorage.setItem("cart", JSON.stringify(state.cartitems))
            toast.success(`${action.payload.title} Removed From Cart`)
        },
        setIncreaseitemqty: (state, action) => {
            const itemindex = state.cartitems.findIndex((item) => (item.id === action.payload.id))
            if (itemindex >= 0) {
                state.cartitems[itemindex].cartQuantity += 1;
                toast.success(`Item QTY Increased`)
            } else {
                const temp = {...action.payload, cartQuantity: 1 }
                state.cartitems.push(temp)
                toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem("cart", JSON.stringify(state.cartitems))

        },
        setdecreaseitemqty: (state, action) => {
            const itemindex = state.cartitems.findIndex((item) => (item.id === action.payload.id))
            if (state.cartitems[itemindex].cartQuantity > 1) {
                state.cartitems[itemindex].cartQuantity -= 1;
                toast.success(`Item QTY Decreased`)
            } else {
                const temp = {...action.payload, cartQuantity: 1 }
                state.cartitems.push(temp)
                toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem("cart", JSON.stringify(state.cartitems))

        },
        setClearCartItem: (state, action) => {
            state.cartitems = []
            toast.success('Cart Cleared')
            localStorage.setItem("cart", JSON.stringify(state.cartitems))

        },
        setGetTotal: (state, action) => {
            let { totalAmount, totalQty } = state.cartitems.reduce((cartTotal, cartitem) => {
                const { price, cartQuantity } = cartitem
                const totalprice = price * cartQuantity;
                cartTotal.totalAmount += totalprice;
                cartTotal.totalQty += cartQuantity
                return cartTotal
            }, {
                totalAmount: 0,
                totalQty: 0
            })
            state.cartTotalAmount = totalAmount;
            state.cartTotalQty = totalQty

        }
    },
})
export const {
    SetopenCart,
    SetcloseCart,
    AdditemstoCart,
    setRemoveItemFRomCart,
    setIncreaseitemqty,
    setClearCartItem,
    setdecreaseitemqty,
    setGetTotal
} = cartSlice.actions;
export const selectCartState = (state) => state.Cart.cartstate
export const selectCartitems = (state) => state.Cart.cartitems
export const selectTotalAmount = (state) => state.Cart.cartTotalAmount
export const selectTotalQty = (state) => state.Cart.cartTotalQty
export default cartSlice.reducer;