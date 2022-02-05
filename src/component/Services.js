import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CountUp from 'react-countup';

import { Link } from "react-router-dom";
import HomeUrl from '../assets/images/home-border.png';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 'service1',
          step: '1.',
          title: "Crear tu cuenta",
          description: "Crea tu cuenta desde la app de aldel y dando de alta tu expeerieincia, conocimientos, etc."
        },
        {
          id: 'service2',
          step: '2.',
          title: "Ajustar precios y disponibilidad",
          description: 'Define los precios de cada canal (Multimedia, llamadas, videollamadas y mensajes).'
        },
        {
          id: 'service3',
          step: '3.',
          title: "Interactua",
          description: 'Acepta las solicitudes de tus clientes e interactua con ellos por llamada, videollamada y mensajeria.'
        },
        {
          id: 'service3',
          step: '4.',
          title: "Genera ingresos",
          description: 'Retira tus ingresos generados en Aldel desde tu administrador en la app a tu cuenta bancaria.'
        },
      ],
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
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">¿ Cómo funciona Aldel ?</h3>
                  <p className="text-muted f-17 mt-3">Comenzar a ofrecer tus servicios en Aldel es facil y rapido.
                           <br /> Despues de descargar la app an Appstore o Google Play, sigue los siguentes pasos.</p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Footer Link */}
              {this.state.services.map((item, key) => (
                <Col lg={3} key={key}>
                  <div className="services-box p-4 mt-4">
                    
                      <h3 style = {{color: "RGB(30, 165, 154)"}}>{item.step}</h3>
            

                    <h5 className="mt-4">{item.title}</h5>
                    <p className="text-muted mt-3">{item.description}</p>

                    {/* <div className="mt-3">
                      <Link to="#" className="text-primary f-16">Learn More <i className="mdi mdi-arrow-right ml-1"></i></Link>
                    </div> */}

                  </div>
                </Col>
              ))}
            </Row>
      
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
