import { Box, Heading, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import { Header } from "../components/Header"
import { Career } from "../components/Career"

const About: NextPage = () => {
	return (
		<>
			<Header />
			<Box maxW="800px">
				<Box p="24px" mt="2rem" as="dl">
					<Heading as="dt" color="brand.accent">
						About me
					</Heading>
					<Text as="dd" mt="1rem">
						フロントエンドエンジニアとしてテックタッチ株式会社で働いています。
						DevOpsに強い興味があり、より良いプロダクトを作れる文化や基盤作りにも取り組んでいます。
					</Text>
				</Box>
				<Career />
			</Box>
		</>
	)
}

export default About
