import { useContext } from 'react'
import { CommonContext } from '@/reducers'

export const useCommonState = () => useContext(CommonContext)
