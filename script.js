//your JS code here. If required.
const input=document.getElementById("text");
const delayTime=document.getElementById("delay");
const submit=document.getElementById("btn");
const div=document.getElementById("output");
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
submit.addEventListener('click', async function(){
	const store=Number(delayTime.value)*1000;
	

await delay(store);
const newline=document.createElement('p')
newline.textContent=input.value;
	
div.appendChild(newline)

});




	