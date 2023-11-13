import React,{ Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import  Sky  from '../models/Sky'
import Bird from '../models/Bird'
import Plant from '../models/Plant'
import HomeInfo from '../components/HomeInfo'
// import Island from '../models/I'
function Home() {
  
  const [isRotating,setIsRotating] = useState(false);
  const [currentState , setCurrentStage] = useState(1);
  



  const  adjustIslandForScreenSize = ()=>{
    let screanScale  = null;
    let screanPosition = [0, -6.5, -43];
    let rotation = [0.1,-4.7,0];
    if(window.innerWidth < 768){
        screanScale = [0.9 , 0.9 , 0.9];
    }
    else{
      screanScale = [1,1,1];
    }
    return [screanScale,screanPosition,rotation]
  } 
  const  adjustPlaneForScreenSize = ()=>{
    let screanScale, screanPosition;
    if(window.innerWidth < 768){
      screanScale = [1.5 , 1.5 , 1.5];
      screanPosition = [0, -1.5 ,0];
    }
    else{
      screanScale = [3,3,3];
      screanPosition = [0, -4 ,-4]
    }
    return [screanScale,screanPosition]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [isPlaneScale, isPlanePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
                <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                    {currentState && <HomeInfo currentState={currentState}/>}
                </div>
        <Canvas className={`w-full h-screan bg-red ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near:0.1, far: 1000}}>
          <Suspense fallback={<Loader/>}>
                <directionalLight position={[1,1,1]} intensity={1}/>
                <ambientLight intensity={0.5}/>
                {/* <pointLight/>
                <spotLight/> */}
                <hemisphereLight skyColor='#b1e1ff' groundColor='#000' intensity={1}/>


                <Bird/>
                <Sky isRotating={isRotating}/>
                <Island position={islandPosition} scale={islandScale} rotation={islandRotation} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}/>
                <Plant  isPlanePosition={isPlanePosition} planeScale={isPlaneScale} isRotating={isRotating} rotation={[0,20,0]} />
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home