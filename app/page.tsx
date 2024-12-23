import Separator from "./ui/Separator"
import ImageSlider from "./ui/ImageSlider"

export default function Home() {
	const images = [
		{
			url: "/slider1placeholder.png",
			label: "Slider 1",
			heading: "Nothing but mint-condition",
			description: "We sell everything LEGO® at the highest quality.",
			link: "https://store.bricklink.com/NORX#/shop"
		},
		{
			url: "/slider2placeholder.png",
			label: "Slider 2",
			heading: "We buy LEGO®",
			description: "Slider 2 Description.",
			link: "/sell"
		}
	]

	return (
		<>
			<ImageSlider images={images} />
			<Separator />
		</>
	)
}
