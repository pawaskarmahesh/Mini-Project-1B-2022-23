const lagnan = document.getElementById("lagnanpa");
const result = document.getElementById("Report");
function career()
{
var lagnalord ;
var houselo = lagnan.value + 10;
var houselord = houselo.value - 13;
if (houselord <= 0 )
    {
        houselord = 12 + houselord; 
    }
var lord ;

    if(lagnan.value == "1"|| lagnan.value == "8")
    {
        lagnalord = "Mars";  
        result.innerText = lagnalord 
        
    }
    else if(lagnan.value == "2"||lagnan.value =="7")
    {
        lagnalord = "Venus";  
        result.innerText = lagnalord 
    }
    else if(lagnan.value == "3"||lagnan.value =="6")
    {
        lagnalord = "Mercury";  
        result.innerText = lagnalord
    }
    else if(lagnan.value == "4")
    {
        lagnalord = "Moon";  
        result.innerText = lagnalord
    }
    else if(lagnan.value == "5")
    {
        lagnalord = "Sun";  
        result.innerText = lagnalord
    }
    else if(lagnan.value == "9"||lagnan.value =="12")
    {
        lagnalord = "Jupiter";  
        result.innerText = lagnalord
    }
    else if(lagnan.value == "10"||lagnan.value =="11")
    {
        lagnalord = "Venus";  
        result.innerText = lagnalord + houselord
    }


}


//second 


const lagnan = document.getElementById("lagnanpa");
const result = document.getElementById("Report");
function career()
{

    if(lagnan.value == "4"|| lagnan.value == "11")
    {
        lord = "Mars"; 
        result.innerText = lord
    }
    else if(lagnan.value == "5"||lagnan.value =="10")
    {
        lord = "Venus";  
        result.innerText = lord
    }
    else if(lagnan.value == "6"||lagnan.value =="9")
    {
        lord = "Mercury";  
        result.innerText = lord
    }
    else if(lagnan.value == "7")
    {
        lord = "Moon"; 
        result.innerText = lord 
    }
    else if(lagnan.value == "8")
    {
        lord = "Sun";  
        result.innerText = lord
    }
    else if(lagnan.value == "12"||lagnan.value =="3")
    {
        lord = "Jupiter";  
        result.innerText = lord
    }
    else if(lagnan.value == "1"||lagnan.value =="2")
    {
        lord = "Saturn";  
        result.innerText = lord
    }

    if (result.innerText == "Venus")
    {
        var placementplanet = document.getElementById("Venusnum");
        result.innerText = placementplanet.innerText


    }
}



