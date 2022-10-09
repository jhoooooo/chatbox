// Example without any event/function
// ! is not necessary for trigger word but advised to be included.
// trigger word below {example} is tied to custom field key.

const messageBody = obj.detail.body;
let triggerWord = "{trigger_word}";

if (messageBody.includes(triggerWord)) {
    //your function here
}