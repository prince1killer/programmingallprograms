import { renderer } from 'react-dom';
import *  as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Create the speare
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREEMeshStandardMaterial({
    color:"#00ff83",
});
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh);



//Camera
const camera = new THREE.PerspectiveCamera(45,800,600)
scene.add(camera);


//Render
const canvas = document.getElementById(".webgl");
const renderer = new WebGLRenderingContext({canvas})
renderer.setSize(800,600)
renderer.render(scene,camera)