import { Grid, Typography } from "@mui/material";

import CustomCard from "../../components/card";
import ingredientItems from "./ingredient-data";
import BackButton from "../../components/back-fab";

function Ingredients() {
  return (
    <>
      <BackButton />
      <Typography variant="h3" style={{ fontFamily: "Sankyu" }}>
        Ingredients
      </Typography>
      <br />
      <Grid container spacing={2}>
        {ingredientItems.map((item) => (
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

export default Ingredients;
