import { BasePage } from "./base.page";
import { step } from "allure-js-commons"

class ProductPage extends BasePage {
   constructor(page) {
      super(page);
      this.currencySelector = this.page.locator('#ec_currency_conversion');
      this.signInButton = this.page.getByRole('button', { name: "SIGN IN" });
      this.submitReplyButton = this.page.locator("input[value = 'Post Comment']");
   }

   async postComment() {
      await step("Кликаем на кнопку 'Post Comment'", async () => {
         await this.submitReplyButton.click();
      });
   }

   async signIn() {
      await step("Кликаем на кнопку 'Sign in'", async () => {
         await this.signInButton.click();
      });
   }

   async changeCurrency() {
      await step("Выбираем валюту EUR", async () => {
         await this.currencySelector.click();
         await this.currencySelector.selectOption('EUR');
      });
   }

}

export { ProductPage }