let emoji=document.querySelector('.emoji');
let content=document.querySelector('.content');
let btn=document.querySelector('.get-joke');

let url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

//let url="https://hindi-jokes-api.onrender.com/jokes?api_key=fc661d46499b01610686230b9c8a";

async function getJoke(){
    content.classList.remove('content-fade');
    let mydata=await fetch(url);
    let jsonData=await mydata.json();
    content.textContent=`${jsonData.joke}`;
    console.log(jsonData);
    content.classList.add('content-fade');
}



let rotate=function(){
    emoji.classList.add('rotation');
}

