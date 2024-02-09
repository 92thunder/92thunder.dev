"use client"
import { Box, Heading, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Header } from "./Header"

export const HeroArea: React.FC = () => {
	const bgColors = ["#313125", "#165C9A", "#C3B03E", "#2A493C", "#6F786B"]
	const [currentBgColors, setCurrentBgColors] = useState<string[]>([])
	const [scaleX, setScaleX] = useState<number>(1)
	const [scaleY, setScaleY] = useState<number>(1)
	const [gradientAngle, setGradientAngle] = useState<number>(0)

	useEffect(() => {
		const colors: string[] = []
		const length = bgColors.length
		const colorsLength = Math.max(Math.floor(Math.random() * 5), 2)
		while (colors.length <= colorsLength) {
			const index = Math.floor(Math.random() * length)
			if (!colors.includes(bgColors[index])) {
				colors.push(bgColors[index])
			}
		}
		setCurrentBgColors(colors)
		setScaleX(Math.random() > 0.5 ? 1 : -1)
		setScaleY(Math.random() > 0.5 ? 1 : -1)
		setGradientAngle(Math.floor(Math.random() * 360))
	}, [])

	return (
		<>
			<section>
				<Box
					h="100vh"
					sx={{
						background: `url(./watercolor_bg.jpg), linear-gradient(${gradientAngle}deg, ${currentBgColors})`,
						backgroundBlendMode: "hard-light",
						transform: `scale(${scaleX}, ${scaleY})`,
						backgroundSize: "cover",
					}}
				>
					<Box
						sx={{ transform: `scale(${scaleX}, ${scaleY})` }}
						w="100%"
						h="100%"
						position="relative"
					>
						<Header />
						<VStack
							h="calc(100vh - 96px)"
							justifyContent="center"
							position="absolute"
							right="0"
							left="0"
							top="0"
							bottom="0"
							pointerEvents="none"
						>
							<Heading as="h2" fontSize="4em" m="0">
								92thudner.dev
							</Heading>
						</VStack>
					</Box>
				</Box>
			</section>
		</>
	)
}
