
import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export const Cards = () => {
  const portfolio = [
    "https://d1b0o98gwlv9wy.cloudfront.net/portfolioImage/47fQn0Xrp-Course_Image_08.png",
    "https://d1b0o98gwlv9wy.cloudfront.net/portfolioImage/X8IlTp7oE-Course_Image_03.png",
    "https://d1b0o98gwlv9wy.cloudfront.net/portfolioImage/isZEA1Y5P-Course_Image_01.png"
    
  ];

  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      {portfolio.map((image, index) => (
        <Card key={index} sx={{ width: "396px", height: "250px", marginRight: "20px" }}>
          <CardMedia sx={{ height: '306px' ,width:'396px' }} image={image} title={`Image ${index + 1}`} />
        </Card>
      ))}
    </div>
  );
};
