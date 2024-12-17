import { step } from "allure-js-commons"
const { expect } = require('@playwright/test');

class BasePage {
   constructor(page) {
      this.page = page;
      this.errorMessage = this.page.locator('.academy-popup-bug-subtitle');
      this.acceptCookieButton = this.page.getByRole('button', { name: 'Functional only' });
   }

   async open(url) {
      await step(`Переходим на страницу ${url}`, async () => {
         await this.page.goto(url);
      });
   }

   async waitPageLoaded(locator) {
      await step(`Ждём пока локатор ${locator} будет видимым`, async () => {
         await expect(locator).toBeVisible();
      });
   }

   async waitErrorPopup() {
      await this.waitPageLoaded(this.errorMessage);
   }

   async acceptCookies() {
      await step(`Принимаем cookies`, async () => {
         await this.acceptCookieButton.click();
      });

   }

   async getElementText(locator) {
      let text;
      await step(`Получаем текст локатора ${locator}`, async () => {
         text = await locator.textContent();
      });
      return text;
   }

   async getErrorText() {
      let errorText;
      await step(`Получаем текст ошибки`, async () => {
         errorText = await this.errorMessage.textContent();
      });
      return errorText;
   }
}
export { BasePage }