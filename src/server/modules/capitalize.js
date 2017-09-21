function makeTitle(str) {
	if(typeof str == "string") {
		return str
		.split(' ')
		.map(function(word) {
			return word[0].toUpperCase() + word.substr(1);
		})
		.join(' ');
	} else {
		throw TypeError('expects a string');
	}
}


module.exports = makeTitle;
