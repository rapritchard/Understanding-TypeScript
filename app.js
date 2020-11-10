var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generatorError(message, code) {
    throw { message: message, errorCode: code };
}
generatorError('An error occured!', 500);
