import { useState, useEffect } from "react"

const bgColors = ["#313125", "#165C9A", "#C3B03E", "#2A493C", "#6F786B"]

type Drop = {
  x: number
  y: number
  color: string
  scale: number
}

const DropItem: React.FC<Drop> = ({ x, y, color, scale }) => (
  <>
    <style>{`
      @keyframes spread {
        0% { transform: scale(1); filter: blur(2px); }
        50% { filter: blur(3px); }
        100% { transform: scale(1.5); filter: blur(4px); }
      }
    `}</style>
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        opacity: 0.8,
        transformOrigin: "center center",
        animation: "spread 6s ease-in-out forwards",
        width: `${scale}px`,
        height: `${scale}px`,
        top: `${y}px`,
        left: `${x}px`,
        backgroundColor: color,
        mixBlendMode: "darken",
      }}
    />
  </>
)

export const DropInc: React.FC = () => {
  const [drops, setDrops] = useState<Drop[]>([])
  const [pointerDownTime, setPointerDownTime] = useState(0)
  const [keySequence, setKeySequence] = useState("")

  const addRandomDrop = () => {
    const color = bgColors[Math.floor(Math.random() * bgColors.length)]
    const x = Math.random() * window.innerWidth
    const y = Math.random() * window.innerHeight
    const scale = Math.random() * 100 + 20
    setDrops((prev) => [...prev, { x, y, color, scale }])
    const delay = Math.random() * 2000 + 1000
    setTimeout(addRandomDrop, delay)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeySequence((prev) => {
        const next = (prev + e.key).slice(-4)
        if (next === "drop") {
          addRandomDrop()
          return ""
        }
        return next
      })
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handlePointerDown = () => {
    setPointerDownTime(Date.now())
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    const holdTime = Date.now() - pointerDownTime
    const color = bgColors[Math.floor(Math.random() * bgColors.length)]
    const size = holdTime / 10
    setDrops((prev) => [
      ...prev,
      {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        color,
        scale: size,
      },
    ])
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "white",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        touchAction: "none",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      {drops.map((drop, i) => (
        <DropItem key={i} {...drop} />
      ))}
    </div>
  )
}
