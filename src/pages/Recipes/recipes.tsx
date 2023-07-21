import { Grid, Typography } from "@mui/material";
import BackButton from "../../components/back-fab";
import recipeItems from "./recipe-data";
import CustomCard from "../../components/card";

function Recipes() {
  return (
    <>
      <BackButton />
      <Typography variant="h3">Recipes</Typography>
      <br />
      <Grid container spacing={2}>
        {recipeItems.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.title}>
            <CustomCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Recipes;
