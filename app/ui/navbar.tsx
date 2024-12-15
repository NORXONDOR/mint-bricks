import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="flex items-center justify-between h-14 px-14">
            <Link href="/">
                <div className="flex items-center space-x-2">
                    <Image src="/logo.svg" width={36} height={36} alt="Mint-Bricks Logo"/>
                    <span className="font-semibold text-2xl">Mint-Bricks</span>
                </div>
            </Link>
            <nav className="flex space-x-6">
                <Link href="/sell" className="font-semibold text-2xl text-">SELL YOUR LEGO</Link>
                <a href="https://store.bricklink.com/NORX#/shop" className="font-semibold text-2xl">SHOP</a>
            </nav>
        </header>
    )
}