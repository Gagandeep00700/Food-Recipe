import { useState } from 'react'
const Search = ({searchTerm,setSearchTerm}) => {
  const handleQueryChange=(e)=>{
    setSearchTerm(e.target.value)
  }
  return (
    <div className='search-box' style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',outline:'none',border:'none',}}>
        <input type='text' style={{minHeight:'35px',borderRadius:'15px',minWidth:'200px',textAlign:'center',flexShrink:'1'}} placeholder='Find Recipies' onChange={handleQueryChange} value={searchTerm}></input>
    </div>
  )
}

export default Search