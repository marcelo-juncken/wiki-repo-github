export interface ButtonProps {
    text: string
    classname?: string
    marginleft? : string
    marginright? : string
    onClick : () => void
}

export interface ButtonContainerProps {
    marginleft? : string
    marginright? : string
}