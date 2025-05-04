const { chromium } = require('playwright');

async function createOutlookAccount() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://signup.live.com/signup');

  const username = `testuser${Date.now()}`;
  await page.fill('input[name="MemberName"]', `${username}@outlook.com`);
  await page.click('text=Next');

  await page.fill('input[name="Password"]', 'YourPassword123!');
  await page.click('text=Next');

  await page.fill('input[name="FirstName"]', 'John');
  await page.fill('input[name="LastName"]', 'Doe');
  await page.click('text=Next');

  // CAPTCHA and further verification steps would go here

  await browser.close();

  return {
    email: `${username}@outlook.com`,
    password: 'YourPassword123!'
  };
}

module.exports = { createOutlookAccount };
