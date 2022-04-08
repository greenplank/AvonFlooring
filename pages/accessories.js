import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";

import { Container, Row, Col } from "react-bootstrap";

import styles from "../styles/Home.module.css";
import ProductCard from "../components/AccessoriesCard/index";

import Tiles from "./assets/tiles.json";

class Products extends Component {
  render() {
    return (
      <>

        <PageBanner
          pageTitle="Accessories Products
                    "
          BGImage={"bg-one"}
        />

        <Container className={styles.container}>
          <Row className={styles.main}>
            <h2
              style={{
                marginBottom: "15px",
                paddingTop: "1em",
                color: "#fffff",
              }}
            >
              <b>Accessories Category</b>
            </h2>
            <hr
              style={{
                backgroundColor: "#035804",
                width: "70%",
                borderWidth: "3px",
                marginBottom: "34px",
                marginRight: "28em",
              }}
            />
            {Tiles.AccessoriesProducts
              .map((product, i) => {
                return (
                  <Col md={4}>
                    <ProductCard key={i} product={product} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Products;
