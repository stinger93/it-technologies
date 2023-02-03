/* Получаем язык */
let CURRENT_LANG = localStorage.getItem('current_lang')

/* Получаем все динамические значеня со страницы */
const LANG = document.querySelectorAll('[data-lang]')

// После прогрузки страницы подставляем значения
document.addEventListener("DOMContentLoaded", () => {
    // Локальная переменная
    let lang = ''

    // Сначала проверяем, какой у нас сейчас язык
    if (CURRENT_LANG === null) {
        localStorage.setItem('current_lang', 'ru')
        lang = 'ru'
    } else {
        lang = CURRENT_LANG
    }

    // Подставляем значения
    LANG.forEach((item) => {
        item.innerText = LANG_DATA[item.dataset.lang][lang]
    })
});

/*
Все меняющиеся значения заносим в импровизированную базу
Храним по следующиму принципу:

тэг элемента: {
    ru: 'Значение',
    en: 'Value',
}
*/
const LANG_DATA = {
    // header
    lang: {
        ru: 'EN',
        en: 'RU'
    },


    text1: {
        ru: 'Профессиональные IT продукты и услуги',
        en: 'EN1'
    },
    text2: {
        ru: 'Доверьтесь нам и сократите денежные расходы на бизнес-процессы',
        en: 'EN2'
    },
    text3: {
        ru: 'Внедряем IT системы и помогаем получить \n дополнительный эффект на производстве',
        en: 'EN3'
    }

}
