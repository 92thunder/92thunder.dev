import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <Box p="24px" pt="2rem">
      <dl>
        <dt>
          About
        </dt>
        <dd>
          フロントエンドエンジニアとしてテックタッチ株式会社で働いています。
        </dd>
      </dl>
    </Box>
  )
}

export default About
