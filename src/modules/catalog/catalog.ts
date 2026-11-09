export default class Catalog extends HTMLElement {
  private controller: AbortController | null = null;
  private timer: number | undefined;

  connectedCallback() {
    if (!this.childElementCount) this.render();
    this.controller?.abort();
    this.controller = new AbortController();
    const options = { signal: this.controller.signal };

    const inputs = Array.from(
      this.querySelectorAll<HTMLInputElement>('input[name="catalog__slider"]')
    );
    const slides = this.querySelectorAll<HTMLElement>('.slide');
    let activeSlide = Math.max(
      0,
      inputs.findIndex((input) => input.checked)
    );
    const selectSlide = (index: number) => {
      const input = inputs[index];
      if (!input) return;
      activeSlide = index;
      inputs.forEach((control) => {
        control.checked = control === input;
      });
      slides.forEach((slide) => {
        const selected = slide.dataset.id === input.value;
        slide.classList.toggle('selected', selected);
        slide.setAttribute('aria-hidden', String(!selected));
      });
    };
    inputs.forEach((input, index) => {
      input.addEventListener('change', () => selectSlide(index), options);
    });
    selectSlide(activeSlide);
    if (inputs.length > 1) {
      window.clearInterval(this.timer);
      this.timer = window.setInterval(
        () => selectSlide((activeSlide + 1) % inputs.length),
        3000
      );
    }
  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
    this.timer = undefined;
    this.controller?.abort();
    this.controller = null;
  }

  render() {
    this.innerHTML = `
<div class="container" id="catalog">
        <ul class="catalog">
          <li class="catalog__item catalog__item_new">
            <h3 class="catalog-item__title">Материалы</h3>
            <a href="/" class="btn">На любой вкус</a>
          </li>
          <li class="catalog__item">
            <h3 class="catalog-item__title">Инструмент</h3>
            <a href="/" class="btn">На все случаи</a>
          </li>
          <li class="catalog__item">
            <h3 class="catalog-item__title">Техника</h3>
            <a href="/" class="btn">Для стройки</a>
          </li>
          <li class="slider">
            <ul class="slider__controls">
              <li>
                <input
                  type="radio"
                  id="first"
                  name="catalog__slider"
                  value="first"
                  aria-label="Дрели"
                  checked
                />
                <label class="control" for="first"></label>
              </li>
              <li>
                <input
                  type="radio"
                  id="second"
                  name="catalog__slider"
                  value="second"
                  aria-label="Шуруповерты"
                />
                <label class="control" for="second"></label>
              </li>
              <li>
                <input
                  type="radio"
                  id="third"
                  name="catalog__slider"
                  value="third"
                  aria-label="Перфораторы"
                />
                <label class="control" for="third"></label>
              </li>
            </ul>
            <ul>
              <li class="selected slide" data-id="first">
                <header class="slide__header">
                  <h3 class="slide__title">Дрели</h3>
                  <p class="slide__addition">Соседям на радость!</p>
                </header>
                <a href="/" class="btn btn_red btn_slide">Открыть каталог</a>
              </li>
              <li class="slide" data-id="second">
                <header class="slide__header">
                  <h3 class="slide__title">Шуруповерты</h3>
                  <p class="slide__addition">Соседям на радость!</p>
                </header>
                <a href="/" class="btn btn_red btn_slide">Открыть каталог</a>
              </li>
              <li class="slide" data-id="third">
                <header class="slide__header">
                  <h3 class="slide__title">Перфораторы</h3>
                  <p class="slide__addition">Соседям на радость!</p>
                </header>
                <a href="/" class="btn btn_red btn_slide">Открыть каталог</a>
              </li>
            </ul>
          </li>
          <li class="catalog__item">
            <h3 class="catalog-item__title">Скидки 50%</h3>
            <a href="/" class="btn">На 350 товаров</a>
          </li>
          <li class="catalog__item">
            <h3 class="catalog-item__title">Доставка</h3>
            <a href="/" class="btn">Бесплатно</a>
          </li>
        </ul>
      </div>
`;
  }
}
