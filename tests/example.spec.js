//@ts-check
import { step } from "allure-js-commons"
import { test, expect } from '@playwright/test'
import { App, ProductPage } from '../src/pages/index.js'

test.describe('Академия багов', async () => {
  let app, errorText, expectErrorText;

  test.beforeEach('Переходим на страницу Академии багов', async ({ page }) => {
    app = new App(page);
    await app.basePage.open('.');
    await app.basePage.acceptCookies();
  });

  test.afterEach('Проводим проверки', async ({ page }) => {

    await app.mainPage.waitErrorPopup();
    errorText = await app.mainPage.getErrorText();

    await step('Проверяем текст ошибки', async => {
      expect(errorText).toEqual(expectErrorText);
    });
  })

  test("Страница перестаёт отвечать при клике на количество результатов", async ({ page }) => {
    expectErrorText = 'In this bug, the page becomes unresponsive when clicking on the numbers of results.';

    await app.mainPage.showCertainNumberOfResults();
  });

  test("Изображение отображается не полностью", async ({ page }) => {
    expectErrorText = 'In this bug, the image is not completely displayed.';
    await app.mainPage.clickBugProductImage();
  });

  test("Страница зависает при смене валюты", async ({ page }) => {
    expectErrorText = 'In this bug, the page freezes when changing the currency.';

    await app.mainPage.goToProduct();
    await app.productPage.changeCurrency();
  });

  test("Кнопка авторизации перекрывает футер", async ({ page }) => {
    expectErrorText = 'In this bug, the Sign In button overlaps the footer.';

    await app.mainPage.goToProduct();
    await app.productPage.signIn();
  });

  test("Страница зависает при клике на кнопку 'Post Comment'", async ({ page }) => {
    expectErrorText = 'In this bug, the page becomes unresponsive when clicking on the Post Comment button.';

    await app.mainPage.goToProduct();
    await app.productPage.postComment();
  });

});


