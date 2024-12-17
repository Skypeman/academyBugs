import { BasePage } from "./base.page.js";
import { step } from "allure-js-commons"

class MainPage extends BasePage {
   constructor(page) {
      super(page);
      this.numberOfResultsButton = this.page.getByRole('link', { name: '50' });
      this.darkGreyJeansCard = this.page.locator('h3.ec_product_title_type1 a.ec_image_link_cover').filter({ hasText: "Dark Grey Jeans" });
      this.bugCard = this.page.locator('#ec_product_image_effect_4281370');
   }

   async showCertainNumberOfResults() {
      await step("Выбраем количество выводимых карточек", async () => {
         await this.numberOfResultsButton.click();
      });
   }

   async goToProduct() {
      await step("Переходим на детальную продукта", async () => {
         await this.darkGreyJeansCard.click();
      });
   }

   async clickBugProductImage() {
      await step("Кликаем на проблемное изображение", async () => {
         await this.bugCard.click();
      });
   }
}

export { MainPage }