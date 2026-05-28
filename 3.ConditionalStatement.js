//a 

function launchBrowser(browsername)
{
if(browsername=="chrome")
{
    console.log("browser is chrome")
    
} else 
{
    console.log("Other Browsers ")
}

}

launchBrowser("chrome")

//b

function runTests(test){
switch(test)
{

case "smoke":
console.log("Smoke testing")
break
case "sanity":
console.log("Sanity testing")
break
case "regression":
console.log("Regression testing")
break

default :
{
}console.log("Default testing")
break
}
}
 runTests("sanity")

