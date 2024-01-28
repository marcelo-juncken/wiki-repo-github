export interface ButtonProps {
    text: string
    classname?: string
    marginLeft? : string
    marginRight? : string
    onClick : () => void
}

export interface ButtonContainerProps {
    marginLeft? : string
    marginRight? : string
}