import { Box } from "@mui/material";


interface Props {
  tileIndex: number;
  index: number;
  position: string
  setTileIndex: (tileIndex: number) => void
}

const Tile = ({ tileIndex, index, position, setTileIndex }: Props) => {

  const left = () => {
    if (position === "front") return 0
    if (position === "left") return -1100
    if (position === "right") return 1100
    else return 0
  }



  return (
    <Box
      onClick={() => setTileIndex(index)}
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        marginTop: "auto",
        marginBottom: "auto",
        left: left(),
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: position === "front" ? 1000 : 1,
        height: "85vh",
        width: "85vh",
        backgroundColor: "red",
        borderRadius: "20px",
        transition: "all 2s ease",
        boxShadow: "5px 5px 5px blue",
        transform: position === "front" ? "scale(1)" : "scale(0.6)"
      }}
    >{index}</Box>
  );
};

export default Tile;
