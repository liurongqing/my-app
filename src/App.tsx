import { useReducer } from 'react'
import {
  CommonContext,
  CommonDispatchContext,
  CommonReducer,
  CommonState,
} from '@/reducers'
import { RoutersComponent } from './routers'

export const App = () => {
  const [state, dispatch] = useReducer(CommonReducer, CommonState)
  return (
    <CommonContext.Provider value={state}>
      <CommonDispatchContext.Provider value={dispatch}>
        <RoutersComponent />
      </CommonDispatchContext.Provider>
    </CommonContext.Provider>
  )
}
