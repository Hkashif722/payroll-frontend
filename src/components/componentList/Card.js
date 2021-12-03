import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

export default function CardDetails({ title, img }) {
  return (
    <div className=" transform ease-in-out transition  hover:scale-105">
      <Card>
        <CardMedia className="w-56 h-52" image={img} title="Paella dish" />
        <CardContent>
          <Typography
            className=" text-center"
            variant="body1"
            color="inherit"
            component="p"
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
