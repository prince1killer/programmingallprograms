import React, { useEffect } from 'react'
import * as THREE from 'three';
// import './App.css'
// if ( WebGL.isWebGLAvailable() ) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'container' ).appendChild( warning );

// }

function Cube() {
    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth,window.innerHeight);
        // document.getElementsByClassName(".box".renderer);
        // console.log(document.getElementsByClassName(".box".renderer))
        document.body.appendChild(renderer.domElement)
        const geometry = new THREE.BoxGeometry(2,2,2);
        const material = new THREE.MeshBasicMaterial({color:'green'});
        const cube = new THREE.Mesh(geometry,material);
        scene.add(cube)
        camera.position.z = 5    
        function animate() {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;
          renderer.render( scene, camera );
        }
        
        animate();
      })
    
  return (
   <></>
  )
}

export default Cube