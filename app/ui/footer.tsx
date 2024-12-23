export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-black text-center text-2xl text-white">
			© Mint-Bricks {currentYear}
		</footer>
	)
}
