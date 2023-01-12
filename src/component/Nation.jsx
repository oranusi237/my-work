import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

const handlePageClick = () => {}

const Nation = () => {
  const [nations, setnation] = useState([])
  async function fetchnation() {
    const response =await axios.get('https://restcountries.com/v3.1/all');
    setnation(response.data)
  } 
  console.log(nations)
  useEffect(() => {
fetchnation()
  },[])



  return (
    <>
    {/* <ReactPaginate
    previousLabel={'<<'}
    nextLabel={'>>'}
    breakLabel={'....'}
    pageCount={'25'}
    marginPagesDisplayed={'2'}
    pageRangeDisplayed={'2'}
    onPageChange={handlePageClick}
    containerClassName={'pagination justify-content-center'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    /> */}
     <section className="grid">
      <div className='me'>{nations.slice(0, 32).map(({name, population,  region, capital, flags }) => {
      return (
        <div>
          <Link to={`${name}`}>
          <img src={flags.png} alt={name}></img>
        <div className='details'>
        <h3 className='nation-name'>Name: <span>{name.common}</span></h3>
        <h4>Capital: <span>{capital}</span></h4>
        <h4>Region: <span>{region}</span></h4>
        <h4>Population: <span>{population}</span></h4>
        </div>
        </Link>
        </div>
        
      ) 
    })}
    </div> 
    </section>
    </>
   
  ) 
}

export default Nation