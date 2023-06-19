import { createSlice } from '@reduxjs/toolkit'

type SessionSliceState = {
  accessToken?: string
  email?: string
  isAuthorized: boolean
}
type payload = {
  token: string,
  email : string
}

const initialState: SessionSliceState = {
  isAuthorized: false
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    clearSessionData: (state) => {
      state.accessToken = undefined
      state.email = undefined
      state.isAuthorized = false
    },
    addSessionData: (state, action) => {
      state.accessToken = action.payload.token
      state.email = action.payload.email
      state.isAuthorized = true
    }
  }
  // extraReducers: (builder) => {
  //   builder.addMatcher(sessionApi.endpoints.login.matchFulfilled, (state: SessionSliceState, { payload }) => {
  //     state.isAuthorized = true

  //     // say TypeScript that isAuthorized = true
  //     if (state.isAuthorized) {
  //       state.userId = payload.userId
  //       state.accessToken = payload.accessToken
  //     }
  //   })
  // }
})

export const { clearSessionData, addSessionData } = sessionSlice.actions

export default sessionSlice.reducer
