const { expect } = require("chai");
const InternetPage = require("../pages/internet.page");
describe("testing elements on internet page", () => {
  it("testing checkboxes", async () => {
    await browser.url("https://the-internet.herokuapp.com/");
    InternetPage.clickOnSpecificElement(6);
    await browser.pause(3000);
    (await InternetPage.checkboxHeadline).waitForDisplayed();
    InternetPage.clickOnCheckbox(1);
    await browser.pause(4000);
    const elementConsidered = await InternetPage.getSpecificCheckboxElement(
      1
    ).isSelected();
    console.log(elementConsidered);
    expect(elementConsidered).to.equal(true);
  });
  it("check page url", async () => {
    await browser.url("/");
    expect(await browser.getUrl()).equals("https://www.betterhalf.ai/");
    expect(await browser.getUrl()).equals(`${browser.options.baseUrl}`);
  });
  it("should check checkbox headline", async () => {
    await browser.url("https://the-internet.herokuapp.com/");
    InternetPage.clickOnSpecificElement(6);
    await InternetPage.checkboxHeadline.waitForDisplayed();
    expect(await InternetPage.checkboxHeadline.getText()).equals("Checkboxes");
  });
});
