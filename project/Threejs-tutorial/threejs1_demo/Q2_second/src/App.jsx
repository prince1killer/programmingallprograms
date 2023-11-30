import './App.css'
import *  as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Star from './img/stars.jpg'
import Sun from './img/Sun.jpg'
import Mercury from './img/mercury.jpg'
import Venus from './img/venus.jpg'
import Earth from './img/earth.jpg';
import Mars from './img/mars.jpg';
import Jupiter from './img/jupiter.jpg';
import Saturn from './img/saturn.jpg';
import SaturnRing from './img/saturn ring.png';
import Uranus from './img/uranus.jpg';
import UranusRing from './img/uranus ring.png'
import Naptune from './img/neptune.jpg';
import Pluto from './img/pluto.jpg';
import { useEffect } from 'react'


function App() {

  useEffect(()=>{
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement)
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    const orbit = new OrbitControls(camera, renderer.domElement);
    camera.position.set(-90,140,140)
    orbit.update();
    const ambientLignt = new THREE.AmbientLight(0x333333);
    scene.add(ambientLignt);
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    scene.background = cubeTextureLoader.load([
      Star,
      Star,
      Star,
      Star,
      Star,
      Star
    ]);
    const textureLoader = new THREE.TextureLoader();
    const sunGeo = new THREE.SphereGeometry(-16,30,30);
    const sunMAT = new THREE.MeshBasicMaterial({map:textureLoader.load(Sun)})
    const sun = new THREE.Mesh(sunGeo, sunMAT)
    scene.add(sun)
    
    const mercueryGeo = new THREE.SphereGeometry(2.5,30,30);
    const mercueryMAT = new THREE.MeshStandardMaterial({map:textureLoader.load(Mercury)})
    const mercuery = new THREE.Mesh(mercueryGeo, mercueryMAT)
    const mercuryObj = new THREE.Object3D();
    mercuryObj.add(mercuery)
    scene.add(mercuryObj)
    mercuery.position.x = 28;

    
    
    const venusGeo = new THREE.SphereGeometry(4,30,30);
    const venusMAT = new THREE.MeshStandardMaterial({map:textureLoader.load(Venus)})
    const venus = new THREE.Mesh(venusGeo, venusMAT)
    const venusObj = new THREE.Object3D(venus)
    venusObj.add(venus)
    scene.add(venusObj)
    venus.position.x = 49;

    const pointLignt = new  THREE.PointLight(0xFFFFFF, 10000, 300)
    scene.add(pointLignt)
  
      const marseGeo = new THREE.SphereGeometry(9,30,30);
    const marseMAT = new THREE.MeshStandardMaterial({map:textureLoader.load(Mars)})
    const marse = new THREE.Mesh(marseGeo, marseMAT)
    const marseObj = new THREE.Object3D();
    marseObj.add(marse)
    scene.add(marseObj)
    marse.position.x = 70;


    const earthGeo = new THREE.SphereGeometry(11,30,30);
    const earthMAT = new THREE.MeshStandardMaterial({map:textureLoader.load(Earth)})
    const earth = new THREE.Mesh(earthGeo, earthMAT)
    const earthObj = new THREE.Object3D();
    earthObj.add(earth)
    scene.add(earthObj)
    earth.position.x = 90;
    // earth.position.Z = 70;
    

    function animate(){
      sun.rotateY(0.009)
      mercuery.rotateY(0.009)
      mercuryObj.rotateY(0.007)
      venus.rotateY(0.008)
      venusObj.rotateY(0.003)
      marse.rotateY(0.008)
      marseObj.rotateY(0.002)
      earth.rotateY(0.024)
      earthObj.rotateY(0.0010)
      renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);
    window.addEventListener('resize', function(){
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth,window.innerHeight);
    })

  })

  return (
    <>

    </> 
  )
}

export default App
