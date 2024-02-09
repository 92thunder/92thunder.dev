"use client"
import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

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
					h="calc(100vh - 76.8px)"
					pb="24px"
					sx={{
						backgroundSize: "cover",
						background: `url(./watercolor_bg.jpg), linear-gradient(${gradientAngle}deg, ${currentBgColors})`,
						backgroundBlendMode: "hard-light",
						transform: `scale(${scaleX}, ${scaleY})`,
					}}
				>
					<VStack
						h="100%"
						justifyContent="center"
						spacing="16px"
						sx={{ transform: `scale(${1 / scaleX}, ${1 / scaleY})` }}
					>
						<Heading as="h2" fontSize={48}>
							Hello, I&#39;m 92thunder
						</Heading>
						<Text fontSize={24} fontWeight="600">
							A Web Developer Specializing in Front End Development
						</Text>
					</VStack>
				</Box>
			</section>
		</>
	)
}
