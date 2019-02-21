var pikachu=new Audio("sounds/pikachu.mp3");
var bulbasaur=new Audio("sounds/balbasaur.mp3");
var charmender=new Audio("sounds/charmender.mp3");
var snorlax=new Audio("sounds/snorlax.mp3");
var ditto=new Audio("sounds/ditto.mp3");
var squiretle=new Audio("sounds/squiretle.mp3");
var geodude=new Audio("sounds/geodude.mp3");
var growlith=new Audio("sounds/growlith.mp3");
var pidgey=new Audio("sounds/pidgey.mp3");

var inputstring;
names=["pikachu","bulbasaur","charmender","snorlax","ditto","squiretle","geodude","growlith","pidgey"];

function getdata()
{
    inputstring=document.getElementById("inputform").value;
    searchdata();
}
function searchdata()
{
    inputstring=inputstring.toLowerCase(); //turning the query string to all lowercase
    var status=0; //flag , checks if some string is found or not
    for(i=0;i<names.length;i++) //searching for the query string
    {
        if(inputstring===names[i])
        {    
            status=1; //if found, set status as 1 and get out of the loop
            break;
        }
    }
    if(status==0)
    {
        alert("Not Found");
    }
    else
    {
        if(i==0)
        {
            alert("Play pikachu sound");
            pikachu.play();
            //pikachusound();
        }
        else if(i==1)
        {
            bulbasaursound();
        }
        else if(i==2)
        {
            charmendersound();
        }
        else if(i==3)
        {
            snorlaxsound();
        }
        else if(i==4)
        {
            dittosound();
        }
        else if(i==5)
        {
            squiretlesound();
        }
        else if(i==6)
        {
            geodudesound();
        }
        else if(i==7)
        {
            growlithsound();
        }
        else if(i==8)
        {
            pidgeysound();
        }
    }
}
function pikachusound()
{
    pikachu.play();
}
function bulbasaursound()
{
    bulbasaur.play();
}
function charmendersound()
{
    charmender.play();
}
function snorlaxsound()
{
    snorlax.play();
}
function dittosound()
{
    ditto.play();
}
function squiretlesound()
{
    squiretle.play();
}
function geodudesound()
{
    geodude.play();
}
function growlithsound()
{
    growlith.play();
}
function pidgeysound()
{
    pidgey.play();
}