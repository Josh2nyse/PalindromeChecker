const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input")
const result = document.getElementById("result");



function isPalindrome (str) {
	const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
	const reversedStr = cleanedStr.split("").reverse().join("");
	return cleanedStr === reversedStr;
}

checkBtn.addEventListener("click", () => {
	
	const inputValue = textInput.value;
	
	if (inputValue === "") {
		alert("Please you must add a value");
		return;
	}

	if (isPalindrome(inputValue)) {
		result.innerText = `${inputValue} is a palindrome`;
	}
	else {
		result.innerText = `${inputValue} is a palindrome`;
	}

});