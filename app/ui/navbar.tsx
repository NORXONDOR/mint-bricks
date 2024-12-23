import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
	return (
		<header>
			<div className="h-6 bg-black" />
			<div className="flex h-24 items-center justify-between px-14">
				<Link href="/">
					<div className="flex items-center space-x-4">
						<Image
							src="/logo.svg"
							width={72}
							height={72}
							alt="Mint-Bricks Logo"
						/>
						<span className="text-4xl font-semibold">
							Mint-Bricks
						</span>
					</div>
				</Link>
				<nav className="flex space-x-6">
					<Link
						href="/sell"
						className="rounded-full p-3 text-4xl font-semibold tracking-tighter hover:bg-black hover:text-white hover:drop-shadow-lg"
					>
						SELL YOUR LEGO
					</Link>
					<a
						href="https://store.bricklink.com/NORX#/shop"
						className="rounded-full p-3 text-4xl font-semibold tracking-tighter hover:bg-black hover:text-white hover:drop-shadow-lg"
					>
						SHOP
					</a>
				</nav>
			</div>
		</header>
	)
}
