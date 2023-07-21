import { useNavigate } from "react-router-dom"; // Assuming you are using React Router for routing
import { Fab } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
  const navigate = useNavigate();

  const handleFabClick = () => {
    navigate("/menu");
  };

  return (
    <Fab
      size="small"
      key="back"
      color="primary"
      aria-label="back"
      onClick={handleFabClick}
      style={{ position: "absolute", top: 10, right: 10 }}
    >
      <ArrowBackIcon />
    </Fab>
  );
}
export default BackButton;
