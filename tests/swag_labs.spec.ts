import { test, expect } from "./fixtures";

var valid_user: string = "standard_user";
var invalid_user: string = "locked_out_user";
var password: string = "secret_sauce";

test('go to checkout', async ({ page, loginPage }) => {
  //login
  await loginPage.goToPage();
  await loginPage.login(valid_user, password);
  await expect(page.locator('[data-test="title"]')).toContainText('Products');

  //add product to cart
  await expect(page.locator('[data-test="item-4-title-link"] [data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  //open cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Backpack');

  //go to checkout
  await page.locator('[data-test="checkout"]').click();
  await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Your Information');
});

test('blocked user', async ({ page, loginPage }) => {
  await loginPage.goToPage();
  await loginPage.login(invalid_user, password);
  await expect(page.locator('[data-test="error"]')).toContainText('Epic abc sadface: Sorry, this user has been locked out.');
});
