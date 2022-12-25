import { Box } from "@mui/material";


interface Props {
  tileIndex: number;
  index: number;
  position: string
  setTileIndex: (tileIndex: number) => void
  content?: JSX.Element
}

const Tile = ({ tileIndex, index, position, setTileIndex, content }: Props) => {

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
        padding: "20px",
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
        backgroundColor: "#0E0A09",
        borderRadius: "12%",
        transition: "all 2s ease",
        boxShadow: "5px 5px 5px #00000066",
        transform: position === "front" ? "scale(1)" : "scale(0.65)"
      }}
    >{index}{content}</Box>
  );
};

export default Tile;
