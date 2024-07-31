import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ContainerProps {
    children: ReactNode
    className?: string
}

export function Container({ children, className }: ContainerProps) {
    const defaultClass = "w-full max-w-grid mx-auto px-3"
    const combinedClass = twMerge(defaultClass, className)
    return (
        <div className={combinedClass}>
            {children}
        </div>
    )
}