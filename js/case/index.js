import data from "./data.js";
const cases=document.querySelector('.cases-container')

//
for (let i = 0; i < data.length; i++) {
    const element=data[i]
    cases.innerHTML+=`
    <div class="case">
      <div class="case-title">${element.title}</div>
      <div class="case-container">

        <div class="case-img">
          <img src="${element.img}">
        </div>

        <div class="case-card">
          <div class="case-card-container">

            <div class="case-card-list dash">
              <h5>${element.dashList.title}</h5>
              <ul data-dash="${i}"></ul>
            </div>

            <div class="case-card-list dot">
              <h5>${element.dotList.title}</h5>
              <ul data-dot="${i}"></ul>
            </div>

            <div class="case-card-list c-mark">
              <h5>${element.cMarkList.title}</h5>
                <ul data-c-mark="${i}"></ul>
            </div>

            <button class="btn btn-primary start-btn rounded-1" style="width: 100%">Презентация проекта</button>

          </div>
        </div>
      </div>
    </div>
`

    innerElements ('dash', "dashList", i)
    innerElements ('dot', "dotList", i)
    innerElements ('c-mark', "cMarkList", i)
}

function innerElements (attr, items, i) {
    const list = document.querySelector(`[data-${attr}="${i}"]`)
    const elems = data[i][items].items

    for (let j = 0; j < elems.length; j++) {
        const elem = elems[j]
        list.innerHTML += `
            <li>${elem.li}</li>
        `
    }
}