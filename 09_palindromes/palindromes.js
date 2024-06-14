const palindromes = function (str) {
	let reversedString = str.split("").reverse("").join("");

	if (reversedString === str) {
		return true;
	}
	else {
		return false;
	}

};

// Do not edit below this line
module.exports = palindromes;
