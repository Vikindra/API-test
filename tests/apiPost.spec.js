import { test, expect } from '@playwright/test';

const bookingPayload = {
  firstname: "John",
  lastname: "Doe",
  totalprice: 123,
  depositpaid: true,
  bookingdates: {
    checkin: "2023-01-01",
    checkout: "2023-01-10"
  },
  additionalneeds: "Breakfast"
};

test('POST create new booking', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/booking/', {
    headers: {
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
      'Content-Type': 'application/json'
    },
    data: bookingPayload
  });
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
  expect(data).toHaveProperty('bookingid');
});
