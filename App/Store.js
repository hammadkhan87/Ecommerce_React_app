import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './CartSlice.js'
const store = configureStore({
    reducer: {
        Cart: cartSlice
    }
})
export default store;