import { ArrowUpIcon } from "@chakra-ui/icons"
import {
	Box,
	HStack,
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
	VStack,
} from "@chakra-ui/react"
import { FC } from "react"

const steps = [
	{
		title: "Techtouch, Inc.",
		duration: "2018/4 ~ Now",
		description:
			"1人目の社員として入社し、フロントエンドエンジニアとしてSaaS開発をリード。TypeScript, Reactを使ったUI開発の他、顧客によってバージョンを切り替える仕組みなどフロントエンド領域での複雑な開発に取り組む。",
	},
	{
		title: "Sony Digital Network Applications, Inc.",
		duration: "2015/4 ~ 2018/3",
		description:
			"主にWebアプリケーション開発を取り扱う部署を志望し、複数プロジェクトでの開発を経験。Java, C#, Ruby, JavaScriptを使用。",
	},
]

export const Career: FC = () => {
	return (
		<Box h="calc(100vh - 72px)" padding="24px">
			<Heading as="h2" fontSize={48}>
				Job History
			</Heading>
			<VStack alignItems="start" justifyContent="center" spacing={16} h="100%">
				<Box flexGrow={1} w="100%" px="40px" py="40px" maxH="500px">
					<HStack h="100%" align="center" justifyContent="center">
						<Stepper orientation="vertical" index={1} h="100%">
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
					</HStack>
				</Box>
			</VStack>
		</Box>
	)
}
