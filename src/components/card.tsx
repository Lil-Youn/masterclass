import LaunchIcon from "@mui/icons-material/Launch";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

const CustomCardWrapper = styled(Card)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  border: "2px solid #e0e0e0",
  maxWidth: "350px",
});

const CustomCardContent = styled(CardContent)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

type CustomCardProps = {
  image: string;
  title: string;
  description: string;
  linkTo?: string;
};

const CustomCard = ({ image, title, description, linkTo }: CustomCardProps) => {
  return (
    <CustomCardWrapper style={{ transform: "scaleY(0.9)" }}>
      <CardMedia
        component="img"
        height="200"
        image={image}
        title={title}
        style={{ objectFit: "contain" }}
      />
      <CustomCardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CustomCardContent>
      <CardActions>
        {linkTo && (
          <Button
            startIcon={<LaunchIcon />}
            component={Link}
            to={linkTo}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            Open
          </Button>
        )}
        <Button size="small">Learn More</Button>
      </CardActions>
    </CustomCardWrapper>
  );
};

export default CustomCard;
