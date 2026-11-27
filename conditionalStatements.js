function launchBrowser(browserName){
    if (browserName = "chrome"){
        console.log("chrome Browser launched successfully");               
    }
    else{
        console.log("Launching Another browser");  
    }
    }
function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Executing Smoke Testing");
            break;
        case "sanity":
            console.log("Executing Sanity Testing");
            break; 
        case "Regression":
            console.log("Executing Regression Testing");
            break;     
    
        default:
            console.log("Executing Smoke Testing");
            
            break;
    }

}
launchBrowser("chrome")
    runTests("Smoke")
    runTests("Sanity")
    runTests("Regression")
    runTests("Integration")
    