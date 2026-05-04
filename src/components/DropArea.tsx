import { useState, useEffect } from "react"

const BG_COLORS = ["#313125", "#165C9A", "#C3B03E", "#2A493C", "#6F786B"]

type Drop = { x: number; y: number; color: string; scale: number }

const DropInc: React.FC<Drop> = ({ x, y, color, scale }) => {
	return (
		<>
			<style>{`
				@keyframes spread {
					0% { transform: scale(1); filter: blur(2px); }
					50% { filter: blur(3px); }
					100% { transform: scale(1.5); filter: blur(4px); }
				}
			`}</style>
			<div
				style={{
					position: "absolute",
					borderRadius: "50%",
					opacity: 0.8,
					transformOrigin: "center center",
					animation: "spread 6s ease-in-out forwards",
					width: `${scale}px`,
					height: `${scale}px`,
					top: `${y}px`,
					left: `${x}px`,
					backgroundColor: color,
					mixBlendMode: "darken",
				}}
			/>
		</>
	)
}

export const DropArea: React.FC = () => {
	const [drops, setDrops] = useState<Drop[]>([])
	const [mouseDownTime, setMouseDownTime] = useState(0)
	const [keySequence, setKeySequence] = useState("")

	const randomDrop = () => {
		const color = BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]
		const randomX = Math.random() * window.innerWidth
		const randomY = Math.random() * window.innerHeight
		const randomScale = Math.random() * 100 + 20
		setDrops((prev) => [...prev, { x: randomX, y: randomY, color, scale: randomScale }])
		const delay = Math.random() * 2000 + 1000
		setTimeout(() => randomDrop(), delay)
	}

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const newSequence = (keySequence + event.key).slice(-4)
			setKeySequence(newSequence)
			if (newSequence === "drop") {
				randomDrop()
				setKeySequence("")
			}
		}
		window.addEventListener("keydown", handleKeyDown)
		return () => window.removeEventListener("keydown", handleKeyDown)
	}, [keySequence, drops])

	const handlePointerDown = () => {
		setMouseDownTime(Date.now())
	}

	const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
		const holdTime = Date.now() - mouseDownTime
		const color = BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]
		setDrops([
			...drops,
			{
				x: event.clientX - holdTime / 10 / 2,
				y: event.clientY - holdTime / 10 / 2,
				color,
				scale: holdTime / 10,
			},
		])
	}

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				background: "white",
				cursor: "pointer",
				overflow: "hidden",
				position: "relative",
				touchAction: "none",
				WebkitTapHighlightColor: "transparent",
				userSelect: "none",
			}}
			onPointerDown={handlePointerDown}
			onPointerUp={handlePointerUp}
		>
			{drops.map((drop, index) => (
				<DropInc key={index} {...drop} />
			))}
		</div>
	)
}
