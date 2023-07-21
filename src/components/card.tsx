import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";

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
};

const CustomCard = ({ image, title, description }: CustomCardProps) => {
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
    </CustomCardWrapper>
  );
};

export default CustomCard;
