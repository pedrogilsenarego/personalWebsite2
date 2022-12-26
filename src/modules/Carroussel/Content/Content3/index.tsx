import { Box } from "@mui/material";

const Content3 = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='end'
      rowGap='10%'
      alignItems='center'
      style={{ padding: "0px 5% 0px 5%", height: "100%" }}
    >
      <Box
        style={{
          width: "100%",
          height: "20%",
          backgroundColor: "whitesmoke",
          borderRadius: "1em",
          marginBottom: "20%",
        }}
      ></Box>
    </Box>
  );
};

export default Content3;
