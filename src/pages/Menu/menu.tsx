import { Box, Typography } from "@mui/material";
import BasicSpeedDial from "../../components/speed-dial";

function Menu() {
  return (
    <>
      <Box>
        <Typography variant="h3">Menu</Typography>
        <br />
        <Typography variant="button">
          - ☀️ Summer Rolls / Sriracha Mayo / Kräuter
        </Typography>
        <br />
        <Typography variant="button">
          - 🥒 Geklopfte Gurke / Tahini / Chiliöl
        </Typography>
        <br />
        <Typography variant="button">
          - 🐓 Chicken Larb (Gai) / Sushi Reis / Limette / Chili / Koriander
        </Typography>
        <br />
        <Typography variant="button">
          - 🥥 Kokos Tapioka / Mango / Beeren
        </Typography>
      </Box>
      <BasicSpeedDial />
    </>
  );
}

export default Menu;
