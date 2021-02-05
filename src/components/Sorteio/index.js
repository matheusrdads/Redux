import React from "react";
import { Container, Col, Row, Image, } from "react-bootstrap";
import { connect } from "react-redux";
import "./index.css"

const Sorteio = ({ produtos}) => {
  return (
    <body>
      <Container>
        <Row>
          <Col className="col">
            <h5>Hardware: </h5>
            <p> {produtos.result}</p>
            <p> {produtos.desc}</p>
            {console.log(produtos)}
          </Col>
          <Col>
            <Image src={produtos.img} />
          </Col>
        </Row>
      </Container>
    </body>
  );
};

export default connect((state) => ({
  // recebemos a licao e modulo ativo com a disparada da action
  produtos: state.hardware.produtos,
  // produtoSorteado: state.hardware.produtoSorteado,
}))(Sorteio);
