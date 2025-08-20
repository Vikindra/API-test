import { test, expect } from '@playwright/test';

test('DELETE booking', async ({ request }) => {
  const response = await request.delete('https://restful-booker.herokuapp.com/booking/412', {
    headers: {
      Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM='
    }
  });
  expect(response.status()).toBe(201); // API returns 201 on successful delete
});
