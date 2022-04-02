import React, { Component } from "react";
import PageBanner from "../components/Common/PageBanner";

import { Container, Row, Col } from "react-bootstrap";

import styles from "../styles/Home.module.css";
import Tiles from "./assets/tiles.json";
// import Flooring from "./assets/flooring.json";
import ProductCard from "../components/FlooringCard";


class Products extends Component {
  render() {
    return (
      <>

        <PageBanner
          pageTitle="Flooring Products
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
              <b>Flooring Category</b>
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
            {Tiles.FlooringProducts
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
