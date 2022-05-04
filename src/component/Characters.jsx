import { Box, Grid } from "@mui/material";
import { data } from "../constants/data";
import Character from "./Charactor";

const Characters = () => {
  return (
    //map function only work with array
    <Box style={{ margin: `10px 35px` }}>
      <Grid container>
        {data.characters.map((value) => (
          <Grid item>
            <Character value={value} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Characters;
//by using props we can pass data
//grid component use for making responsive website
