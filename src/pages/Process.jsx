import React, { useEffect } from 'react';
import Header from '../components/Header'
import Pr from '../assets/Proc.jpg'
import './Process.css'
import models from '../assets/model.png'
import fab from '../assets/fab.png'
import safety from '../assets/safety.png'
import gsap from 'gsap'

import Footer from '../components/Footer';
const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
    gsap.from('.headings', {
      opacity: 0,
      y: 50,
      duration: 2,
      ease: 'power2.out',
    });
  }, []);
  
  return (

    <>  
    <Header/>  
    <div className='main6'>
        
        <h1 className='headings text-6xl font-medium uppercase'>Process and Manufacturing Subsystem</h1>
    </div>

    <div className='mt-12 flex flex-row p-5'>
      <div className='w-2/3'>      
      <h1 className='text-4xl font-medium text-orange-300'>Modeling</h1>
      <p className='mt-9 text-justify'>The modeling phase uses advanced simulation tools such as DWSim and 
        Aspen Plus to design and optimize chemical processes. This includes developing 
        accurate process flow diagrams (PFDs), performing material and energy balances, and
         simulating operational conditions to assess performance. These simulations provide
          insights into system efficiency, identify bottlenecks, and guide decisions for improving 
          energy use, material flow, and overall process feasibility.

      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={models} alt="" className='images rounded-md'/>
      </div>
    </div>


    <div className='mt-12 flex flex-row p-5 items-center'>
  <div className='w-2/3'>      
    <h1 className='text-4xl font-medium text-orange-300'>Fabrication</h1>
    <p className='mt-9 text-justify'>
      Fabrication transforms process designs into functional prototypes. Using AutoCAD, 
      detailed engineering drawings of equipment and system layouts are prepared, ensuring
      precision and feasibility. These drawings serve as blueprints for constructing essential 
      components such as reactors, pipelines, and adsorbent beds. The fabrication 
      phase emphasizes creating scalable and robust systems 
      that bridge theoretical concepts with practical implementation.
    </p>
  </div>
  <div className='w-1/3 flex items-center justify-center'>
    <img src={fab} alt="" className='rounded-md object-contain  max-h-96 scale-75'/>
  </div>
</div>

    
<div className='mt-1 flex flex-row p-5 items-center'>
  <div className='w-2/3'>      
    <h1 className='text-4xl font-medium text-orange-300'>Safety</h1>
    <p className='mt-9 text-justify'>
    Safety is integral to every stage of the process.
     This involves conducting thorough hazard assessments,
      such as HAZOP (Hazard and Operability Analysis), to identify 
      and mitigate potential risks. Engineering controls, such as pressure
       relief systems and interlocks, are incorporated to enhance operational
        safety. Emergency response protocols and compliance with industrial safety 
        standards are established to address potential incidents. Regular safety audits
         and real-time monitoring ensure that the system operates reliably and securely 
         under all conditions.

    </p>
  </div>
  <div className='w-1/3 flex items-center justify-center'>
    <img src={safety} alt="" className='rounded-md object-contain  max-h-96 scale-75'/>
  </div>
</div>

<Footer/>

    </>





  )
}

export default Process