import React, { useState } from 'react'
const Card = ({name,recipe}) => {
  const [hoverd,sethovered]=useState(false)
  const [expanded,setExpanded]=useState(false)
  return (
    <div className='container' style={{display:'flex',justifyContent:'center'}}>
      <style>
      {`
        @media (min-width:'768px')
        {
          .cards{
            min-width:'900px';
          }
        }
      `}
    </style>
        <div className='cards' style={{color:'white',border:'2px solid #FF6600',display:'flex',flexWrap:'1',padding:'10px',marginTop:'9px',justifyContent:'center',maxWidth:'600px',minWidth:'350px',backgroundColor:hoverd?'orange':'black',flexDirection:'column',flex:'1 1 150px',textAlign:'center'}} onMouseEnter={()=>{sethovered(true)}} onMouseLeave={()=>{sethovered(false)}} onClick={()=>{setExpanded(!expanded)}}>
        <h1>{name}</h1>
        {expanded&&<p>{recipe}</p>}
    </div>
    </div>
  )
}

export default Card