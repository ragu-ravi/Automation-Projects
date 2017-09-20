let app = require('../viewports')[process.env.VIEWPORT]

describe('Feature: Search', () => {
  context('Anonyomus search for a product', () => {
    const query = 'apples';

    before(() => {
      app.home_page.open();
      app.home_page.performSearch(query);
    });

    it('search heading should include search term', () => {
      expect(app.search_page.get_search_heading()).to.include(query);
    });

    it('product list should not be empty', () => {
      expect(app.search_page.get_product_lists()).to.not.have.lengthOf(0);
      console.log("title of first product :",app.search_page.product.title.getText());
      console.log("title of product 2 is :",app.search_page.products[2].title.getText());
      expect(app.search_page.products[0].title).to.not.eql('hi');
    });
  });
});
