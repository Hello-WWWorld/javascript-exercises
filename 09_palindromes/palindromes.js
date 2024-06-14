const palindromes = function (str) {
	let cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
	let reversedString = cleaned.split("").reverse("").join("");

	if (reversedString === cleaned) {
		return true;
	}
	else {
		return false;
	}

};

// Do not edit below this line
module.exports = palindromes;
