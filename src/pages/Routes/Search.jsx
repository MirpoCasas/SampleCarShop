import "./Search.css"
import arrow from "../../assets/svg/navarrow.svg"
import { Link, useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';


function Search() {

  const [cars, setcars] = useState([])

  let pos = 1
  const APIlink = "https://usados-deploy-repo.onrender.com/vehicles/all"

  let query = new URLSearchParams(useLocation().search)
  console.log(query)
  console.log(query.get("brand"))



  useEffect(() => {
    let mounted = true;

    fetch(APIlink)
      .then(response => response.json())
      .then(data => {
        if (mounted) {
          clearSearches();
          setcars(data.body);
          fillArray(data.body, pos);
        }
      })
      .catch(error => console.error(error));

    return () => {
      mounted = false;
    };
  }, []);


  function fillArray(resArr, position) {
    let cont = document.querySelector(".Results")
    if (position === 1) {
      var ind = 0
      var limit = 8
    } else {
      var limit = 8 * position
      position--
      var ind = 8 * position
    }
    for (let index = ind; index < limit; index++) {
      const element = resArr[index];
      let newEl = document.createElement("div")
      newEl.classList.add("Results-Card")
      newEl.innerHTML = `
      <div class="Results-Card-Pic" style="${"background-image: url('" + element.images[0] + "')"}"></div>
      <div class="Results-Card-Desc">
        <h2>${element.brand + " " + element.model}</h2>
        <h3>${"$" + element.price}</h3>
        <div class="Results-Card-Tag-Cont">
        <div class="Results-Card-Tag"><p>${element.type}</p></div>
        <div class="Results-Card-Tag"><p>${element.year}</p></div>
        </div>
        <a href="#/post">
        <button class="btn Results-Card-Button">Ver publicacion</button>
        </a>
      </div>
   `
      cont.appendChild(newEl)
    }
  }

  function showMenu(elem) {
    console.log("this", this)
    console.log("e.target", elem.target)
    console.log("e.currentTarget", elem.currentTarget)
    console.log("e.currentTarget sibling", elem.currentTarget.nextSibling)
    let element = elem.currentTarget.nextSibling
    let arrow = elem.currentTarget.lastChild
    console.log(arrow)
    if (element.style.height === "auto") {
      console.log("setting to 0");
      arrow.style.transform = 'rotate(0deg)'
      element.style.height = 0
    } else {
      console.log("setting to auto");
      arrow.style.transform = 'rotate(180deg)'
      element.style.height = "auto"
    }

  }

  function displayMore() {
    console.log("displaying more")
    pos++
    console.log("pos", pos)
    fillArray(cars, pos)
  }

  function clearSearches() {
    let cont = document.querySelector(".Results")
    cont.innerHTML = ""
  }
  function loadSkele() {
    let cont = document.querySelector(".Results")
    cont.innerHTML = ""
    cont.innerHTML = `
          <div className="loaderCard gradient"></div>
          <div className="loaderCard gradient"></div>
          <div className="loaderCard gradient"></div>
          <div className="loaderCard gradient"></div>
    `
  }

  return (
    <div className="Search">
      <div className="FilterBar">
        <h2 className="FilterName">Filtros</h2>
        <form action="" method="get" className="FilterForm">
          <div className="FilterCont">
            <div className="FilterCont-Title" onClick={(e) => showMenu(e)} >
              <p className="FilterName">Color</p><img src={arrow} alt="Dropdown" />
            </div>
            <div className="FilterCont-FiltersCont" id="ColorFilters">
              <div className="FilterCont-Filters">
                <ul>
                  <li><label className="filterLabel" htmlFor="BlueColor"><input type="checkbox" name="" id="BlueColor" /><p>Blue</p></label></li>
                  <li><label className="filterLabel" htmlFor="BlackColor"><input type="checkbox" name="" id="BlackColor" /><p>Black</p></label></li>
                  <li><label className="filterLabel" htmlFor="RedColor"><input type="checkbox" name="" id="RedColor" /><p>Red</p></label></li>
                  <li><label className="filterLabel" htmlFor="YellowColor"><input type="checkbox" name="" id="YellowColor" /><p>Yellow</p></label></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="FilterCont">
            <div className="FilterCont-Title" onClick={(e) => showMenu(e)}>
              <p className="FilterName">Marca</p><img src={arrow} alt="Dropdown" />
            </div>
            <div className="FilterCont-FiltersCont">
              <div className="FilterCont-Filters">
                <ul>
                  <li><label className="filterLabel" htmlFor="MaseratiBrand"><input type="checkbox" name="brand" id="MaseratiBrand" value="Maserati"/><p>Maserati</p></label></li>
                  <li><label className="filterLabel" htmlFor="SmartBrand"><input type="checkbox" name="brand" id="SmartBrand" value="Smart"/><p>Smart</p></label></li>
                  <li><label className="filterLabel" htmlFor="MercedesBenzBrand"><input type="checkbox" name="brand" id="MercedesBenzBrand" value="Mercedes Benz"/><p>Mercedes Benz</p></label></li>
                  <li><label className="filterLabel" htmlFor="RollsRoyceBrand"><input type="checkbox" name="brand" id="RollsRoyceBrand" value="Rolls Royce"/><p>Rolls Royce</p></label></li>
                  <li><label className="filterLabel" htmlFor="FordBrand"><input type="checkbox" name="brand" id="FordBrand" value="Ford"/><p>Ford</p></label></li>
                  <li><label className="filterLabel" htmlFor="ToyotaBrand"><input type="checkbox" name="brand" id="ToyotaBrand" value="Toyota"/><p>Toyota</p></label></li>
                  <li><label className="filterLabel" htmlFor="BMWBrand"><input type="checkbox" name="brand" id="BMWBrand" value="BMW"/><p>BMW</p></label></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="FilterCont">
            <div className="FilterCont-Title" onClick={(e) => showMenu(e)}>
              <p className="FilterName">Transmision</p><img src={arrow} alt="Dropdown" />
            </div>
            <div className="FilterCont-FiltersCont">
              <div className="FilterCont-Filters">
                <ul>
                  <li><label className="filterLabel" htmlFor="ManualTransm"><input type="checkbox" name="" id="ManualTransm" /><p>Manual</p></label></li>
                  <li><label className="filterLabel" htmlFor="AutomaticTransm"><input type="checkbox" name="" id="AutomaticTransm" /><p>Automatic</p></label></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="FilterCont">
            <div className="FilterCont-Title" onClick={(e) => showMenu(e)}>
              <p className="FilterName">Interior</p><img src={arrow} alt="Dropdown" />
            </div>
            <div className="FilterCont-FiltersCont">
              <div className="FilterCont-Filters">
                <ul>
                  <li><label className="filterLabel" htmlFor="CueroInt"><input type="checkbox" name="" id="CueroInt" /><p>Cuero</p></label></li>
                  <li><label className="filterLabel" htmlFor="Otros"><input type="checkbox" name="" id="Otros" /><p>Cuero</p></label></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="FilterCont">
            <div className="FilterCont-Title" onClick={(e) => showMenu(e)}>
              <p className="FilterName">Año del modelo</p><img src={arrow} alt="Dropdown" />
            </div>
            <div className="FilterCont-FiltersCont">
              <div className="FilterCont-Filters">
                <label className="filterLabel" htmlFor="prevDate"><p>Desde: </p><input type="number" name="" id="prevDate" /></label>
                <label className="filterLabel" htmlFor="latDate"><p>Hasta :</p><input type="number" name="" id="latDate" /></label>
              </div>
            </div>
          </div>
                <button className="applyFilterBtn btn" type="submit">Apply</button>
        </form>
      </div>
      <div className="ResultsHud">
        <div className="ResultsBar">
          <p>Buscando todos los vehiculos</p>
          <p>{cars.length + " resultados"}</p>
        </div>
        <div className="Results">
          <div className="loaderCard gradient"></div>
          <div className="loaderCard gradient"></div>
          <div className="loaderCard gradient"></div>
          <div className="loaderCard gradient"></div>
        </div>
        <button onClick={displayMore} className="btn Results-More"><p>Ver mas publicaciones</p></button>
      </div>
    </div>
  )
}

export default Search 