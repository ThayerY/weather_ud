// selecting elements from html
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// adding event listener
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let city = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  const url = `/weather?address=${city}`

  document.querySelector('input').value = '' //to make the input empty after gettin data
  //fetching the data
  const gettinData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    if (data.error) {
      return messageOne.textContent = data.error
    }
    messageOne.textContent = data.location //display the data in browser
    messageTwo.textContent = data.forecast //display the data in browser
  }
  gettinData()
})





// const url = 'http://localhost:3000/weather?address=new york'
// const url = `http://localhost:3000/weather?address=${location}`

//-------------------------------------------------------------------------------------
  // fetching data with fetch and then
//-------------------------------------------------------------------------------------

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     if (data.error) {
//       return console.log(data.error)
//     }
//     console.log(data.location),
//       console.log(data.forecast)

//   });
//-------------------------------------------------------------------------------------
  //  fetching data with async await
//-------------------------------------------------------------------------------------

// const gettinData = async () => {
//   const res = await fetch(url)
//   const data = await res.json()
//   if (data.error) return console.log(data.error)
//   console.log(data.location)
//   console.log(data.forecast)
// }
// gettinData()

// selecting elements from html

// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
// const messageOne = document.querySelector('#message-1')
// const messageTwo = document.querySelector('#message-2')

// // adding event listener
// weatherForm.addEventListener('submit', (e) => {
//   e.preventDefault()
//   let city = search.value

//   messageOne.textContent = 'Loading...'
//   messageTwo.textContent = ''

//   const url = `http://localhost:3000/weather?address=${city}`

//   document.querySelector('input').value = '' //to make the input empty after gettin data
//   //fetching the data
//   const gettinData = async () => {
//     const res = await fetch(url)
//     const data = await res.json()
//     if (data.error) {
//       return messageOne.textContent = data.error
//     }
//     messageOne.textContent = data.location //display the data in browser
//     messageTwo.textContent = data.forecast //display the data in browser
//   }
//   gettinData()
// })