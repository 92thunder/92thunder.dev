import { useEffect, useState } from "react"

const BG_COLORS = ["#313125", "#165C9A", "#C3B03E", "#2A493C", "#6F786B"]

export const HeroArea: React.FC = () => {
	const [gradient, setGradient] = useState("")
	const [transform, setTransform] = useState({ x: 1, y: 1 })

	useEffect(() => {
		const colors: string[] = []
		const colorsLength = Math.max(Math.floor(Math.random() * 5), 2)
		while (colors.length <= colorsLength) {
			const index = Math.floor(Math.random() * BG_COLORS.length)
			if (!colors.includes(BG_COLORS[index])) {
				colors.push(BG_COLORS[index])
			}
		}
		const angle = Math.floor(Math.random() * 360)
		setGradient(
			`url(/watercolor_bg.jpg), linear-gradient(${angle}deg, ${colors.join(", ")})`,
		)
		setTransform({
			x: Math.random() > 0.5 ? 1 : -1,
			y: Math.random() > 0.5 ? 1 : -1,
		})
	}, [])

	const outerStyle: React.CSSProperties = {
		height: "100lvh",
		background: gradient,
		backgroundBlendMode: "hard-light",
		backgroundSize: "cover",
		transform: `scale(${transform.x}, ${transform.y})`,
	}

	const innerStyle: React.CSSProperties = {
		transform: `scale(${transform.x}, ${transform.y})`,
		width: "100%",
		height: "100%",
		position: "relative",
	}

	return (
		<section>
			<div style={outerStyle}>
				<div style={innerStyle}>
					<header style={{ padding: "24px" }}>
						<nav
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<a href="/" style={{ display: "block" }}>
								<img
									src="/icon.png"
									alt="92thunder"
									width="48"
									height="48"
									style={{ display: "block", borderRadius: "4px" }}
								/>
							</a>
							<div
								style={{ display: "flex", gap: "1.5rem", fontSize: "1.2rem" }}
							>
								<a
									href="/blog"
									style={{ fontWeight: 600, color: "white", textDecoration: "none" }}
								>
									Blog
								</a>
								<a
									href="/about"
									style={{ fontWeight: 600, color: "white", textDecoration: "none" }}
								>
									About
								</a>
							</div>
						</nav>
					</header>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "calc(100lvh - 96px)",
							pointerEvents: "none",
						}}
					>
						<h2
							style={{
								margin: 0,
								fontSize: "clamp(2.5rem, 5vw, 5rem)",
								fontWeight: "bold",
							}}
						>
							92thunder.dev
						</h2>
					</div>
				</div>
			</div>
		</section>
	)
}
