import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import Slider from "react-slick";

import Img1 from '../assets/images/testi-img/img-1.png';
import Img2 from '../assets/images/testi-img/img-2.png';
import Img3 from '../assets/images/testi-img/img-3.png';
import Img4 from '../assets/images/testi-img/img-4.png';

import HomeUrl from '../assets/images/home-border.png';

import Client1 from '../assets/images/clients/1.png';
import Client2 from '../assets/images/clients/2.png';
import Client3 from '../assets/images/clients/3.png';
import Client4 from '../assets/images/clients/4.png';

export default class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideitems: [
        {
          id: 100,
          img: Img1,
          designation: 'Abogados',
          description: 'Da consultorias de tus conocimientos legales a tus clientes.'
        },
        {
          id: 101,
          img: Img2,
          name: 'Samuel Campbell',
          designation: 'Fitness',
          description: 'Monetiza tus clases de fitness 1 a 1 por medio de nuestras videollamadas y llamadas de Aldel.'
        },
        {
          id: 103,
          img: Img3,
          name: 'Michelle Stehle',
          designation: 'Maestros',
          description: 'Da asesorias personalizadas a tus alumnos desde cualquier lugar y resuvle dudas por medio de audios y mensajeria.'
        },
        {
          id: 104,
          img: Img4,
          name: 'Margaret Lampley',
          designation: 'Influencers',
          description: 'Como influencer tienes muchas personas que quieren conocerte y conectar contigo, monetiza tu fama e.'
        },
      ],
    };
  }
  render() {

    var slidesettings = {
      dots: true,
      speed: 300,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      dotsClass: "slick-dots slick-thumb carousel-indicators",
      customPaging: function (i) {
        return (
          <img src={process.env.PUBLIC_URL + '/images/img-' + (i+1) +'.jpg'} alt="" className=" testi-img img-fluid rounded mx-auto d-block" />
        );
      },
    };

    const clientslides = this.state.slideitems.map((slideitem, clientkey) => {
      return (
        <div className="carousel-item" key={slideitem.id}>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="client-box mt-4">
                <h4 className="text-primary mb-0">- {slideitem.designation} </h4>
                <h5 className="line-height_1_6" style = {{marginTop: 10}}>{slideitem.description}</h5>
                <div className="client-icon">
                </div>
  
              </div>
            </Col>
            <Col lg={6}>
              <div className="text-center mt-4">
                <img src={slideitem.img} className="img-fluid" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <React.Fragment>
        <section className="section" id="clients">
          <Container style = {{marginTop: -220, marginBottom: -50}}>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">¿ Para quien es Aldel ?</h3>
                  <p className="text-muted f-17 mt-3">Aldel es una herramienta creada para todo tipo de personas que atiendad 
                  <br /> fringilla auctor In eleifend maximus nisi sed vulputate.</p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              <Col lg="12">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <Slider {...slidesettings}>
                      {clientslides}
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
        </section>
      </React.Fragment>
    );
  }
}
