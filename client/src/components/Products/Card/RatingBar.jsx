import React from "react"
import './Card.css'
import Rating from "@mui/material/Rating";


export default function BasicRating() {
  const [value, setValue] = React.useState(4);

  return (
    <div className="rate-box">
      {/* <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <span className="rate-size"><Rating classes="rate-bar" size="small" value={value} readOnly /></span> 
    </div>
  );
}