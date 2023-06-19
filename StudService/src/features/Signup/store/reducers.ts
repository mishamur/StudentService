
export const userReducer = (action, state = {}) => {
  switch (action.type){
    case 'USER_LOGIN':(
      return [...state]
    )
    default:(
      return state
    )
  }
}
