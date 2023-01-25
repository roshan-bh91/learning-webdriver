const { $ } = require("webdriverio/build/commands/browser");

class BlazePage {
  get parent() {
    return $(`//*[@id="block-mainnavigationmegamenu"]/ul`);
  }
  get childElements() {
    return this.parent.$$("");
  }
}
