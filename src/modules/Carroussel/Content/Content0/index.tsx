import { Box, Typography, Grid } from "@mui/material";

const Content0 = () => {
  return (
    <Box style={{ margin: "0px 10% 0px 10%" }}>
      <Grid container xs={6} style={{ marginTop: "10%" }}>
        <Grid item>
          <Box
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(221, 5, 221), rgb(16, 4, 102))",
              fontSize: "0.5em",
              fontWeight: 700,
              padding: "0.7em",
              borderRadius: "3px",
              width: "fit"
            }}
          >
            Something DOnt know what
          </Box>
          <Typography fontSize='1.5em' style={{ fontWeight: 800 }}>
            Hi!! I'm Pedro, a Web Dev
          </Typography>
          <Typography fontSize='0.5em'>
            Started my career as a chemical engineer, and evetually fall in love
            with everything with web. Started my career as a chemical engineer,
            and evetually fall in love with everything with web. Started my
            career as a chemical engineer, and evetually fall in love with
            everything with web.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content0;
