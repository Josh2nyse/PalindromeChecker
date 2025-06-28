const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input")
const result = document.getElementById("result");
const geneBtn = document.getElementById("generate-Btn");


const palindromeList = [
	"A man a plan a canal Panama",
	"No lemon no melon",
	"Was it a car or a cat i saw",
	"Able was i are i saw elba",
	"Race car",

];
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
		result.innerText = `${inputValue} is not a palindrome`;
	}
	return;
});

geneBtn.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * palindromeList.length);
	const randomPalindome = palindromeList[randomIndex];
	result.innerText = `Suggested Palindrome: "${randomPalindome}"`;
});




