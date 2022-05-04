export interface IAction {
  type: 'setname' | 'resetname'
  payload?: any
}

export const CommonReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case 'setname': {
      return {
        ...state,
        name: action?.payload?.name,
      }
    }
    default: {
      throw Error('Unknown action:' + action.type)
    }
  }
}
