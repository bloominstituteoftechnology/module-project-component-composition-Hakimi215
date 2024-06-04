import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
function fetchPhoto (){
  axios.get(URL)
  .then(res => {
    console.log(res.data)
    setApod(res.data)
  })
  
  .catch(err => {
    console.log(err.message)
  })
}

// fetchPhoto()
setApod({
  copyright: "NASA, ESA, and the Hubble Heritage Team (STScI/AURA)",
  date: "April 1, 1995",
  explanation: "The Pillars of Creation is a striking image of interstellar columns of gas and dust in the Eagle Nebula. It was captured by the Hubble Space Telescope and has become one of the most famous astronomical photographs ever taken. The image showcases the ongoing process of star formation and provides valuable insights into the birth and evolution of stars and planetary systems.",
  media_type: "image",
  title: "Pillars of Creation",
  url: "https://bloominstituteoftechnology.github.io/img/pillars-of-creation.png",
  service_version: "v1",
})
  },[])
  if(!apod) return 'Fetching Photo of the Day...'
  return (
  <section>
  <Card
  title={apod.title}
  text={apod.explanation}
  imageURL={apod.url}
  date={apod.date}
  

  />
  </section>

  )
}

export default App
