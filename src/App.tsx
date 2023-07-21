import { Avatar, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./App.css";
import MasterclassLogo from "/src/assets/masterclass.jpg";

function App() {
  return (
    <>
      <Typography variant="h3">Asian Masterclass</Typography>
      <br />
      <Link component={RouterLink} to="/menu" underline="none">
        <Avatar
          alt="Masterclass Logo"
          src={MasterclassLogo}
          sx={{ width: 100, height: 100, margin: "auto" }}
        />
      </Link>
    </>
  );
}

export default App;
