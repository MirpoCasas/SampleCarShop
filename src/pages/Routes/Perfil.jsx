import React from 'react';
import sampleCar from "../../assets/imgs/sampleCar.jpg"
import placeholderpfp from "../../assets/imgs/placeholder-pfp.jpg"
import "./Perfil.css"

const Perfil = () => {
  return (
    <div className='Perfil'>

      <div className="ContenedorTop">
        <div className='ContenedorTop-Seller'>
          <h1 className='SellerName'>Nombre del vendedor</h1>
          <p>stars rating (28)</p>
        </div>
        <div className='ContenedorTop-Location'>
          <h3>Ubicacion</h3>
          <p>Location</p>
        </div>
      </div>
      <div className="Publicaciones PerfilPart">
        <h2>Publicaciones</h2>
        <div className="Publicaciones-Grid">
          <div className='Publicaciones-Item'>
            <img className='Publicaciones-Item-Img' src={sampleCar} alt="Sample Car" />
            <div className='Publicaciones-Item-Desc'>
              <h3>Nombre del auto</h3>
              <h3>Precio</h3>
              <div className="Publicaciones-Item-Desc-Tags">
                <div className="Publicaciones-Item-Desc-Tag">Nafta</div>
                <div className="Publicaciones-Item-Desc-Tag">'97</div>
                <div className="Publicaciones-Item-Desc-Tag">Ruedas Nuevas</div>
              </div>
            </div>
            <button className='btn ItemBtn'>Ver Publicacion</button>
          </div>
          <div className='Publicaciones-Item'>
            <img className='Publicaciones-Item-Img' src={sampleCar} alt="Sample Car" />
            <div className='Publicaciones-Item-Desc'>
              <h3>Nombre del auto</h3>
              <h3>Precio</h3>
              <div className="Publicaciones-Item-Desc-Tags">
                <div className="Publicaciones-Item-Desc-Tag">Nafta</div>
                <div className="Publicaciones-Item-Desc-Tag">'97</div>
                <div className="Publicaciones-Item-Desc-Tag">Ruedas Nuevas</div>
              </div>
            </div>
            <button className='btn ItemBtn'>Ver Publicacion</button>
          </div>
          <div className='Publicaciones-Item'>
            <img className='Publicaciones-Item-Img' src={sampleCar} alt="Sample Car" />
            <div className='Publicaciones-Item-Desc'>
              <h3>Nombre del auto</h3>
              <h3>Precio</h3>
              <div className="Publicaciones-Item-Desc-Tags">
                <div className="Publicaciones-Item-Desc-Tag">Nafta</div>
                <div className="Publicaciones-Item-Desc-Tag">'97</div>
                <div className="Publicaciones-Item-Desc-Tag">Ruedas Nuevas</div>
              </div>
            </div>
            <button className='btn ItemBtn'>Ver Publicacion</button>
          </div>
          <div className='Publicaciones-Item'>
            <img className='Publicaciones-Item-Img' src={sampleCar} alt="Sample Car" />
            <div className='Publicaciones-Item-Desc'>
              <h3>Nombre del auto</h3>
              <h3>Precio</h3>
              <div className="Publicaciones-Item-Desc-Tags">
                <div className="Publicaciones-Item-Desc-Tag">Nafta</div>
                <div className="Publicaciones-Item-Desc-Tag">'97</div>
                <div className="Publicaciones-Item-Desc-Tag">Ruedas Nuevas</div>
              </div>
            </div>
            <button className='btn ItemBtn'>Ver Publicacion</button>
          </div>
          <div className='Publicaciones-Item'>
            <img className='Publicaciones-Item-Img' src={sampleCar} alt="Sample Car" />
            <div className='Publicaciones-Item-Desc'>
              <h3>Nombre del auto</h3>
              <h3>Precio</h3>
              <div className="Publicaciones-Item-Desc-Tags">
                <div className="Publicaciones-Item-Desc-Tag">Nafta</div>
                <div className="Publicaciones-Item-Desc-Tag">'97</div>
                <div className="Publicaciones-Item-Desc-Tag">Ruedas Nuevas</div>
              </div>
            </div>
            <button className='btn ItemBtn'>Ver Publicacion</button>
          </div>
          <div className='Publicaciones-Item'>
            <img className='Publicaciones-Item-Img' src={sampleCar} alt="Sample Car" />
            <div className='Publicaciones-Item-Desc'>
              <h3>Nombre del auto</h3>
              <h3>Precio</h3>
              <div className="Publicaciones-Item-Desc-Tags">
                <div className="Publicaciones-Item-Desc-Tag">Nafta</div>
                <div className="Publicaciones-Item-Desc-Tag">'97</div>
                <div className="Publicaciones-Item-Desc-Tag">Ruedas Nuevas</div>
              </div>
            </div>
            <button className='btn ItemBtn'>Ver Publicacion</button>
          </div>
        </div>
      </div>
      <div className="Rese PerfilPart">
        <h2>Reseñas</h2>
        <div className='ReseCont'>
          <div className="Rese-Item">
            <div className="Rese-Item-Pic">
              <img src={placeholderpfp} alt="" />
            </div>
            <div className="Rese-Item-Desc">
              <h3>Usuario</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam provident deserunt iure sint consectetur a necessitatibus. Inventore rerum vel pariatur dolorem! Provident, molestiae tempora necessitatibus delectus quia sapiente laborum?</p>
            </div>
          </div>
          <div className="Rese-Item">
            <div className="Rese-Item-Pic">
              <img src={placeholderpfp} alt="" />
            </div>
            <div className="Rese-Item-Desc">
              <h3>Usuario</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam provident deserunt iure sint consectetur a necessitatibus. Inventore rerum vel pariatur dolorem! Provident, molestiae tempora necessitatibus delectus quia sapiente laborum?</p>
            </div>
          </div>
          <div className="Rese-Item">
            <div className="Rese-Item-Pic">
              <img src={placeholderpfp} alt="" />
            </div>
            <div className="Rese-Item-Desc">
              <h3>Usuario</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam provident deserunt iure sint consectetur a necessitatibus. Inventore rerum vel pariatur dolorem! Provident, molestiae tempora necessitatibus delectus quia sapiente laborum?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;