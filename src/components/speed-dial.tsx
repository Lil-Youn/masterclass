import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for routing
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const actions = [
  {
    icon: <FormatListNumberedIcon />,
    name: "Ingredients",
    link: "/ingredients",
  },
  { icon: <MenuBookIcon />, name: "Recipes", link: "/recipes" },
];

export default function BasicSpeedDial() {
  const navigate = useNavigate();

  const handleSpeedDialActionClick = (link: string) => {
    navigate(link);
  };

  return (
    <Box sx={{ height: 250, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<LocalDiningIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleSpeedDialActionClick(action.link)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
