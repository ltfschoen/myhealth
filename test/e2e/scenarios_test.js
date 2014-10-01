describe('IonicHealth App', function() {
  describe('Map view', function() {
    beforeEach(function() {
      // match the address that opens with command 'grunt server'
      browser.get('/'); // opens /app/index.html (root)
    });
    // verify search box and repeater are correctly wired together
    it('should display correct heading', function() {
      expect(element.all(by.css('h1')).first().getText()).toMatch(/Map/);
    });
  });
});