import React from 'react'
import { Container, Card, Row, Col, Image, } from 'react-bootstrap';
import { connect } from 'react-redux';
import './indexCShop.css'

const CarShop = ({ pecas }) => {
  return (
    <Container >
      <h1>Seu carrinho</h1>
      <Card className="containerCShop" style={{ display: 'inline-block' }}>
        {pecas.map(item => (
          <Row key={item.id}>
            <Col>
              <p className='strong'>{item.item}</p>
              <p className="pFeed">{item.desc}</p>
              <p>{item.preco}</p>
            </Col>
            <Col><Image className="imgCShop" src={item.img} /></Col>
          </Row>
        ))}
      </Card>
    </Container>
  )
}

export default connect((state) => ({
  pecas: state.pecas.peca
}))(CarShop)