import { Box, Typography } from "@mui/material";
import "./styles.css"

const Content1 = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems="end"
      style={{ padding: "0px 10% 10% 10%", height: "100%" }}
    >
      <Typography
        className="buzzing-element"
        fontSize='1.8em'

      >
        Skills
      </Typography>
    </Box>
  );
};

export default Content1;
