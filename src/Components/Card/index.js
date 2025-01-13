import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Image from 'next/image'

export default function CardComponent({ name, description, image }) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300" style={{width:'300px'}}>
      <Image alt={name} src={image} width={50} height={50} style={{ margin:'auto' }}></Image>
      <CardContent>
        <Typography variant="h5" className="text-gray-800">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
