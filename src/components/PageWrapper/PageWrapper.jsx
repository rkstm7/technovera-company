import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Container from "../Container/Container";

export default function PageWrapper({ children, showBreadcrumb = true }) {
  return (
    <>
      {showBreadcrumb && (
        <Container>
          <Breadcrumb />
        </Container>
      )}
      {children}
    </>
  );
}
