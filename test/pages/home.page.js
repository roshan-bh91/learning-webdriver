class Homepage{
  get PageHeader() {
    return $(`h1.h0-80`);
  }
  get subHeading() {
    return $(`div.banner-text-content>p.sub-text`);
  }
  get supportLink() {
    return $(`//*[@id="freeTrials"]`);
  }
}

module.exports = new Homepage();
