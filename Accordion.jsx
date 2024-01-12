import React, { useState } from 'react';
import Data from './Data';
import './Accordion.css';
import MyAccordion from './MyAccordion'
const Accordion = () => {
  const [data,setdata]=useState(Data);
  return (
   <>
   

      <section className='main_div'>
        <h1>QUESTIONS</h1>
{
     data.map((val)=>{ //val =objects arr
            //  const {id}=val;
                 return <MyAccordion key={val.id}{...val}/>;
     })
    }
    </section>
      
      </>
    )
}

export default Accordion;