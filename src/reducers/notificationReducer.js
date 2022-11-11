import { createSlice } from "@reduxjs/toolkit"

const ilmoitusSlice = createSlice({
    name: 'ilmoitus',
    initialState: (null),
    reducers: {
        naytaAanestysIlmoitus(state, action) {
            state = `you voted '${action.payload}'`
            return state
        },
        naytaLisaysIlmoitus(state, action) {
            console.log('ilmoitusSlice naytaLisaysIlmoitus')
            state = `you added '${action.payload}'`
            return state
        },
        resetoiIlmoitus(state, action) {
            console.log('ilmoitusSlice resetoiIlmoitus state:', state)
            state = null
            return state
        }
    }
})

export const { naytaAanestysIlmoitus, naytaLisaysIlmoitus, resetoiIlmoitus } = ilmoitusSlice.actions
export default ilmoitusSlice.reducer