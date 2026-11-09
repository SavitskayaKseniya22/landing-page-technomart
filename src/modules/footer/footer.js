import image0 from './assets/vk-icon.png';
import image1 from './assets/fb-icon.png';
import image2 from './assets/insta-icon.png';

export default class Footer extends HTMLElement {
  connectedCallback() {
    if (!this.childElementCount) this.render();
  }

  render() {
    this.innerHTML = `
<footer class="footer" id="footer">
      <div class="container">
        <div class="footer__panel_top">
          <a href="/" class="logo logo_wide"><h1>Техномарт</h1></a>
          <ul class="footer__nav-list_main">
            <li><a href="/">Компания</a></li>
            <li><a href="/">Новости</a></li>
            <li><a href="/">Каталог</a></li>
            <li><a href="/">Доставка</a></li>
            <li><a href="/">Контакты</a></li>
          </ul>
        </div>
        <div class="footer__panel_middle">
          <p class="footer__adress">
            <span>г. Санкт-Петербург, ул. Б. Конюшенная, д. 19/8</span>
            <span> +7 (812) 555-05-55</span>
          </p>
          <ul class="footer__nav-list_sub">
            <li><a href="/">Материалы</a></li>
            <li><a href="/">Техника</a></li>
            <li><a href="/">Инструмент</a></li>
            <li><a href="/">Спецпредложения</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__panel_bottom">
        <div class="container">
          <p class="footer__rights">
            <span>© 2010-2017 Компания «Техномарт»</span>
            <span>Все права защищены</span>
          </p>
          <ul class="socials">
            <li>
              <a href="/"
                ><img
                  src="${image0}"
                  alt="Вконтакте"
              /></a>
            </li>
            <li>
              <a href="/"
                ><img
                  src="${image1}"
                  alt="Фейсбук"
              /></a>
            </li>
            <li>
              <a href="/"
                ><img
                  src="${image2}"
                  alt="Инстаграм"
              /></a>
            </li>
          </ul>
          <p class="footer__feedback">
            <span>Обратная связь -</span>
            <a href="/" class="link_regular">mail@htmlacademy.ru</a>
          </p>
          <p class="footer__autors">
            <span>PSD-макет разработан -</span>
            <a href="/" class="link_regular">Htmlacademy.ru</a>
          </p>
        </div>
      </div>
    </footer>
`;
  }
}
