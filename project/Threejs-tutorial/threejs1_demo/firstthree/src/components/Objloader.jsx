import React, { useEffect } from 'react'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import bottel from '../models/bottel7.glb'


function Objloader() {
    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        const loader = new GLTFLoader();
    
            loader.load( bottel, function ( gltf ) {
    
                scene.add( gltf.scene );
    
            }, undefined, function ( error ) {
    
                console.error( error );
    
        } );
    })

  return (
    <>
    
    </>
  )
}

export default Objloader