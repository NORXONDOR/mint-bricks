export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-white text-center">
            © Mint-Bricks {currentYear}
        </footer>
    )
}