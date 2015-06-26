

var PhonesPage = function() {
	this.searchBox = element(by.model('query'));
	this.phoneList = element.all(by.repeater('phone in phones'));
};

PhonesPage.prototype.searchPhones = function(keys){
	return this.searchBox.sendKeys(keys);
};

PhonesPage.prototype.phoneListCount = function(){
	return this.phoneList.count();
}


module.exports = PhonesPage;