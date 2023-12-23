import {useState,useEffect} from "react";
import axios from 'axios'




const App = () => {

  const ApiUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"
  const baseUrl ="https://studies.cs.helsinki.fi/restcountries/api/name"

  const [value,setValue]=useState('')
  const [allCountries,setAllCountries] = useState([])
  const [showCountriesNames,setShowCountriesNames] = useState([])
  const [country,setCountry] = useState([])
  const [message,setMessage] = useState('')


  useEffect(()=>{
    axios
    .get(ApiUrl)
    .then(response=>{
      //console.log("our API data is = ",response.data[0].name.common)
      setAllCountries(response.data)
    })
  },[])


  

  const handleChange = (event) => {
    console.log(event.target.value)

    //console.log("all countries are here",allCountries)
    //console.log("first country here",allCountries[0].name.common)
    const filteredCountries = allCountries.filter((country)=>country.name.common.toLowerCase().includes(event.target.value.toLowerCase())==true)
    console.log("the filtered countries are",filteredCountries)
    if(event.target.value.toLowerCase.length==0) {
      console.log("target value's length is 0")
      setMessage('')}

    if(filteredCountries.length>10) {
      //console.log("Too many matches, specify another filter")
      setMessage("Too many matches, specify another filter")
    }
    else if(filteredCountries.length==0){
      setMessage('')
    }

    
    else if(filteredCountries.length<=10&& filteredCountries.length>1) {
      setMessage('')
      console.log("the first country in the filtered array",filteredCountries)
      setShowCountriesNames(filteredCountries.map(country=> country.name.common.toLowerCase()))
      console.log("countries under the count of 10",showCountriesNames)
    }



    else if(filteredCountries.length==1){
      console.log("the unique match is",filteredCountries.name)
      setMessage('')
      setCountry(filteredCountries)
      setShowCountriesNames(filteredCountries.map(country=> country.name.common.toLowerCase()))
      console.log("the content of the country setted is = ",country)
    }




    setValue(event.target.value)
  }


  return (
    <div>
      <form>
        find countries : <input value={value} onChange={handleChange}></input>
      </form>

      <ShowCountries  countries={showCountriesNames} country={country} message={message} />

    </div>

  ) 


}


const ShowCountries = ({countries,country,message}) => {

  if(message!='') {
    return (<div>{message}</div>)
  }

  if(country.length>=1){
    console.log("this is our country",country[0])
    const OurCountry = country[0].name
    //console.log("the name of our country is ",OurCountry)
    const Name = OurCountry.common
    const capital = country[0].capital[0]
    console.log("the capital is ",capital)
    const area = country[0].area
    console.log("the area is ",area)

    const languages = Object.values(country[0].languages)

    const flag = country[0].flags.svg

    return (
      <div>
        <h1>{Name}</h1>
        <p>{capital}</p>
        <p>{area}</p>
        <ul>{languages.map(language=><li key={language}>{language}</li>)}</ul>
        <img src={flag}></img>
      
      </div>

    )
  }

  return (

    <ul>
      {countries.map(country=><li key={country}>{country}</li>)}
    </ul>

  )

}



export default App