// describe("interaction with web element", () => {
//   it("enter value in a text inputfield", async () => {
//     await browser.url("https://amazon.com");
//     const searchArea = await $("#twotabsearchtextbox");
//     browser.pause(3500);
//     await searchArea.setValue("Green Protein");
//   });
//   it("get text value from a label", async () => {
//     await browser.url("https://amazon.com");
//     const labelChosen = await $("span.a-size-base.a-color-base");
//     let textInside = await labelChosen.getText();
//     console.log(textInside);
//   });
//   it("click", async () => {
//     await browser.url("https://amazon.com");
//     const searchBtn = $("#nav-search-submit-button");
//     searchBtn.click();
//   });
// });
