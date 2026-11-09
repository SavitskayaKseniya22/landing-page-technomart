import image0 from './assets/drill-1.png';
import image1 from './assets/icon-cart.svg';
import image2 from './assets/drill-2.png';
import image3 from './assets/drill-3.png';
import image4 from './assets/drill-4.png';

export default class Products extends HTMLElement {
  connectedCallback() {
    if (!this.childElementCount) this.render();
  }

  render() {
    this.innerHTML = `
<section class="container" id="products">
        <div class="chapter-title">
          <h2>популярные товары</h2>
          <a href="/" class="btn btn_red chapter-title__btn"
            >Все популярные товары</a
          >
        </div>

        <ul class="products__list">
          <li class="products__item">
            <div class="products-item__controls products-item__controls_image">
              <img
                src="${image0}"
                alt="Перфоратор BOSCH BFG 9000"
              />
            </div>

            <div
              class="products-item__controls products-item__controls_buttons"
            >
              <button class="btn btn_buy">
                <img
                  src="${image1}"
                  alt="Корзина"
                />
                Купить
              </button>
              <button class="btn btn_add">В закладки</button>
            </div>
            <div class="products-item__content">
              <p>Перфоратор BOSCH BFG 9000</p>
              <del>32500 &#8381;</del>
              <div class="btn btn_new">25500 &#8381;</div>
            </div>
          </li>
          <li class="products__item">
            <div class="products-item__controls products-item__controls_image">
              <img
                src="${image2}"
                alt="Перфоратор BOSCH BFG 3000"
              />
            </div>

            <div
              class="products-item__controls products-item__controls_buttons"
            >
              <button class="btn btn_buy">
                <img
                  src="${image1}"
                  alt="Корзина"
                />
                Купить
              </button>
              <button class="btn btn_add">В закладки</button>
            </div>
            <div class="products-item__content">
              <p>Перфоратор BOSCH BFG 3000</p>
              <del>22500 &#8381;</del>
              <div class="btn btn_new">15500 &#8381;</div>
            </div>
          </li>
          <li class="products__item">
            <div class="products-item__controls products-item__controls_image">
              <img
                src="${image3}"
                alt="Перфоратор BOSCH BFG 6000"
              />
            </div>

            <div
              class="products-item__controls products-item__controls_buttons"
            >
              <button class="btn btn_buy">
                <img
                  src="${image1}"
                  alt="Корзина"
                />
                Купить
              </button>
              <button class="btn btn_add">В закладки</button>
            </div>
            <div class="products-item__content">
              <p>Перфоратор BOSCH BFG 6000</p>
              <del>30500 &#8381;</del>
              <div class="btn btn_new">25999 &#8381;</div>
            </div>
          </li>
          <li class="products__item products__item_new">
            <div class="products-item__controls products-item__controls_image">
              <img
                src="${image4}"
                alt="Перфоратор BOSCH BFG 2000"
              />
            </div>

            <div
              class="products-item__controls products-item__controls_buttons"
            >
              <button class="btn btn_buy">
                <img
                  src="${image1}"
                  alt="Корзина"
                />
                Купить
              </button>
              <button class="btn btn_add">В закладки</button>
            </div>
            <div class="products-item__content">
              <p>Перфоратор BOSCH BFG 2000</p>
              <del></del>
              <div class="btn btn_new">25500 &#8381;</div>
            </div>
          </li>
        </ul>
      </section>
`;
  }
}
