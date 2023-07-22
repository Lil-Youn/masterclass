import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./App.css";
import MasterclassLogo from "/src/assets/masterclass.png";

function App() {
  return (
    <>
      <Typography variant="h3">Asian Masterclass</Typography>
      <br />
      <Link component={RouterLink} to="/menu" underline="none">
        <img
          className="logo"
          alt="Masterclass Logo"
          src={MasterclassLogo}
          style={{ width: 150, height: 150, margin: "auto" }}
        />
      </Link>
      <br />
      <Typography variant="button">Click me</Typography>
    </>
  );
}

export default App;
