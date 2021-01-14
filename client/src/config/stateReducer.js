export default function stateReducer (state, action)
{
  switch(action.type)
  {
      case "setLoggedInUser": {
          return {
              ...state,
              loggedInUser: action.data
          }
      }

      case "createUser" || "updateUser": {
        return {
            ...state,
            user: action.data
        }
      }

      case "createDesk" || "updateDesk": {
        return {
            ...state,
            desk: action.data
        }
      }

      default: 
          return state
  }
}