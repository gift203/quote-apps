// selection
const jokeContent = document.getElementById('joke-Content');
const jokeHead = document.querySelector('h1');
const newJoke = document.querySelector('.newbtn');
const audio = document.getElementById('1');
const copy = document.getElementById('2');
const send = document.getElementById('3');
const jokeAuthor = document.getElementById('author');
// selection end--


// api https://api.blablagues.net/?rub=blagues;
function jokeGenerator () {
    fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {  
    console.log(data)
        jokeContent.textContent = data.content;
        jokeAuthor.textContent = data.author;

        audio.addEventListener('click', () => {
            const utterance = new SpeechSynthesisUtterance(data.content);
            utterance.rate = 1;
            speechSynthesis.speak(utterance);
            })  
        copy.addEventListener('click', () => {
            navigator.clipboard.writeText(data.content);
        })
        send.addEventListener('click', () => {
            let tweet = `https://twitter.com/intent/tweet?url=${jokeContent.innerText}`;
            window.open(tweet, "_blank");
        })
           
        
           
        
    })

    
}
jokeGenerator()



newJoke.addEventListener('click', () => {
    console.log('yes');
    location.reload()
})









// jokeAuthor.textContent = data.data.author.pseudo;
//         console.log(data.data.author.pseudo);
//         jokeHead.textContent = data.data.content.text_head;
//         jokeContent.textContent =
//         data.data.content.text !== ""
//         ? data.data.content.text
//         : data.data.content.text_hidden