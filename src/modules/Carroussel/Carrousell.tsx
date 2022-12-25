import Tile from "./Tile"
import { Box } from "@mui/material"
import { useState } from "react"
import Content0 from "./Content/Content0"

const Carrousell = () => {

  const [tileIndex, setTileIndex] = useState<number>(0)

  const position = (index: number) => {
    if (index === tileIndex) return "front"
    if (index - tileIndex === 1 || index - tileIndex === -3) return "right"
    if (index - tileIndex === 2) return "back"
    else return "left"
  }

  const tiles = [
    {
      index: 0,
      position: position(0),
      content: <Content0 />

    },
    {
      index: 1,
      position: position(1)
    },
    {
      index: 2,
      position: position(2)
    },
    {
      index: 3,
      position: position(3)
    },
  ]

  return (
    <Box display="flex" columnGap={2}>
      {tiles.map((tile, pos) => {
        return (
          <div key={pos}>
            <Tile tileIndex={tileIndex} content={tile.content} index={tile.index} position={tile.position} setTileIndex={setTileIndex} />
          </div>
        )
      })}

    </Box>)
}

export default Carrousell