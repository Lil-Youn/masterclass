import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./App.css";

import MasterclassLogo from "/src/assets/masterclass.png";

function App() {
  return (
    <>
      <Typography variant="h3" style={{ fontFamily: "Sankyu" }}>
        Asian Masterclass
      </Typography>
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

      <Typography variant="button" style={{ fontFamily: "Sankyu" }}>
        Click me
      </Typography>
    </>
  );
}

export default App;
