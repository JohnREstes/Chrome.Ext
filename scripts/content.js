
function findJobs(){
    const jobNumbers = document.querySelectorAll('[title^="JN"]');
    const rowNumbers = document.querySelectorAll('[data-aura-rendered-by="1143:0"]')
    
    // `document.querySelector` may return null if the selector doesn't match anything.
    if (jobNumbers) {
        console.log(jobNumbers.length + " jobs")
        jobNumbers.forEach(function(jobNumber){
            console.log(jobNumber)
        })
    }   
    if (rowNumbers) {
        console.log(rowNumbers.length + " jobs")
        rowNumbers.forEach(function(rowNumber){
            console.log(rowNumber)
        })
    }     
}

const init = function(){
    const injectedEle = document.createElement('div');
    injectedEle.innerHTML = "Hello World"
    document.body.appendChild(injectedEle)
}
init();
setTimeout(findJobs, 5000)


// /* <span class="slds-truncate uiOutputText" data-aura-rendered-by="1287:0" data-aura-class="uiOutputText" title="JN -072023-115483">JN -072023-115483</span> */
{/* <span class="slds-row-number slds-text-body--small slds-text-color--weak" data-aura-rendered-by="1143:0"></span> */}