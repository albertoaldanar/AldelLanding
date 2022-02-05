import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import Img1 from '../assets/images/features/img-1.png';
import Llamada from '../assets/images/screens/llamada.png'
import Chat from '../assets/images/screens/chat.png'

import HomeUrl from '../assets/images/home-border.png';

export default class Pricing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light bg-features">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <div style = {{display: 'flex', flexDirection: 'row'}}>
                    <img src={Llamada} className="img-fluid" alt="" style = {{height: 480}}/>
                    <img src={Chat} className="img-fluid" alt="" style = {{height: 480, marginLeft: -60, marginTop: 20}}/>
                  </div>
                  
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h2>Monetiza en tiempo real</h2>
                  <p className="mt-4 text-muted">Mediante la app de Aldel, podras cobrarle a tus clientes por cada minuto que dure la llamada o videollamda, cada caracter de todos los textos que le envies a tu cliente y 
                    por la multimedia que envies (videos, imagenes y audios). Estos precios los modificaras desde tu administrador.
                  </p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">Descargar</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section" id="pricing">
        </section>
      </React.Fragment>
    );
  }
}
