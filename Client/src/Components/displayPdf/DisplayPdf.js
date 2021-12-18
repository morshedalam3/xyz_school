import React, { useEffect, useState } from 'react';
import ShowPdf from './ShowPdf/ShowPdf';
export default function DisplayPdf() {

const [pdf, setPdf] = useState([]);
useEffect(() =>{
  fetch('https://rocky-bastion-51540.herokuapp.com/getPdf')
  .then(response => response.json())
  .then(data => setPdf(data))
 },[pdf?.pdfURL?.selectedFile])

  return (
    
     <div className='container'>
      {pdf?.map((element)=>(
        <ShowPdf element={element}/>
      ))}
    </div>
  );
}