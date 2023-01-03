const animeName = document.querySelector(".card-header")
const animeChar = document.querySelector(".character")
const animeQuote = document.querySelector(".quote")



const url = "https://animechan.vercel.app/api/random/anime?title=naruto"
const fetchQuotes = async ()=>{
    try {
        // get data from api
        const response = await fetch(url)
        const data = await response.json()
        // inserting value to dom 
        animeName.innerHTML += data.anime
        animeChar.innerHTML += data.character
        animeQuote.innerHTML += data.quote
        console.log(data)
    } catch (error) {
        
    }
}
fetchQuotes()