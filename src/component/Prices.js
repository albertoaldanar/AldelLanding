import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

//import images
import Img1 from '../assets/images/features/img-1.png';
import Disponiblidad from '../assets/images/screens/disponibilidad.png'
import Precios from '../assets/images/screens/precios.png'
import CountUp from 'react-countup';

import HomeUrl from '../assets/images/home-border.png';

export default class Prices extends Component {
  constructor(props) {
    super(props);

    this.state  = {
      counters: [
        {
          id: '1',
          extraclass: '',
          start: 25,
          end: 49,
          title: "Employees",
          description: 'Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.'
        },
        {
          id: '2',
          extraclass: 'pt-3',
          start: 25,
          end: 76,
          title: "Projects",
          description: 'Pellentesque habitant morbi malesuada fames ac turpis egestas.'
        },
        {
          id: '3',
          extraclass: 'pt-3',
          start: 25,
          end: 99,
          title: "CLIENTS",
          description: 'Suspendisse congue risus consequat sapien potitor risus tincidunt.'
        },
      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container style = {{marginTop: -170, marginBottom: 100}}>
          <Row className="align-items-center mt-5 pt-4" id="counter">
              <Col lg={6}>
                <div className="pr-4 mt-4">
                  <p className="text-uppercase">¿ Porque Aldel ?</p>
                  <h3>Comienza a monetizarte !</h3>
                  {/* <p className="text-muted mt-3">Morbi at erat et tortor tempor sodales non eu lacus Donec at gravida
                  nunc vitae volutpat libero fusce sit amet mi quis ipsum tempus
                  gravida in quis felis Aliquam fringilla tempus scelerisque Phasellus viverra tincidunt
                  suscipit. Praesent non arcu vitae augue
                            aliquam eget vitae Pellentesque sem mauris porta eget ultrices eros.</p> */}

                  <p className="text-muted mt-3">Si atiendes a muchos clientes por llamada y mensajeria o quieres comenzar a generar ingresos por medio de tu influencia, fama, conocimientos o experiencias. 
                  Aldel es la herrameinta para ti. Con nuestra aplicación podrás atender y cobrar a tus clientes en un mismo lugar utilizando cualquiera de nuestros canales de comunicacion.
                  </p>
                  <div className="mt-4 pt-1">
                    <a href="https://play.google.com" className="btn btn-outline-primary">Descargar app</a>
                  </div>
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1">
                <div className="counter-box">
                  {this.state.counters.map((counteritem, key) => (
                    <div className={ (counteritem.id !== '1') ? 'mt-4 pt-3' : 'mt-4' } key={key}>
                      <div className="media">
                        <div className="count-box bg-soft-primary text-center">
                          <h3 className="counter-count mb-1 text-primary"> 
                          <CountUp className="counter-value" delay={2} start={counteritem.start} end={counteritem.end} />{" "}
                            <span className="count-plus text-primary"> +</span></h3>
                          <p className="text-uppercase text-muted mb-0 f-14">{counteritem.title} </p>
                        </div>
                        <div className="media-body pl-4">
                          <p className="text-muted mb-0 mt-3">{counteritem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
            </Container>
        <section className="section bg-light bg-footer pb-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <div style = {{display: 'flex', flexDirection: 'row'}}>
                    <img src={Disponiblidad} className="img-fluid" alt="" style = {{height: 480}}/>
                    <img src={Precios} className="img-fluid" alt="" style = {{height: 480, marginLeft: -60, marginTop: 20}}/>
                  </div>
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h2>Ajusta tus precios y disponibilidad</h2>
                  <p className="mt-4 text-muted">En Aldel tu decides cuanto vale tu tiempo, tu experiencia y conocimientos. Ajustar tus precios y tu disponibilidad es muy sencillo,
                    desde tu administador escribe la cantidad que quieras cobrar por minuto, unidad o caracter dependiendo del canal. También conectate y desconectate de cualquier canal de comuniación cuando quieras.
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
