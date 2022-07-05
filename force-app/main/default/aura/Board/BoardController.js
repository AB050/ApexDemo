({
    doInit: function (component, event, helper) {
        console.log("Initialiation completed");
        const gameMode = component.get("v.mode");
        let column = 0;
    // get number of columns based on game mode
    // double equals "1" == 1
    // triple equals 1 === 1
    if (gameMode && gameMode === "hard") {
        column = 6;
    } else if (gameMode === "medium") {
        column = 4;
    } else {
        column = 3;
    }
        // get block width/size
        let blockSize = 12 / column;
        component.set("v.blockSize", blockSize);
        // build a list of 100 words
        const words = helper.getWords(column * column);
        component.set("v.words", words);
        console.log("Words: " + words);
        // get win word
        const winWord = helper.getWinWord(words);
        component.set("v.winWord", winWord);
        console.log("Win word: " + helper.getWinWord(words));
    },

    doRender: function (component, event, helper) {
        console.log("Render completed");
    },
    blockClickHandler: function (component,event,helper){
    // click count
    let clickCount = component.get("v.clickCount") +1;
    //get event value 
    const value = event.getParam("value");

    if(value===component.get("v.winWord")){
    //user has won
    component.set("v.result","YOU WIN")
    console.log("YOU WIN")
    }
    else if(clickCount===3) {
        //user loose
        component.set("v.result","YOU LOOSE")
        console.log("YOU LOOSE")
    }
    // set Click Count
    component.set("v.clickCount",clickCount);
    
    }
});
