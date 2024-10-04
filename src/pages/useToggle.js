import { useState } from "react"

export const useToggle = (intial = false) =>{
    const [state , setState] = useState(intial)
    const toggle = () =>{
        setState((prev) => !prev)
    }
    return [state,toggle]
}