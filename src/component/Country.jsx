import React, { useEffect, useState } from 'react'
import { Link, Route, useParams } from 'react-router-dom'

const Country = () => {
  const [nation, setnation] = useState([])
  const {name} = useParams()

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