import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";

import { Container, Row, Col } from "react-bootstrap";


import styles from "../styles/Home.module.css";
import Tiles from "./assets/tiles.json";
import ProductCard from "../components/TilesCard/index";

class Products extends Component {
  render() {
    return (
      <>
        <PageBanner
          pageTitle="Tiles Products
                    "
          BGImage="bg-one"
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
              <b>Tiles Category</b>
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
            {Tiles.TilesProducts.map((product, i) => {
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
