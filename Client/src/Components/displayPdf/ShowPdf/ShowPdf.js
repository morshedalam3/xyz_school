import React, { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import { Scrollbar } from '../../ScrollBars/ScrollBars';
const ShowPdf = (props) => {
    const Pdf = props.element;
    const viewPdf = Pdf.pdfURL.selectedFile;
    
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <>
        <Scrollbar style={{height:"calc(90vh - 200px)",marginTop:"10px"}} >
            <h4>View PDF</h4>
      <div className='pdf-container'>
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
      {!viewPdf&&<>No pdf file selected</>}
      </div> 
      </Scrollbar>
      </>
    );
};

export default ShowPdf;