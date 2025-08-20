import { test, expect } from '@playwright/test';

const updatedPayload = {
  firstname: "Jane",
  lastname: "Doe",
  totalprice: 150,
  depositpaid: false,
  bookingdates: {
    checkin: "2023-02-01",
    checkout: "2023-02-10"
  },
  additionalneeds: "Lunch"
};

test('PUT update booking', async ({ request }) => {
  const response = await request.put('https://restful-booker.herokuapp.com/booking/412', {
    headers: {
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: updatedPayload
  });
  expect(response.status()).toBe(200);
  const data = await response.json();
  console.log(data);
  expect(data.firstname).toBe("Jane");
});
