import { useRouter } from "next/router";
// import React, { Component } from "react";
import PageBanner from "../../components/Common/PageBanner";
import Style from "../../components/TilesCard/BlogCard.module.css"

import { Container, Row, Col } from "react-bootstrap";
import Tiles from "../assets/tiles.json";

function Product() {
  const router = useRouter();
  const { pid } = router.query;
  // const products = ({Tiles1,Flooring1})=>((!Tiles1)?Tiles.AccessoriesProducts:(Flooring1)?Tiles.FlooringProducts:Tiles.AccessoriesProducts);
  const product = Tiles.AccessoriesProducts.find((t) => t.id == parseInt(pid));
  console.log(product);

  function createMarkup_HtmlString() {
    return { __html: product.htmlString };
  }

  function createMarkup_ShortDescription() {
    return { __html: product.short_description };
  }

  if (!product) return <h1>Loading ....</h1>;

  return (
    <>
      <PageBanner pageTitle={product.title} BGImage="bg-one" />
      <Container>
        <Row style={{ marginTop: "50px",marginBottom:"40px" }}>
          <h1 style={{ marginTop: "50px",marginBottom:"40px" }}>{product.title}</h1>
          <hr></hr>
          <div style={{ marginTop: "30px",marginBottom:"70px" }} dangerouslySetInnerHTML={createMarkup_ShortDescription()} />
          <Col md="6" xs="12">
            <img src={product.image} width="600" alt={product.title} />
          </Col>
          <Col md="6" xs="12">
          <div dangerouslySetInnerHTML={createMarkup_HtmlString()} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Product;
