console.log("background running");
chrome.browserAction.onClicked.addListener(setup);
function setup() {
    noCanvas();
    let secondInput = select('#checkid')
    console.log('fuq');
    secondInput.input(sendText);
    function sendText() {
        //Value got from input field in popup
        let message = secondInput.value();
        //Sending message to content
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, $('#' + 'checkid').is(":checked"));
        });
    }

}