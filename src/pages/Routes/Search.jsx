import "./Search.css"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';


function Search() {

  const [cars, setcars] = useState([])

  let pos = 1

  useEffect(() => {
    console.log("setting mounted true")
    let mounted = true;

    fetch('https://usados-deploy-repo.onrender.com/vehicles/all')
      .then(response => response.json())
      .then(data => {
        console.log("checking mounted")
        if (mounted) {
          console.log("setting info")
          setcars(data.body);
          console.log("data body", data.body)
          console.log("cars", cars)
          fillArray(data.body, pos);
          console.log("mounted")
        }
      })
      .catch(error => console.error(error));

    return () => {
      console.log("setting to false")
      mounted = false;
    };
  }, []);


  function fillArray(resArr, position) {
    console.log("filling")
    let cont = document.querySelector(".Results")
    if (position === 1) {
      var ind = 0
      var limit = 8
    } else {
      console.log("else")
      var limit = 8 * position
      console.log("position" , position)
      console.log("limit" , limit)
      position--
      console.log("position" , position)
      var ind = 8 * position
      console.log("ind", ind)
    }
    for (let index = ind; index < limit; index++) {
      const element = resArr[index];
      console.log(element)
      let newEl = document.createElement("div")
      newEl.innerHTML = `
      <div class="Results-Card">
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
      </div>
   `
      cont.appendChild(newEl)
    }
  }

  function showMenu(elem) {
    let parent = elem.parentElement
    let element = parent.nextSibling
    if (element.style.height === "auto") {
      console.log("setting to 0");
      element.style.height = 0
    } else {
      console.log("setting to auto");
      element.style.height = "auto"
    }
  }

  function displayMore() {
    console.log("displaying more")
    pos++
    console.log("pos", pos)
    fillArray(cars,pos)
  }

  return (
    <div className="Search">
      <div className="FilterBar">
        <div className="FilterCont">
          <div className="FilterCont-Title" onClick={(e) => showMenu(e.target)} >
            <p>Color</p>
          </div>
          <div className="FilterCont-Filters" id="ColorFilters">
            <ul>
              <li><label className="filterLabel" htmlFor="BlueColor"><input type="checkbox" name="" id="BlueColor" /><p>Blue</p></label></li>
              <li><label className="filterLabel" htmlFor="BlackColor"><input type="checkbox" name="" id="BlackColor" /><p>Black</p></label></li>
              <li><label className="filterLabel" htmlFor="RedColor"><input type="checkbox" name="" id="RedColor" /><p>Red</p></label></li>
              <li><label className="filterLabel" htmlFor="YellowColor"><input type="checkbox" name="" id="YellowColor" /><p>Yellow</p></label></li>
            </ul>
          </div>
        </div>
        <div className="FilterCont">
          <div className="FilterCont-Title" onClick={(e) => showMenu(e.target)}>
            <p>Marca</p>
          </div>
          <div className="FilterCont-Filters">
            <ul>
              <li><label className="filterLabel" htmlFor="ChevroletBrand"><input type="checkbox" name="" id="ChevroletBrand" /><p>Chevrolet</p></label></li>
              <li><label className="filterLabel" htmlFor="FordBrand"><input type="checkbox" name="" id="FordBrand" /><p>Ford</p></label></li>
              <li><label className="filterLabel" htmlFor="KIABrand"><input type="checkbox" name="" id="KIABrand" /><p>KIA</p></label></li>
              <li><label className="filterLabel" htmlFor="NissanBrand"><input type="checkbox" name="" id="NissanBrand" /><p>Nissan</p></label></li>
            </ul>
          </div>
        </div>
        <div className="FilterCont">
          <div className="FilterCont-Title" onClick={(e) => showMenu(e.target)}>
            <p>Transmision</p>
          </div>
          <div className="FilterCont-Filters">
            <ul>
              <li><label className="filterLabel" htmlFor="ManualTransm"><input type="checkbox" name="" id="ManualTransm" /><p>Manual</p></label></li>
              <li><label className="filterLabel" htmlFor="AutomaticTransm"><input type="checkbox" name="" id="AutomaticTransm" /><p>Automatic</p></label></li>
            </ul>
          </div>
        </div>
        <div className="FilterCont">
          <div className="FilterCont-Title" onClick={(e) => showMenu(e.target)}>
            <p>Interior</p>
          </div>
          <div className="FilterCont-Filters">
            <ul>
              <li><label className="filterLabel" htmlFor="CueroInt"><input type="checkbox" name="" id="CueroInt" /><p>Cuero</p></label></li>
              <li><label className="filterLabel" htmlFor="Otros"><input type="checkbox" name="" id="Otros" /><p>Cuero</p></label></li>
            </ul>
          </div>
        </div>
        <div className="FilterCont">
          <div className="FilterCont-Title" onClick={(e) => showMenu(e.target)}>
            <p>Año del modelo</p>
          </div>
          <div className="FilterCont-Filters">
            <label className="filterLabel" htmlFor="prevDate"><p>Desde: </p><input type="number" name="" id="prevDate" /></label>
            <label className="filterLabel" htmlFor="latDate"><p>Hasta :</p><input type="number" name="" id="latDate" /></label>
          </div>
        </div>
      </div>
      <div className="ResultsHud">
        <div className="ResultsBar">
          <p>Buscando todos los vehiculos</p>
          <p>{cars.length + " resultados"}</p>
        </div>
        <div className="Results">

        </div>
        <button onClick={displayMore} className="btn Results-More"><p>Ver mas publicaciones</p></button>
      </div>
    </div>
  )
}

export default Search 