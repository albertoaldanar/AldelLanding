import React, { Component } from "react";

// Importing Section
import Navbar from "../../component/Navbar/NavBar";

import Section from "./Section";
import Services from "../../component/Services";
import Pricing from "../../component/Pricing";
import Prices from "../../component/Prices";
import Team from "../../component/Team";
import Clients from "../../component/Clients";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";

class Layout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Inicio" },
        { id: 3, idnm: "services", navheading: "Producto" },
        // { id: 4, idnm: "pricing", navheading: "Pricing" },
        { id: 6, idnm: "clients", navheading: "Clientes" },
        { id: 5, idnm: "team", navheading: "Descarga" },
        { id: 7, idnm: "contact", navheading: "Contacto" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: "",
      fixTop : true, 
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

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: false });
    }
  };

  render() {
    return (
      <React.Fragment>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
            top={this.state.fixTop}
          />

          {/* Importing Section */}
          <Section />

           {/* Importing Service */}

           <Services />

          {/* Importing Pricing */}

          <Pricing />


           <Prices />

          {/* Importing Team */}
          <Clients />
          
          <Team />

          {/* Importing Clients */}

          {/* Importing Contact Us */}
          <Contact />

          {/* Importing Footer */}
          <Footer />
      </React.Fragment>
    );
  }
}
export default Layout1;
