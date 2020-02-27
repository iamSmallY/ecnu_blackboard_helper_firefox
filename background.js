browser.browserAction.onClicked.addListener(
    function (){
        browser.tabs.create({
            url: "https://elearning.ecnu.edu.cn"
        });
    }
);

browser.runtime.onMessage.addListener(
    function (arg, sender, sendResponse) {
        var dllist = arg;
        for (const file of dllist) {
            if (file[0].indexOf("https://elearning.ecnu.edu.cn/") != -1) {
                browser.downloads.download({
                    url: file[0]
                });
            } else {
                browser.downloads.download({
                    url: file[0],
                    filename: file[1],
                    saveAs: true
                });
            }

        }
    }
);