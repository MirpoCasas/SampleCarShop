import React from 'react';
import "./Post.css"

const Post = () => {
  return (
    <div className='Post'>
      <div className="Titlecont SectionP">
        <h1>Nombre del auto</h1>
        <h1>Precio</h1>
      </div>
      <div className="ImgGal SectionP">
        <div className="placeholderPic"></div>
        <div className="placeholderPic"></div>
        <div className="placeholderPic"></div>
        <div className="placeholderPic"></div>

      </div>
      <div className="TabBar">
        <div className="TabBar-Section"><p>Detalles</p></div>
        <div className="TabBar-Section"><p>Especificaciones</p></div>
        <div className="TabBar-Section"><p>Historial</p></div>
        <div className="TabBar-Section"><p>Reseñas</p></div>
        <div className="TabBar-Section"><p>Similares</p></div>
      </div>
      <div className="Details SectionP">
        <h1>Detalles</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quos fugit praesentium quisquam, ex dolores esse necessitatibus quis sequi beatae expedita, iure voluptatibus tenetur! Blanditiis impedit ex deserunt accusamus quasi.</p>
      </div>
      <div className="Espec SectionP">
        <h1>Especificaciones</h1>
        <div className="PostGrid">
          <div className="title1">Color</div>
          <div className="title2">Combustible</div>
          <div className="title3">Puertas</div>
          <div className="title4">Asientos</div>
          <div className="title5">Motor</div>
          <div className="title6">Blanco</div>
          <div className="title7">Nafta</div>
          <div className="title8">5</div>
          <div className="title9">5</div>
          <div className="title10">Diesel</div>
        </div>
      </div>
      <div className="Hist SectionP">
        <h1>Historial</h1>
        <div className="PostGrid">
        <div className="title1">Dueños</div>
          <div className="title2">Daños a pintura</div>
          <div className="title3">Interior Limpio</div>
          <div className="title4">Ruedas con dibujo visible</div>
          <div className="title5">Luces del tablero</div>
          <div className="title6">2</div>
          <div className="title7">No</div>
          <div className="title8">Si</div>
          <div className="title9">Si</div>
          <div className="title10">No</div>
        </div>
      </div>
      <div className="Reviews SectionP">
      <h1>Reseñas</h1>
      </div>
      <div className="Similar SectionP">
      <h1>Similares</h1>

      </div>
    </div>
  );
};

export default Post;