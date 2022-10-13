import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps {
	children: ReactNode,
	asChild?: boolean,
}

export function Button ({ children, asChild }: ButtonProps) {
	const Comp = asChild ? Slot : 'button'
	
	return (
		<Comp 
			className={clsx(
				'py-4 px-3 bg-cyan-500 h-12 leading-none rounded font-semibold text-black text-sm hover:bg-cyan-300 focus:ring-2 ring-white transition-colors w-full',
		)}>
			{children}
		</Comp>
	)
}