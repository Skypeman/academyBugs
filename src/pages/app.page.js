import { BasePage, CartPage, MainPage, ProductPage } from './index'
class App {
   constructor(page) {
      this.page = page;
      this.basePage = new BasePage(page);
      this.mainPage = new MainPage(page);
      this.productPage = new ProductPage(page);
   }
};

export { App };
