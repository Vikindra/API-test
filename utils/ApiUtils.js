export class ApiUtils {
    constructor(apiContext, loginPayload) {
      this.apiContext = apiContext;
      this.loginPayload = loginPayload;
    }
  
    async getToken() {
      const loginResponse = await this.apiContext.post(
        'https://rahulshettyacademy.com/api/ecom/auth/login',
        { data: this.loginPayload }
      );
      const loginResponseJson = await loginResponse.json();
      return loginResponseJson.token;
    }
  
    async createOrder(orderPayload) {
      const token = await this.getToken();
      const orderResponse = await this.apiContext.post(
        'https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
          data: orderPayload,
          headers: {
            authorization: token,
            'Content-Type': 'application/json'
          }
        }
      );
  
      const orderResponseJson = await orderResponse.json();
      return {
        token,
        orderId: orderResponseJson.orders[0]
      };
    }
  }
  