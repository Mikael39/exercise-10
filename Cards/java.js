const btnget = document.querySelector('#newCard');
const cardOutput = document.querySelector('#cardoutput');

const getCard = () => {
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            if (res.ok)
                return res.json();
            throw new Error('Failed to get Card');
        })
        .then(data => {
            console.log(data);           
            displayCard(data);          
            function displayCard(data) {               
                const pickedCard = data.cards[0];
                const cardImg = document.createElement("img");
                cardOutput.innerHTML ='';
                cardImg.src = pickedCard.image;               
                cardOutput.appendChild(cardImg);          
            }
        })
        .catch(err => console.log('Error: ' + err));
}
btnget.addEventListener('click', getCard);