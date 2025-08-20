import { test, expect } from '@playwright/test';

test('PATCH partial update booking', async ({ request }) => {
  const response = await request.patch('https://restful-booker.herokuapp.com/booking/412', {
    headers: {
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    data: {
      lastname: "Smith"
    }
  });
  
  const data = await response.json();
  console.log(data);
  expect(data.lastname).toBe("Smith");
});
