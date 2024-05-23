import Navbar from "@/components/shared/Navbar/Navbar";
import {Container} from "@mui/material";
import React, {ReactNode} from "react";

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default MainLayout;
