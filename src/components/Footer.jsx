import React from "react";
import "./Footer.css"
import {Link } from "react-router-dom"

const Footer = () => {
	return (
    <footer>
			<div className="FooterSection">
				<h3>Comprar</h3>
				<a className="navLink" href="">Buscar por categoria</a>
				<a className="navLink" href="">Ver todo el inventario</a>
				<a className="navLink" href="">Encontrar por palabra clave</a>
			</div>
			<div className="FooterSection">
				<h3>Vender / Cambiar</h3>
				<a className="navLink" href="">Cotizar</a>
				<a className="navLink" href="">Publicar</a>
			</div>
			<div className="FooterSection">
				<h3>Acerca de</h3>
				<Link className="navLink" to="/aboutus">Nosotros</Link>
				<a className="navLink" href="">Terminos y condiciones</a>
			</div>
			<div className="FooterSection">
				<h3>Mas</h3>
				<a className="navLink" href="">FAQ</a>
			</div>
			<h3 className="Footer-Brand">AUTOSUSADOS.COM</h3>
		</footer>
	);
};

export default Footer;
