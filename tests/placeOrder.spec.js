import { test, expect, request } from '@playwright/test';
import { ApiUtils } from '../utils/ApiUtils.js';
import { OrdersPage } from '../pages/OrdersPage.js';

const loginPayload = {
  userEmail: "vicky27@gmail.com",
  userPassword: "water"
};

const orderPayload = {
  orders: [{ country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8" }]
};

let response;
let apiContext;

test.beforeAll(async () => {
  apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);
});

test('place the order', async ({ page }) => {
  await page.addInitScript(token => {
    window.localStorage.setItem('token', token);
  }, response.token);

  const ordersPage = new OrdersPage(page);
  await ordersPage.navigate();
  await ordersPage.openOrders();
  await ordersPage.viewOrder(response.orderId);

  const orderIdDetails = await ordersPage.getOrderDetails();
  expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});
