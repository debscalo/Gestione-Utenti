"use strict";


function userListRender() {
    let dati = document.querySelector(".usersList");
    if (dati != null)
        dati.innerHTML = "";
    userList.forEach(elem => {
        let listaItem = document.createElement("div");
        listaItem.setAttribute("class", "row");
        listaItem.setAttribute("name", "userList");
        listaItem.setAttribute("id", elem.name.toString());
        listaItem.innerHTML = `<div class="col" id="name">${elem.name}</div> 
        <div class="col" id="surname">${elem.surname}</div>  
        <div class="col" id="address">${elem.address}</div>  
        <div class="col" id="city">${elem.city}</div> 
        <div class="col" id="zip">${elem.zip}</div> 
        <div class="col" id="date">${elem.date}</div>`;
        if (dati != null)
            dati.appendChild(listaItem);
    });
}




userListRender();
