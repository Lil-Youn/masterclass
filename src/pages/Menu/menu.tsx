import { Typography, Box } from "@mui/material";
import BasicSpeedDial from "../../components/speed-dial";

function Menu() {
  return (
    <>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography variant="h3" style={{ fontFamily: "Sankyu" }}>
          Menu
        </Typography>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="button">
          - ☀️ Summer Rolls / Sriracha Mayo / Kräuter
        </Typography>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="button">
          - 🥒 Geklopfte Gurke / Tahini / Chiliöl
        </Typography>
      </Box>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="button">
          - 🐓 Chicken Larb (Gai) / Sushi Reis / Limette / Chili / Koriander
        </Typography>
      </Box>
      <Box>
        <Typography variant="button">
          - 🥥 Kokos Tapioka / Mango / Beeren
        </Typography>
      </Box>
      <BasicSpeedDial />
    </>
  );
}

export default Menu;
