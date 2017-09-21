function makeTitle(str) {
	if(typeof str !== "string") {
		throw TypeError('expects a string');
	} else {
		return str
		.split(' ')
		.map(function(word) {
			return word[0].toUpperCase() + word.substr(1);
		})
		.join(' ');
	}
}


module.exports = makeTitle;
