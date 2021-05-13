import { useEffect } from 'react'

const useCustomHook = () => {
  useEffect(
    () => {
      console.log('works!')
    },
    [],
  )
}

export default useCustomHook
