import 'normalize.css';
import './style.scss';
import './lib/logo/logo.scss';
import './lib/chapter-title/chapter-title.scss';
import './modules/header/header.scss';
import './modules/catalog/catalog.scss';
import './modules/products/products.scss';
import './modules/manufacturers/manufacturers.scss';
import './modules/services/services.scss';
import './modules/contacts/contacts.scss';
import './modules/footer/footer.scss';

import Header from './modules/header/header';
import Catalog from './modules/catalog/catalog';
import Products from './modules/products/products';
import Manufacturers from './modules/manufacturers/manufacturers';
import Services from './modules/services/services';
import Contacts from './modules/contacts/contacts';
import Footer from './modules/footer/footer';

customElements.define('header-custom', Header);
customElements.define('catalog-custom', Catalog);
customElements.define('products-custom', Products);
customElements.define('manufacturers-custom', Manufacturers);
customElements.define('services-custom', Services);
customElements.define('contacts-custom', Contacts);
customElements.define('footer-custom', Footer);
