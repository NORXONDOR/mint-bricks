import Image from "next/image"
import Link from "next/link"
import BouncingText from "./BouncingText"

export default function Navbar() {
	return (
		<header>
			<div className="h-6 bg-black" />
			<div className="flex h-24 items-center justify-between px-14">
				<Link href="/">
					<div className="group flex items-center space-x-4">
						<Image
							src="/logo.svg"
							width={72}
							height={72}
							alt="Mint-Bricks Logo"
						/>
						<BouncingText className="text-4xl font-semibold">
							Mint-Bricks
						</BouncingText>
					</div>
				</Link>
				<nav className="flex space-x-6">
					<Link
						href="/sell"
						className="rounded-full px-6 py-4 text-4xl font-semibold tracking-tighter transition ease-linear hover:bg-black hover:text-white hover:drop-shadow-lg"
					>
						SELL YOUR LEGO
					</Link>
					<a
						href="https://store.bricklink.com/NORX#/shop"
						className="rounded-full px-6 py-4 text-4xl font-semibold tracking-tighter transition ease-linear hover:bg-black hover:text-white hover:drop-shadow-lg"
					>
						SHOP
					</a>
				</nav>
			</div>
		</header>
	)
}
