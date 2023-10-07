import { Stack } from "@mui/material"
import { useRouter } from "next/router"
import { HatenaIcon, HatenaShareButton, PocketIcon, PocketShareButton, TwitterIcon, TwitterShareButton } from "react-share"

export const ShareButtons = () => {
  const baseUrl = "https://92thunder.dev"
  const router = useRouter()
  const currentURL = baseUrl + router.asPath

  return (
    <Stack direction="row" gap={2} marginX={2}>
      <TwitterShareButton style={{ width: "min-content" }} url={currentURL}>
        <TwitterIcon round size={32}/>
      </TwitterShareButton>
      <HatenaShareButton style={{ width: "min-content" }} url={currentURL}>
        <HatenaIcon round size={32}/>
      </HatenaShareButton>
      <PocketShareButton style={{ width: "min-content" }} url={currentURL}>
        <PocketIcon round size={32}/>
      </PocketShareButton>
    </Stack>
  )
}
