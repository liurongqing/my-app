import { useContext } from 'react'
import { CommonDispatchContext } from '@/reducers'

export const useCommonDispatch = () => useContext(CommonDispatchContext)
