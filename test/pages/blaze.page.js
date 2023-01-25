class BlazePage {
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

  get FooterSubListElementsText() {
    return this.FooterSubListElements.map(async (everyEl) => {
      const textToBePrinted = await everyEl.getText();
      console.log(textToBePrinted);
    });
  }
}

module.exports = new BlazePage();
