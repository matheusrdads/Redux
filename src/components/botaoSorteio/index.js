import React from "react";
import { Button, Container, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as hardwareActions from "../../store/actions/actions";

const botaoSorteio = ({ especs, alternarProduto }) => {
  return (
    <Container>
      {especs.map((espec) => (
        <div style={{ display: 'inline-block', padding: '15px' }} key={espec.id}>
          <strong>{espec.title}</strong>
          {espec.produtoTipo.map((item) => (
            <Card key={item.id}>
              <Button variant="outline-primary" onClick={() => alternarProduto(espec, item)}>Escolher</Button>
            </Card>
          ))}
        </div>
      ))}
    </Container>
  );
};

// funcao que retorna o nosso estado
const mapStateToProps = (state) => ({
  especs: state.hardware.especs,
});

//  funcao que retorna um dispatch para disparar uma action
const mapDispatchToProps = (dispatch) =>
  // mapeando nosso Objeto em forma de propriedade
  bindActionCreators(hardwareActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(botaoSorteio);
