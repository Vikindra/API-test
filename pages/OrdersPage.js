export class OrdersPage {
    constructor(page) {
      this.page = page;
      this.ordersButton = page.locator("button[routerlink*='myorders']");
      this.orderRows = page.locator("tbody tr");
      this.orderDetails = page.locator(".col-text");
    }
  
    async navigate() {
      await this.page.goto("https://rahulshettyacademy.com/client/");
    }
  
    async openOrders() {
      await this.ordersButton.click();
      await this.page.locator("tbody").waitFor();
    }
  
    async viewOrder(orderId) {
      const rows = await this.orderRows;
      for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderID = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderID)) {
          await rows.nth(i).locator("button").first().click();
          break;
        }
      }
    }
  
    async getOrderDetails() {
      return await this.orderDetails.textContent();
    }
  }
  