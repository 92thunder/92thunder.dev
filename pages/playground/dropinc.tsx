import type { NextPage } from "next"
import { Box } from "@chakra-ui/react"
import Head from "next/head"
import { useState, useEffect } from "react"

const DropInc: React.FC<{ x: number, y: number, color: string, scale: number }> = ({ x, y, color, scale }) => {
  return (
    <>
      <style jsx>{`
        @keyframes spread {
          0% {
            transform: scale(1);
            filter: blur(2px);
          }
          50% {
            filter: blur(3px);
          }
          100% {
            transform: scale(1.5);
            filter: blur(4px);
          }
        }
      `}</style>
      <div style={{
        position: "absolute",
        borderRadius: "50%",
        opacity: 0.8,
        transformOrigin: "center center",
        animation: "spread 6s ease-in-out forwards",
        width: `${scale}px`,
        height: `${scale}px`, 
        top: `${y}px`,
        left: `${x}px`,
        backgroundColor: `${color}`,
        animationDelay: "0s",
        mixBlendMode: "darken",
      }}>
      </div>
    </>
  )
}

const DropArea: React.FC = () => {
	const bgColors = ["#313125", "#165C9A", "#C3B03E", "#2A493C", "#6F786B"]

  const [drops, setDrops] = useState<{ x: number, y: number, color: string, scale: number }[]>([])
  const [mouseDownTime, setMouseDownTime] = useState<number>(0)
  const [keySequence, setKeySequence] = useState<string>("")

  const randomDrop = () => {
    const color = bgColors[Math.floor(Math.random() * bgColors.length)]
    const randomX = Math.random() * window.innerWidth
    const randomY = Math.random() * window.innerHeight
    const randomScale = Math.random() * 100 + 20
    
    setDrops(prevDrops => [...prevDrops, {
      x: randomX,
      y: randomY,
      color: color,
      scale: randomScale,
    }])
    let randomDelay = Math.random() * 2000 + 1000 // 1-3秒の遅延
    setTimeout(() => {
      randomDrop()
    }, randomDelay)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const newSequence = (keySequence + event.key).slice(-4)
    setKeySequence(newSequence)

    if (newSequence === "drop") {
      randomDrop()

      setKeySequence("")
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [keySequence, drops])

  const handleMouseDown = () => {
    setMouseDownTime(Date.now())
  }

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    const holdTime = Date.now() - mouseDownTime
    
    const color = bgColors[Math.floor(Math.random() * bgColors.length)]
    setDrops([...drops, { 
      x: event.clientX - holdTime / 10 / 2, 
      y: event.clientY - holdTime / 10 / 2, 
      color: color,
      scale: holdTime / 10,
    }])
  }

	return (
		<>
			<section>
				<Box
          w="100vw"
          h="100vh"
					sx={{
            background: `white`,
            cursor: "pointer",
            overflow: "hidden",
            position: "relative",
            touchAction: "none",
            WebkitTapHighlightColor: "transparent",
            userSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
					}}
          onPointerDown={handleMouseDown}
          onPointerUp={handleMouseUp}
				>
          {drops.map((drop, index) => (
            <DropInc key={index} x={drop.x} y={drop.y} color={drop.color} scale={drop.scale} />
          ))}
				</Box>
			</section>
		</>
	)
}


const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>DropInc</title>
			</Head>

			<DropArea />
		</>
	)
}

export default Home
