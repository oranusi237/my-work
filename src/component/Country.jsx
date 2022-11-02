import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Country = () => {
  const [nation, setnation] = useState([])
  const {name} = useParams()

  const fetchCountrydata = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await res.json()
    setnation(data)
    console.log(data)
  }
  useEffect(() => {
  fetchCountrydata()
  }, [name])
  return (
    <>
    <Link to={"/"}>&larr; Back</Link>
    {/* <section>
    {nation.map(({name, capital, region, topLevelDomain}) => {
      return(
      <div>
      <h2>{name.official}, <span>{capital}</span></h2>
      </div>
      )
    })}

    </section> */}
    </>
  )
}

export default Country