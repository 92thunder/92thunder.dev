import { Center, Text } from "@chakra-ui/react"
import { FC } from "react"

export const Footer: FC = () => {
	return (
		<Center as="footer" bg="gray.900" p="24px" mt="24px">
			<Text fontSize="16px">© 2023 92thunder</Text>
		</Center>
	)
}
