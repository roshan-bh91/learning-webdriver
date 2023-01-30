class BlazePage {
  get MainHeadline() {
    return $(`//*[@id="paragraph-2"]/div/div/div/div/div[1]/h1`);
  }

  get testingBtn() {
    return $(`//*[@id="paragraph-540"]/div/div/div/div/div[1]/div/div`);
  }

  get BlogLink() {
    return $(`//*[@id="block-mainnavigationmegamenu"]/ul/li[4]/a`);
  }
  get toggleNavBtn() {
    return $(`//*[@id="mm-toggle"]`);
  }

  clickOnBlogLink() {
    console.log(this.BlogLink.isDisplayed());
    if (this.BlogLink.isDisplayed()) {
      this.BlogLink.click();
    }
    // else {
    //   this.toggleNavBtn.click();
    //   this.BlogLink.click();
    // }
  }

  get parent() {
    return $(`//*[@id="block-mainnavigationmegamenu"]/ul`);
  }
  get childElements() {
    return this.parent.$$("li");
  }
  get getTextForLi() {
    return this.childElements
      .filter(async (everyEl) => {
        const requiredParagraph = await everyEl.$("a").getText();
        return requiredParagraph !== "";
      })
      .map(async (everyEl) => {
        const requiredParagraph = await everyEl.$("a").getText();
        console.log(requiredParagraph);
      });
  }

  get FooterSubListElements() {
    return $$(`//*[@id="block-blazemeter-footer"]/ul/li[1]/ul/li`);
  }

  get FooterParent() {
    return $(`//*[@id="block-blazemeter-footer"]/ul/li[1]/ul`);
  }

  get FooterSubListElementsText() {
    return this.FooterSubListElements.map(async (everyEl) => {
      const textToBePrinted = await everyEl.getText();
      console.log(textToBePrinted);
    });
  }

  FooterSpecificListElement(indexProvided) {
    return this.FooterParent.$(`li:nth-child(${indexProvided})`);
  }

  FooterSpecificListElementText(indexProvided) {
    return this.FooterSpecificListElement(indexProvided).getText();
  }
}

module.exports = new BlazePage();
