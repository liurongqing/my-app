import React, { createContext } from 'react'
import { ICommonState } from './CommonState'
import { IAction } from './CommonReducer'

export const CommonContext = createContext<ICommonState>({})
export const CommonDispatchContext = createContext<React.Dispatch<IAction>>(
  () => {}
)
