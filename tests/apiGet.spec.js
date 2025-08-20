import { test, expect } from '@playwright/test';

test('GET booking by ID', async ({ request }) => {
  const response = await request.get('https://restful-booker.herokuapp.com/booking/412')
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  console.log(data);
  expect(data).toHaveProperty('firstname');
});
