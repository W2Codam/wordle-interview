import { words } from "./words";

// NOTE: Hardcoded answer for demonstration.
const answer = "codam";

/**
 * Validates that the guess matches the answer.
 * Logs the result onto the console.
 * 
 * @param {string} guess The guessed input value.
 */
export const validateGuess = (guess) => {
	console.clear();

	if (guess === undefined || guess.length !== 5) {
		console.log("Your guess needs to be 5 characters long.");
		return;
	}
	if (guess === answer) {
		console.log("Congrats! You guessed the word 🎉");
		return;
	}
	if (!words.includes(guess)) {
		console.log("Your guess is not in the list of words.");
		return;
	}

	let message = "";
	for (let i = 0; i < 5; i++) {
		const char = guess[i];

		if (!answer.includes(char))
			message += `[${char}] is not in the word.\n`;
		else if (char === answer[i])
			message += `[${char}] is in the correct spot!\n`;
		else
			message += `[${char}] is in the word, but not on the correct spot.\n`;
	}
	console.log(message);
};
