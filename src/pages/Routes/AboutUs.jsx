import React from "react";
import map from "../../assets/imgs/map.png";
import "./AboutUs.css";
import cash from '../../assets/svg/cash.svg'
import dividend from '../../assets/svg/dividend.svg'
import compass from "../../assets/svg/compass.svg"
import communications from "../../assets/svg/communications.svg"

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="head-title">
        <h1 className="main-title">AUTOSUSADOS.COM</h1>
        <h3 className="sub-title">NUESTRO PROPOSITO</h3>
      </div>
      <div className="description">
        <p className="description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit
          adipisci iusto, veniam corrupti neque natus, id vitae alias fuga
          cupiditate odio ex. Corrupti voluptates ratione voluptatum quam iste
          quis facere quisquam eligendi ex incidunt vel doloremque ullam nemo
          placeat repellendus rem error, qui, accusamus unde adipisci dolor
          dolorum magnam? Temporibus, sunt! Unde ipsam dolore itaque quo commodi
          iure, maxime incidunt quos autem recusandae aliquid quibusdam
          dignissimos, in architecto necessitatibus exercitationem nihil
          reiciendis officiis veniam accusamus ducimus iste. Aliquam odit fugit,
          iste nobis inventore voluptates mollitia vitae doloribus sed placeat
          modi expedita quibusdam, soluta facere ratione, molestiae corporis
          dolor velit?
        </p>
      </div>
      <div className="advantages">
        <div className="item">
          <img src={cash} alt="" className="itemSVG"/>
          <span className="spanClass">Multiples medios de pago</span>
        </div>
        <div className="item">
          <img src={communications} alt="" className="itemSVG"/>
          <span className="spanClass">Soporte las 24hs</span>
        </div>
        <div className="item">
          <img src={compass} alt="" className="itemSVG"/>
          <span className="spanClass">Ubicados en distintas ciudades</span>
        </div>
        <div className="item">
          <img src={dividend} alt="" className="itemSVG"/>
          <span className="spanClass">Devoluciones a 3 días de la compra</span>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact">
          <h2 className="form-title">CONTACTANOS</h2>
          <form action="" className="form-contact">
            <div className="input-form">
              <label>Nombre</label>
              <input className="Classinput" type="nombre" />
            </div>
            <div className="input-form">
              <label>Email</label>
              <input className="Classinput" type="email" />
            </div>
            <div className="input-form">
              <label>Telefono</label>
              <input className="Classinput" type="number" />
            </div>
            <button className="form-button">Enviar</button>
          </form>
        </div>
        <div className="contact-map">
          <img src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
