import image0 from './assets/bosch.png';
import image1 from './assets/Makita.png';
import image2 from './assets/DeWALT.png';
import image3 from './assets/Интерскол.png';
import image4 from './assets/Hitachi.png';
import image5 from './assets/LG.png';
import image6 from './assets/AEG.png';
import image7 from './assets/Metabo.png';

export default class Manufacturers extends HTMLElement {
  connectedCallback() {
    if (!this.childElementCount) this.render();
  }

  render() {
    this.innerHTML = `
<section class="container" id="manufacturers">
        <div class="chapter-title">
          <h2>популярные производители</h2>
          <a href="/" class="btn btn_red chapter-title__btn"
            >Все популярные производители</a
          >
        </div>
        <ul class="manufacturers__list">
          <li>
            <a href="/" class="manufacturers__item"
              ><img
                src="${image0}"
                alt="bosch"
            /></a>
          </li>
          <li>
            <a href="/" class="manufacturers__item"
              ><img
                src="${image1}"
                alt="Makita"
            /></a>
          </li>
          <li>
            <a href="/" class="manufacturers__item"
              ><img
                src="${image2}"
                alt="DeWALT"
            /></a>
          </li>
          <li>
            <a href="/" class="manufacturers__item"
              ><img
                src="${image3}"
                alt="Интерскол"
            /></a>
          </li>
          <li>
            <a href="/" class="manufacturers__item"
              ><img
                src="${image4}"
                alt="Hitachi"
            /></a>
          </li>
          <li>
            <a href="/" class="manufacturers__item"
              ><img src="${image5}" alt="LG"
            /></a>
          </li>
          <li>
            <a href="/" class="manufacturers__item"
              ><img src="${image6}" alt="AEG"
            /></a>
          </li>
          <li>
            <a href="/" class="manufacturers__item"
              ><img
                src="${image7}"
                alt="Metabo"
            /></a>
          </li>
        </ul>
      </section>
`;
  }
}
