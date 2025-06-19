import type { ReactNode } from "react"

interface cardProps{
    children:ReactNode
}
export const Card:React.FC<cardProps> = ({children}) => {
  return (
    <div>
        {children}
    </div>
  )
}
