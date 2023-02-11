const currenturl=window.location.pathname
const dirtyurl=currenturl.split('/')
const url=dirtyurl[dirtyurl.length-1]

const header=document.querySelector("#header")
const HTMLheader=`    
        <div class="d-flex align-items-center container header-container justify-content-between">

            <div class="logo d-flex">
                <div class="logo_round">
                    <img src="assets/img/header/2.png">
                    <img src="assets/img/header/1.png">
                </div>
                <div class="logo_name">
                    <img src="assets/img/header/name.png">
                </div>
            </div>

            <nav>
                <a href="/Внедрение%20it%20технологий/index.html" class="btn nav-btn buttons ${url === 'index.html' ? 'active' : ''}">О нас</a>
                <a href="/Внедрение%20it%20технологий/service.html" class="btn nav-btn buttons ${url === 'service.html' ? 'active' : ''}">Услуги</a>
                <a href="/Внедрение%20it%20технологий/case.html" class="btn nav-btn buttons ${url === 'case.html' ? 'active' : ''}">Кейсы</a>
            </nav>

            <div class="lng">
                <button type="button" class="btn nav-btn buttons" data-lang="lang">EN</button>
            </div>

            <div class="cont">
                <a href="" class="btn btn-outline-primary cont-us" data-lang="contactUs">Связаться с нами</a>
            </div>

        </div>`

const form=document.querySelector('#feedback-form')
const  HTMLform=`
                        <div class="form-text-field">
                            <label for="inp1" class="form-title required">Имя</label>
                            <input id="inp1" type="text"
                                   placeholder="Введите имя" required
                                   class="feedback-form-input form-input">
                        </div>

                        <div class="form-text-field">
                            <label for="inp2" class="form-title required">Номер телефона</label>
                            <input id="inp2" type="text"
                                   placeholder="Введите номер телефона " required
                                   class="feedback-form-input form-input">
                        </div>

                        <div class="form-text-field">
                            <label for="inp3" class="form-title required">E-mail</label>
                            <input id="inp3" type="E-mail"
                                   placeholder="Введите e-mail" required
                                   class="feedback-form-input form-input">
                        </div>

                        <button class="btn btn-primary start-btn rounded-1" style="width: 100%">Отправить</button>

                        <div class="feedback-form-policy">
                            Нажимая на кнопку, вы автоматически
                            соглашаетесь с <a href="/Внедрение%20it%20технологий/policy.html" class="btn examples-btn buttons">Политикой конфиденциальности</a>
                        </div>`

window.onload = function() {
    header.innerHTML=HTMLheader
    form.innerHTML=HTMLform
};