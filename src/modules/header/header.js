import image0 from './assets/icon-bookmark.svg';
import image1 from './assets/icon-cart.svg';
import image2 from './assets/icon-buy.svg';
import image3 from './assets/icon-search.svg';

export default class Header extends HTMLElement {
  /** @type {AbortController | null} */
  controller = null;

  connectedCallback() {
    if (!this.childElementCount) this.render();
    this.controller?.abort();
    this.controller = new AbortController();

    const toggle = this.querySelector('.btn_search');
    toggle?.addEventListener(
      'click',
      () => {
        const expanded = toggle.getAttribute('aria-expanded') !== 'true';
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.setAttribute(
          'aria-label',
          expanded ? 'Закрыть поиск' : 'Открыть поиск'
        );
        if (expanded) this.querySelector('input')?.focus();
      },
      { signal: this.controller.signal }
    );
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.controller = null;
  }

  render() {
    this.innerHTML = `
<header class="header" id="header">
      <div class="header__top">
        <div class="container">
          <a href="/" class="logo logo_slim"><h1>Техномарт</h1></a>

          <div class="header-top__buttons">
            <button class="btn_inform btn_bookmarks">
              <img
                src="${image0}"
                alt="Закладки"
                width="16"
                height="16"
              />

              <span>Закладки :</span>
              0
            </button>

            <button class="btn_inform btn_cart">
              <img
                src="${image1}"
                alt="Корзина"
                width="16"
                height="16"
              />
              <span>Корзина:</span>
              0
            </button>

            <button class="btn_order">
              <img
                src="${image2}"
                alt="Оформить заказ"
                width="26"
                height="26"
              />
              <span>Оформить заказ</span>
            </button>

            <button
              type="button"
              class="btn_search"
              aria-label="Открыть поиск"
              aria-controls="search-input"
              aria-expanded="false"
            >
              <img
                src="${image3}"
                alt=""
                width="20"
                height="20"
              />
            </button>
          </div>
          <input
            type="search"
            id="search-input"
            name="search"
            aria-label="Поиск по сайту"
            placeholder="Поиск:"
          />
        </div>
      </div>

      <div class="header__contacts container">
        <p class="header-contacts__info">
          Интернет-магазин строительных материалов и инструментов для ремонта
        </p>

        <p class="header-contacts__details">
          <a href="tel:+78125550555" class="details_tel">+7 (812) 555-05-55</a>
          <span class="details_adress">
            г. Санкт-Петербург, ул. Б. Конюшенная, д.19/8
          </span>
        </p>

        <div class="header-contacts__auth">
          <a href="/" class="btn__auth_login btn__auth">Войти</a>
          <a href="/" class="btn__auth_reg btn__auth">Регистрация</a>
        </div>
      </div>
      <ul class="header__navigation container">
        <li><a href="/">Главная</a></li>
        <li><a href="/">Компания</a></li>
        <li><a href="/">Каталог</a></li>
        <li><a href="/">Новости</a></li>
        <li class="header__navigation_sub"><a href="/">Спецпредложения</a></li>
        <li class="header__navigation_sub"><a href="/">Доставка</a></li>
        <li class="header__navigation_sub"><a href="/">Контакты</a></li>
      </ul>
    </header>
`;
  }
}
