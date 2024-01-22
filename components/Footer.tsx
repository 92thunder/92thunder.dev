import { Center, Text } from "@chakra-ui/react"
import { FC } from "react"

export const Footer: FC = () => {
	return (
		<Center as="footer" bg="brand.secondary" p="24px" mt="24px">
			<Text fontSize="16px">© 2023 92thunder</Text>
		</Center>
	)
}
