import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Filter = () => {
  const [nations, setnation] = useState([])
  const handleSearch = async data => {
    if(data.length < 2 || data === '')return
    const fetchedData = await axios.get(`http://restcountries.com/v3.1/name/${data}`)
    setnation(fetchedData.data)
  }
  useEffect(() => {
    async function fetchData() {
      const fetchedData = await axios.get('https://restcountries.com/v3.1/all')
      setnation(fetchedData.data)
    }
    fetchData()
  }, [])
  return (
    <section className='filter'>
      <form className='form-control'>
     <input type='search' name='search' id='search' placeholder='Search for Country'  onChange={(data) => handleSearch(data.target.value)}/>
      </form>

      <div className='region-filter'>
        <select name='select' id='select' className='select'>
       <option value='Filter by region'>Filter by region</option>
       <option value='Africa'>Africa</option>
       <option value='America'>America</option>
       <option value='Asia'>Asia</option>
       <option value='Europe'>Europe</option>
       <option value='Oceania'>Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default Filter


