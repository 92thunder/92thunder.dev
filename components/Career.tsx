import { ArrowUpIcon } from "@chakra-ui/icons"
import {
	Box,
	Heading,
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	Text,
} from "@chakra-ui/react"
import { FC } from "react"

const steps = [
	{
		title: "Techtouch, Inc.",
		duration: "2018/4 ~ Now",
		description:
			"1人目の社員として入社し、フロントエンドエンジニアとしてSaaS開発をリード。TypeScript, Reactを使ったUI開発の他、顧客によってバージョンを切り替える仕組みなどフロントエンド領域でサービスの信頼性を高めるための開発を担当。",
	},
	{
		title: "Sony Digital Network Applications, Inc.",
		duration: "2015/4 ~ 2018/3",
		description:
			"Webアプリケーション開発を取り扱う部署を志望し、複数プロジェクトでの開発を経験。Java, C#, Ruby, JavaScriptを使用。",
	},
]

export const Career: FC = () => {
	return (
		<Box padding="24px" as="dl" minH="300px">
			<Heading as="dt" color="brand.accent" mb="1rem">
				Job History
			</Heading>
			<Stepper orientation="vertical" index={1} minH="300px">
				{steps.map((step) => (
					<Step key={step.title}>
						<StepIndicator>
							<StepStatus
								complete={<StepIcon />}
								incomplete={<ArrowUpIcon />}
								active={<ArrowUpIcon />}
							/>
						</StepIndicator>

						<Box width="100%" minW="0">
							{/* @ts-ignore */}
							<StepTitle mt="0">{step.title}</StepTitle>
							{/* @ts-ignore */}
							<StepDescription color="gray.400">
								{step.duration}
							</StepDescription>
							<Text color="white" mt="8px">
								{step.description}
							</Text>
						</Box>

						<StepSeparator />
					</Step>
				))}
			</Stepper>
		</Box>
	)
}
