import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode,
	asChild?: boolean,
	className?: string,
}

export function Button ({ children, asChild, className, ...props }: ButtonProps) {
	const Comp = asChild ? Slot : 'button'
	
	return (
		<Comp 
			className={clsx(
				'py-3 px-4 bg-cyan-500 h-12 leading-none rounded font-semibold text-black text-sm hover:bg-cyan-300 focus:ring-2 ring-white transition-colors w-full',
				className,
				{...props},
		)}>
			{children}
		</Comp>
	)
}