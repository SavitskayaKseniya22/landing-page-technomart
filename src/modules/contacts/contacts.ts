import image0 from './assets/map.png';
import image1 from './assets/cross_out.png';

export default class Contacts extends HTMLElement {
  private controller: AbortController | null = null;
  private activeModal: HTMLDialogElement | null = null;
  private trigger: HTMLElement | null = null;

  connectedCallback() {
    if (!this.childElementCount) this.render();
    this.controller?.abort();
    this.controller = new AbortController();

    const options = { signal: this.controller.signal };
    const map = this.querySelector<HTMLDialogElement>('#map-dialog');
    const feedback = this.querySelector<HTMLDialogElement>('#feedback-dialog');
    this.querySelector('.map')?.addEventListener(
      'click',
      () => this.openModal(map),
      options
    );
    this.querySelector('.btn_in-contacts-details')?.addEventListener(
      'click',
      () => this.openModal(feedback),
      options
    );
    [map, feedback].forEach((modal) => {
      if (!modal) return;
      modal
        .querySelector('.modal__button')
        ?.addEventListener('click', () => modal.close(), options);
      modal.addEventListener(
        'click',
        (event) => {
          if (event.target === modal) modal.close();
        },
        options
      );
      modal.addEventListener(
        'close',
        () => {
          if (modal.open || this.activeModal !== modal) return;
          this.activeModal = null;
          if (this.trigger?.isConnected) this.trigger.focus();
          this.trigger = null;
        },
        options
      );
    });
    feedback?.querySelector('form')?.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        const status = feedback.querySelector('[role="status"]');
        if (status)
          status.textContent =
            'Сообщение не отправлено: это демонстрационная форма.';
      },
      options
    );
  }

  disconnectedCallback() {
    this.activeModal?.close();
    if (this.trigger?.isConnected) this.trigger.focus();
    this.activeModal = null;
    this.trigger = null;
    this.controller?.abort();
    this.controller = null;
  }

  private openModal(modal: HTMLDialogElement | null) {
    if (!modal || this.activeModal?.open) return;
    this.trigger =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    this.activeModal = modal;
    modal.showModal();
  }

  render() {
    this.innerHTML = `
<section class="contacts" id="contacts">
        <div class="container">
          <div class="contacts__delivery-info">
            <h2>Компания «техномарт»</h2>
            <p class="text_regular">
              Настоящий мужской шоппинг начинается здесь! Огромный выбор товаров
              для ремонта и строительства не оставит равнодушными любителей
              сэкономить на гастарбайтерах
            </p>
            <p class="text_regular">
              Мы можем доставить ваш товар в самые отдаленные точки России!
              <br />
              Техномарт работает со многими транспортными компаниями:
            </p>
            <ul class="delivery-info__list">
              <li>Деловые линии</li>
              <li>Автотрейдинг</li>
              <li>ЖелДорЭкспедиция</li>
            </ul>
            <a href="/" class="btn btn_red btn_in-delivery-info"
              >Подробнее о компании</a
            >
          </div>
          <div class="contacts__details">
            <h2>Контакты</h2>
            <p class="text_regular">
              Вы можете забрать товар сами,
              <br />
              заехав в наш офис:
            </p>
            <button type="button" class="map" aria-label="Открыть карту">
              <img
                src="${image0}"
                alt="карта"
                width="300"
                height="160"
              />
            </button>
            <button class="btn btn_red btn_in-contacts-details">
              Заблудились? Напишите нам!
            </button>
          </div>
        </div>
      </section>
<dialog id="map-dialog" class="modal" aria-label="Карта проезда">
      <div class="modal__content modal__content_map">
        <iframe loading="lazy"
          id="map_img_big"
          title="Карта проезда к Техномарту"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6037872533216!2d30.32085871644137!3d59.93871648187625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1612486386835!5m2!1sru!2sru"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        <button type="button" class="modal__button" aria-label="Закрыть окно">
          <img src="${image1}" alt="Крестик" />
        </button>
      </div>
    </dialog>
<dialog id="feedback-dialog" class="modal" aria-label="Обратная связь">
      <div class="modal__content modal__content_contacts-form">
        <form>
          <div class="contacts-form__content">
            <div class="contacts-form__credentials">
              <label>
                Ваше имя:
                <input
                  type="text"
                  name="name"
                  autocomplete="name"
                  required
                  placeholder="Представьтесь, пожалуйста"
                />
              </label>
              <label>
                Ваш e-mail:
                <input
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                  placeholder="Для отправки ответа"
                />
              </label>
            </div>
            <div class="contacts-form__message">
              <label>
                Текст письма:
                <textarea
                  name="letter"
                  required
                  placeholder="В свободной форме"
                ></textarea>
              </label>
            </div>
          </div>
          <footer class="contacts-form__submition">
            <button class="btn btn_red">Отправить</button>
            <p role="status">
              Демонстрационная форма: отправка сообщений не подключена.
            </p>
          </footer>
          <button type="button" class="modal__button" aria-label="Закрыть окно">
            <img
              src="${image1}"
              alt="Крестик"
            />
          </button>
        </form>
      </div>
    </dialog>
`;
  }
}
