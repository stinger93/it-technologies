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
                <a href="" class="btn nav-btn active">О нас</a>
                <a href="" class="btn nav-btn">Услуги</a>
                <a href="" class="btn nav-btn">Кейсы</a>
            </nav>

            <div class="lng">
                <button type="button" class="btn nav-btn" data-lang="lang">EN</button>
            </div>

            <div class="cont">
                <a href="" class="btn btn-outline-primary cont-us" data-lang="contactUs">Связаться с нами</a>
            </div>

        </div>`
window.onload = function() {
    header.innerHTML=HTMLheader
};