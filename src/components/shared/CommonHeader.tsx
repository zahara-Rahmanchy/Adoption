import {Box, Stack, Typography} from "@mui/material";
import React from "react";
interface IProp {
  headerFirst: string;
  headerSecond?: string;
}
const CommonHeader = (props: IProp) => {
  //   console.log("rest", rest);
  const {headerFirst, headerSecond} = props;
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "#ffedc4", // Gradient background
        clipPath:
          "polygon(0 0, 100% 0, 100% 90%, 90% 90%, 60% 80%, 40% 90%, 20% 80%, 0 100%)",
        // padding: "100px 0",
        padding: {sm: "90px 1px 110px 1px", xs: "100px 1px 150px 1px"},
        textAlign: "center",
        color: "white",
      }}
    >
      <Typography
        width={"100%"}
        // margin={4}
        textAlign="center"
        variant="h4"
        color="primary.main"
        component="span"
        fontWeight={"bold"}
      >
        {headerFirst}
        <Box color="black" component="span">
          {headerSecond}
        </Box>
      </Typography>
    </Box>
  );
};

export default CommonHeader;
