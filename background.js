
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    //       chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.executeScript(
    //       tabs[0].id,
    //       // {code: 'document.body.style.backgroundColor = "' + color + '";'});
    //       {code: 'document.querySelector("#logo > img").src = "https://www.baidu.com/img/baidu_resultlogo@2.png";'});
    // });
    // }
    // kkk();
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.google.com'},
        }),new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'www.google.de'},
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'google.com'},
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'google.de'},
        })
        ],
            actions: [new chrome.declarativeContent.RequestContentScript({js: ["autoBaidu.js"]}),new chrome.declarativeContent.ShowPageAction() ]
            // actions: []
      }]);
    });
  });