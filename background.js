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
            if (file[1].indexOf("pdf") != -1 || file[1].indexOf("PDF") != -1){
                file[0] += ".pdf";
                browser.downloads.download({
                    url: file[0],
                    saveAs: true
                });
            } else {
                browser.downloads.download({
                    url: file[0],
                    filename: file[1],
                    saveAs: true
                })
            }
        }
    }
);