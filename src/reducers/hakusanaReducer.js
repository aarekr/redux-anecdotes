import { createSlice } from "@reduxjs/toolkit"

const hakusanaSlice = createSlice({
    name: 'hakusana',
    initialState: null,  // alussa näytetään kaikki anekdootit
    reducers: {
        suodata(state,action) {
            const sana = action.payload
            state = sana
            return state
        }
    }
})

export const { suodata } = hakusanaSlice.actions
export default hakusanaSlice.reducer