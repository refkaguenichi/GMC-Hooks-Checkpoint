import React from "react";
import "./Footer.css";
import { Container, Toolbar } from "@material-ui/core";

const FooterC = () => {
  return (
    <footer color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <span variant="body1">© 2021 Movies App, all rights reserved</span>
        </Toolbar>
      </Container>
    </footer>
  );
};

export default FooterC;
