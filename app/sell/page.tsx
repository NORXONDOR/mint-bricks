import Image from "next/image"

export default function Home() {
	return (
		<div className="flex-col content-center space-y-10 px-96 py-8">
			<div className="flex flex-col space-y-10 pb-16">
				<span className="text-center text-6xl font-semibold">
					Sell Your LEGO®
				</span>
				<section className="space-y-10 pb-16">
					<p className="text-center text-3xl font-semibold leading-relaxed">
						Kids get tired of their LEGO®? Maybe you need to free
						up space? Need some cash to buy the latest sets?
					</p>
					<p className="text-center text-3xl font-semibold leading-relaxed">
						Here at Mint-Bricks, we're more than interested in
						buying anything LEGO®, including parts, sets, or your
						whole collection! Follow these steps below and we'll get
						back to you with an offer as soon as possible.
					</p>
				</section>
			</div>
			<section className="flex flex-col space-y-10 pb-16">
				<span className="text-center text-6xl font-semibold">
					How does it work?
				</span>
				<div className="flex justify-center space-x-12">
					<div className="relative h-80 w-80 flex-none">
						<Image
							src="/placeholder.png"
							fill
							alt="Step 1"
							className="rounded-full bg-cover bg-center drop-shadow-lg"
						/>
					</div>
					<div className="relative h-80 w-80 flex-none">
						<Image
							src="/placeholder.png"
							fill
							alt="Step 1"
							className="rounded-full bg-cover bg-center drop-shadow-lg"
						/>
					</div>
					<div className="relative h-80 w-80 flex-none">
						<Image
							src="/placeholder.png"
							fill
							alt="Step 1"
							className="rounded-full bg-cover bg-center drop-shadow-lg"
						/>
					</div>
					<div className="relative h-80 w-80 flex-none">
						<Image
							src="/placeholder.png"
							fill
							alt="Step 1"
							className="rounded-full bg-cover bg-center drop-shadow-lg"
						/>
					</div>
				</div>
			</section>
			<form
				action="mailto:wedgesbiz@gmail.com"
				method="get"
				encType="text/plain"
				className="m-4 mx-auto flex w-1/2 flex-col space-y-6 rounded-xl bg-white p-8 drop-shadow-lg"
			>
				<span className="mx-auto text-5xl">Seller Form</span>
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="w-[30ch] rounded px-1.5 py-0.5 text-2xl drop-shadow"
				/>
				<input
					type="text"
					name="weight"
					placeholder="LEGO Weight (kg)"
					className="w-[20ch] rounded px-1.5 py-0.5 text-2xl drop-shadow"
				/>
				<div className="flex flex-col rounded bg-white px-1.5 py-0.5 text-2xl drop-shadow">
					<span className="">Picture(s) of your LEGO®</span>
					<input
						type="file"
						name="lego"
						className="rounded-sm px-1.5 py-0.5 drop-shadow"
					/>
				</div>
				<textarea
					name="body"
					placeholder="Anything you want to tell us about your LEGO?"
					className="h-32 w-[40ch] resize-none rounded px-1.5 py-0.5 text-2xl drop-shadow"
				/>
				<input
					type="submit"
					value="Get A Quote"
					className="mx-auto rounded-md bg-mint-bricks-main px-8 py-2 text-3xl drop-shadow-md"
				/>
			</form>
		</div>
	)
}
