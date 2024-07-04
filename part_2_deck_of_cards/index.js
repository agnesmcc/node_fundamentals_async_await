// Get one card and log the value and suit
async function getCard() {
    let response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    console.log(
        response.data.cards[0].value + ' of ' +
        response.data.cards[0].suit
    )  
}

// Get two cards and log the value and suit of each
async function getTwoCards() {
    let twoCards = []
    
    let response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    let deck_id = response.data.deck_id
    twoCards.push(response.data.cards[0])
    
    response = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    twoCards.push(response.data.cards[0])
    
    console.log(twoCards[0].value + ' of ' + twoCards[0].suit)
    console.log(twoCards[1].value + ' of ' + twoCards[1].suit)
}

$('document').ready(async () => {
    let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
    deck_id = response.data.deck_id
      
    $('#new-card').on('click', async () => {
        let response = await axios.get('https://deckofcardsapi.com/api/deck/' + deck_id + '/draw/?count=1') 
        console.log(
            response.data.cards[0].value + ' of ' +
            response.data.cards[0].suit
        )
        $('#card').replaceWith(`<img id="card" src="${response.data.cards[0].image}"><div>`)
    })

})

getCard()
getTwoCards()