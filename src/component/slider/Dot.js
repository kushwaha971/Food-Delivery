import { Box, styled } from "@mui/material";
import React from "react";

const DotStyle = styled(Box)(({ theme }) => ({
  ".dots": {
    display: "flex",
    justifyContent: "center",
  },
  ".dot": {
    cursor: "pointer",
    height: "10px",
    width: "10px",
    margin: "0px 2px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "52%",
    display: "inline-block",
    "&:hover": {
      backgroundColor: "#FA4A0C",
    },
  },
  ".active-dot": {
    backgroundColor: "#FA4A0C",
  },
}));
function Dot({ activeIndex, onClick, sliderItem }) {
  return (
    <DotStyle>
      <div className="dots">
        {sliderItem.map((slide, indx) => (
          <span
            key={indx}
            align="center"
            className={`${activeIndex === indx ? "dot active-dot" : "dot"}`}
            onClick={() => onClick(indx)}
          ></span>
        ))}
      </div>
    </DotStyle>
  );
}

export default Dot;
