({
    doInit : function(component, event, helper) {
         console.log("Initlization Completed");
         // build list of 100 word
         console.log("words" + helper.getWords(6));
    },


    doRander : function(component, event, helper) {
        console.log("Render Completed");
   },
})
