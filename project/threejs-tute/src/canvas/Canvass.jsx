import React from 'react'
import * as THREE from 'three';

function Canvass() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    camera.position.z = 5;
    renderer.render(scene, camera)
}

export default Canvass