export default class Services extends HTMLElement {
  private controller: AbortController | null = null;

  connectedCallback() {
    if (!this.childElementCount) this.render();
    this.controller?.abort();
    this.controller = new AbortController();
    const options = { signal: this.controller.signal };

    const inputs = this.querySelectorAll<HTMLInputElement>(
      'input[name="services"]'
    );
    const descriptions = this.querySelectorAll<HTMLElement>('.description');
    const selectService = (input: HTMLInputElement) => {
      descriptions.forEach((description) => {
        const selected = description.dataset.id === input.value;
        description.classList.toggle('selected', selected);
        description.setAttribute('aria-hidden', String(!selected));
      });
    };
    inputs.forEach((input) => {
      if (input.checked) selectService(input);
      input.addEventListener('change', () => selectService(input), options);
    });
  }

  disconnectedCallback() {
    this.controller?.abort();
    this.controller = null;
  }

  render() {
    this.innerHTML = `
<section class="services" id="services">
        <div class="container">
          <h2>Сервисы</h2>
          <p class="text_regular">
            Хороший интернет-магазин отличается от плохого не только ценами!
            <br />
            Мы стараемся изо всех сил, чтобы сделать ваши покупки приятными.
          </p>
          <div class="services__content">
            <ul class="services__controls">
              <li>
                <input
                  type="radio"
                  id="delivery"
                  name="services"
                  value="delivery"
                  checked
                />
                <label for="delivery">Доставка</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="warranty"
                  name="services"
                  value="warranty"
                />
                <label for="warranty">Гарантия</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="credit"
                  name="services"
                  value="credit"
                />
                <label for="credit">Кредит</label>
              </li>
            </ul>
            <div
              class="selected description description_delivery"
              data-id="delivery"
            >
              <h2>Доставка</h2>
              <p class="text_regular">
                Мы с удовольствием доставим ваш товар прямо к вашему подъезду
                совершенно бесплатно! Ведь мы неплохо заработаем, поднимая его
                на ваш этаж!
              </p>
            </div>
            <div class="description description_warranty" data-id="warranty">
              <h2>Гарантия</h2>
              <p class="text_regular">
                Если купленный у нас товар поломается или заискрит, а также в
                случае пожара, спровоцированного его возгаранием, вы всегда
                можете быть уверены в нашей гарантии. Мы обменяем сгоревший
                товар на новый. Дом уж восстановите как-нибудь сами.
              </p>
            </div>
            <div class="description description_credit" data-id="credit">
              <h2>Кредит</h2>
              <p class="text_regular">
                Залезть в долговую яму стало проще! Кредитные консультанты
                придут вам на помощь.
              </p>
              <button class="btn btn_red btn_in-credit">
                Отправить заявку
              </button>
            </div>
          </div>
        </div>
      </section>
`;
  }
}
