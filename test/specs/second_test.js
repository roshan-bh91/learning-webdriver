describe("Here is the another test", () => {
  it("Getting name of a Green Protein Product", async () => {
    await browser.url("https://greenprotein.co.in/products/multi-pack-of-30");
    const productName = await $("h1.product-meta__title").getText();
    console.log(productName);
  });
});
