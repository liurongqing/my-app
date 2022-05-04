import React, { useReducer } from 'react'
import {
  CommonContext,
  CommonDispatchContext,
  CommonReducer,
  CommonState,
} from '@/reducers'
import { RoutersComponent } from './routers'

export const App = () => {
  const [state, dispatch] = useReducer(CommonReducer, CommonState)
  console.error('state,', state, dispatch)
  return (
    <CommonContext.Provider value={state}>
      <CommonDispatchContext.Provider value={dispatch as any}>
        <RoutersComponent />
      </CommonDispatchContext.Provider>
    </CommonContext.Provider>
  )
}
