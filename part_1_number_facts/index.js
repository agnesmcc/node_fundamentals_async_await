async function getRandomTrivia() {
    let response = await axios.get('http://numbersapi.com/random?json')
    console.log(response.data.text)
    $('#trivia').text(response.data.text)    
}

async function getTriviaForNumbers(n) {
    let response = await axios.get(`http://numbersapi.com/1..${n}?json`)
    console.log(response.data)
    Object.values(response.data).forEach(value => {
        console.log(value)
        $('#numbers-2').append(`<div>${value}</div>`)
    })
}

async function getTriviaForNumber(n, times=1) {
    for (let i = 0; i < times; i++) {
        let response = await axios.get(`http://numbersapi.com/${n}?json`)
        console.log(response.data.text)
        $('#numbers-3').append(`<div>${response.data.text}</div>`)
    }
}


getRandomTrivia()
getTriviaForNumbers(5)
getTriviaForNumber(7, 4)    