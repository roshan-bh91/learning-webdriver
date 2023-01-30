
class InternetPage {
  get checkboxHeadline() {
    return $(`//*[@id="content"]/div/h3`);
  }
  getSpecificLinkElement(indexProvided) {
    return $(`//*[@id="content"]/ul/li[${indexProvided}]/a`);
  }
  clickOnSpecificElement(indexProvided) {
    this.getSpecificLinkElement(indexProvided).waitForDisplayed();
    this.getSpecificLinkElement(indexProvided).click();
  }

  getSpecificCheckboxElement(indexProvided) {
    return $(`//*[@id="checkboxes"]/input[${indexProvided}]`);
  }
  clickOnCheckbox(indexProvided) {
    this.getSpecificCheckboxElement(indexProvided).waitForDisplayed();
    this.getSpecificCheckboxElement(indexProvided).click();
  }
}
module.exports = new InternetPage();
