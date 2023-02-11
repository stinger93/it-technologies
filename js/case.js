const data=[
    {
        title:'Мобильное приложение',
        img:'assets/img/cases/Mobile.png',
        dashList:{
            title:'Требования заказчика',
            items:[
                {
                    li:'Обеспечить оперативный доступ руководителей к информации о производстве'
                },
                {
                    li:'Создать приложение, поддерживающее желание руководителей в нем работать'
                },
                {
                    li:'Разработать интуитивно понятный интерфейс'
                },
            ]
        },
        dotList:{
            title:'Наше решение',
            items:[
                {
                    li:'Мобильное приложение для руководителей производства'
                },
            ]
        },
        cMarkList:{
            title:'Результат после внедрения',
            items:[
                {
                    li:'Доступ к информации из любой точки на производстве'
                },
                {
                    li:'Сокращение временных затрат на поиск и анализ информации'
                },
                {
                    li:'Оперативность в принятии решений'
                },
            ]
        }
    },
    {
        title:'Цифровой конвейер',
        img:'assets/img/cases/Digital.png',
        dashList:{
            title:'Требования заказчика',
            items:[
                {
                    li:'Сократить затраты на ремонт конвейера'
                },
                {
                    li:'Определять объемы и влажность руды'
                },
                {
                    li:'Вовремя распознавать порезы на ленте конвейера'
                },
            ]
        },
        dotList:{
            title:'Наше решение',
            items:[
                {
                    li:'Использование искусственного интеллекта для оперативного отслеживания на конвейере нерудных материалов'
                },
            ]
        },
        cMarkList:{
            title:'Результат после внедрения',
            items:[
                {
                    li:'Сокращение стоимости эксплуатации конвейера до 10 %'
                },
                {
                    li:'Сокращение внеплановых простоев дробильного оборудования до 50%'
                },
            ]
        }
    },
    {
        title:'Экзоскелеты',
        img:'assets/img/cases/Exoskeletons.png',
        dashList:{
            title:'Требования заказчика',
            items:[
                {
                    li:'Повысить производительность труда'
                },
                {
                    li:'Снизить количество травм у работников'
                },
                {
                    li:'Решить проблему быстрой утомляемости'
                },
            ]
        },
        dotList:{
            title:'Наше решение',
            items:[
                {
                    li:'Механико-электрическое устройство для компенсации нагрузки на организм человека'
                },
            ]
        },
        cMarkList:{
            title:'Результаты после внедрения',
            items:[
                {
                    li:'Снижение рисков травматизма'
                },
                {
                    li:'Снижение физической нагрузки'
                },
                {
                    li:'Повышение производительности на 30%'
                },
                {
                    li:'Улучшение состояния здоровья работников'
                },
                {
                    li:'Повышение безопасности при перемещениях'
                },
            ]
        }
    },
]


const cases=document.querySelector('.cases-container')
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

              <ul>
                <li>Обеспечить оперативный доступ руководителей к информации о производстве</li>
                <li>Создать приложение, поддерживающее желание руководителей в нем работать</li>
                <li>Разработать интуитивно понятный интерфейс </li>
              </ul>

            </div>

            <div class="case-card-list dot">

              <h5>${element.dotList.title}</h5>

              <ul>
                <li>Мобильное приложение для руководителей производства</li>
              </ul>

            </div>

            <div class="case-card-list c-mark">

              <h5>${element.cMarkList.title}</h5>

              <ul>
                <li>Доступ к информации из любой точки на производстве</li>
                <li>Сокращение временных затрат на поиск и анализ информации</li>
                <li>Оперативность в принятии решений</li>
              </ul>

            </div>

            <button class="btn btn-primary start-btn rounded-1" style="width: 100%">Презентация проекта</button>

          </div>

        </div>

      </div>

    </div>
`
}


