import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartData: [],
    },
    reducers: {
        AddToCart: (state, { payload }) => {
            const isCart = state.cartData.find(el => el.title === payload.title)
            console.log(isCart, "isCart");
            console.log(payload, 'pay');
            if (isCart) {
                const pro = state.cartData.find(el => el.title === payload.title)
                const dePro = state.cartData.filter(el => el.title !== payload.title)
                // pro.count = pro.count + 1
                console.log(pro, 'newPro');
                // const newPro = {...pro}
                state.cartData = [...dePro, {...pro, count: pro.count+1}]
                console.log(state.cartData);
            } else {
                const newPro = { ...payload, count: 1 }
                console.log(newPro, 'newPro');
                state.cartData = [...state.cartData, newPro]
                console.log(state.cartData, "cart");
            }
        }
    }
})

export default cartSlice.reducer
export const { AddToCart } = cartSlice.actions