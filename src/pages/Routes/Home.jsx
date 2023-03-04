import React from "react";
import "./Home.css";
import pickup from "../../assets/svg/4x4.svg";
import hatchback from "../../assets/svg/hatchback.svg";
import sedan from "../../assets/svg/sedan.svg";
import suv from "../../assets/svg/suv.svg";
import coupe from "../../assets/svg/coupe.svg";
import dropdown from "../../assets/imgs/dropdown.png";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Home = () => {




	return (
		<div>
			<div className="Head">
				<div className="Head-Textcont">
					<h1>Encontra el vehiculo de tus sueños, con unos KM encima.</h1>
					<Link to="search">

						<button className="btn Mainbtn">MIRA NUESTRAS MEJORES OFERTAS</button>
					</Link>
				</div>
			</div>
			<div className="SecondSection Section SecondSection-Background">
				<div id="FirstModal" className="PseudoModal">
					<h3>COMPRA TU USADO DE LA MEJOR MANERA</h3>
					<ul>
						<li>Visitas inmediatas para vehiculos seleccionados</li>
						<li>Compara precios y modelos distintos</li>
						<li>Asesorate con nuestro servicio tecnico</li>
					</ul>
					<button className="btn PseudoModal-btn">
						MIRA NUESTRAS MEJORES OFERTAS
					</button>
				</div>
			</div>
			<div className="ThirdSection Section">
				<div className="ThirdSection-Background"></div>
				<div id="SecondModal" className="PseudoModal">
					<h3>PUBLICA TU AUTO CON NOSTROS</h3>
					<ul>
						<li>Ayudate con nuestra sugerencia de precios</li>
						<li>Ofrece multiples medios de pago incluyendo permuta</li>
						<li>Publica una unica vez</li>
					</ul>
					<button className="btn PseudoModal-btn">
						MIRA NUESTRAS MEJORES OFERTAS
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
