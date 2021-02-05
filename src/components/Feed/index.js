import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Button, Image, Row, Col } from "react-bootstrap"
// nossas actions
import * as CarrinhoAction from "../../store/actions/actions";
import './indexFeed.css'

const Feed = ({ pecas, adicionarCarrinho }) => {
  return (
    <Container className="containerFeed">
      <h3 className="h3Feed">Gostou do seu premio? Veja alguns itens a venda</h3>
      <Container style={{ display: 'inline-block' }}>
        {pecas.feed.map(item => (
          <Row key={item.id}>
            <Col>
              <p className='strong'>{item.item}</p>
              <p className="pFeed">{item.desc}</p>
              <p>{item.preco}</p>
              <Button variant="outline-primary" size="sm" onClick={() => adicionarCarrinho(pecas.peca, item)}>Comprar</Button>
            </Col>
            <Col><Image className="imgFeed" src={item.img} /></Col>
          </Row>
        ))}
      </Container>
    </Container>
  );
};

const mapStateToProps = state => ({
  pecas: state.pecas
});

const mapDispatchToProps = (dispatch) => bindActionCreators(CarrinhoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
