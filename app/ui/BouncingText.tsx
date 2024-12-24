interface BouncingTextProps {
	children: string
	className?: string
}

export default function BouncingText({
	children,
	className
}: BouncingTextProps) {
	return (
		<div className={`group flex ${className ?? ""}`}>
			{children.split("").map((char, index) => (
				<span
					key={index}
					className="group-hover:animate-bounce-short"
					style={{
						animationDelay: `${index * 0.04}s`
					}}
				>
					{char}
				</span>
			))}
		</div>
	)
}
