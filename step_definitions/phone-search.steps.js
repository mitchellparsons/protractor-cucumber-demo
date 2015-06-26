// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

    this.Given(/^I am on the phonecat page$/, function(next) {
        browser.get('http://angular.github.io/angular-phonecat/step-12/app/#/phones');
        next();
    });

    this.When(/^I search for a phone$/, function(next) {
        element(by.model('query')).sendKeys('test');
        next();
    });

    this.Then(/^I should a filtered phone list$/, function(next) {
        // element.all is used for finding arrays
        expect(
                element.all(by.repeater('phone in phones')).count()
            ).to.eventually.equal(1)
            .and.notify(next);
    });

};
