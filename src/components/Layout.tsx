import React from 'react'
import { Nav } from './Nav'

type Props = {
	children: React.ReactNode
}

const Layout = (props: Props) => {
	return (
		<div>
			<Nav />

			<div className="h-[90vh] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative ">
				{/* Radial gradient for the container to give a faded look */}
				<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
				<div className='pt-[150px]'>
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default Layout

