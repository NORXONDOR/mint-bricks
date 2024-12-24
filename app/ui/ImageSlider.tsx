"use client"

import Image from "next/image"
import { useState } from "react"

interface ImageSliderProps {
	images: {
		url: string
		label: string
		heading: string
		description: string
		link: string
	}[]
}

export default function ImageSlider({ images }: ImageSliderProps) {
	const [currentImageIdx, setCurrentImageIdx] = useState(0)

	function prevImage() {
		if (currentImageIdx === 0) {
			setCurrentImageIdx(images.length - 1)
		} else {
			setCurrentImageIdx(currentImageIdx - 1)
		}
	}

	function nextImage() {
		if (currentImageIdx === images.length - 1) {
			setCurrentImageIdx(0)
		} else {
			setCurrentImageIdx(currentImageIdx + 1)
		}
	}

	return (
		<div className="relative h-[60rem] w-full">
			<Image
				src={images[currentImageIdx].url}
				layout="fill"
				alt={images[currentImageIdx].label}
				className="object-cover"
			/>
			<div className="relative flex h-full">
				<div className="w-[10%]">
					<button
						onClick={prevImage}
						className="group grid h-full w-full place-content-center"
					>
						<div className="relative rounded-full bg-white bg-opacity-20 p-10 transition ease-out group-hover:-translate-x-1.5 group-hover:bg-opacity-45">
							<Image
								src="/prev.svg"
								layout="fill"
								alt="previous-button"
							/>
						</div>
					</button>
				</div>
				<div className="w-[80%]">
					<section className="mx-40 mt-40 h-full">
						<p className="absolute text-9xl">
							{images[currentImageIdx].heading}
						</p>
						<p className="absolute mt-40 text-6xl">
							{images[currentImageIdx].description}
						</p>
						<a
							className="absolute ml-6 mt-[30rem] rounded-full bg-white px-10 py-6 text-left text-6xl drop-shadow-lg transition ease-linear hover:bg-black hover:text-white"
							href={images[currentImageIdx].link}
						>
							Learn more
						</a>
					</section>
				</div>
				<div className="w-[10%] text-center">
					<button
						onClick={nextImage}
						className="group grid h-full w-full place-content-center"
					>
						<div className="relative rounded-full bg-white bg-opacity-20 p-10 transition ease-out group-hover:translate-x-1.5 group-hover:bg-opacity-45">
							<Image
								src="/next.svg"
								layout="fill"
								alt="previous-button"
							/>
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}
