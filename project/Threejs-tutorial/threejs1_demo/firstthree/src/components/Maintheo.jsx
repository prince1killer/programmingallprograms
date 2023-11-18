import *  as THREE from 'three';
import React, { useEffect } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import *  as dat from 'dat.gui';
import space from '../images/space.jpg';
import earth from '../images/earth.jpg';

function Maintheo() {
  useEffect(()=>{
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/ window.innerHeight, 0.1, 1000);
    const bottel = new URL('../models/bottel7.glb',import .meta.url);
    
    const orbit = new OrbitControls(camera, renderer.domElement);
    
    renderer.shadowMap.enabled = true;
    
    const axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);
    // camera.position.z = 5;
    // camera.position.y = 1;
        camera.position.set(0,2,4);
        orbit.update(); 

        // ============= CREATING PLANE =====================
        const planeGeo = new THREE.PlaneGeometry(30,30);
        const planeMet = new THREE.MeshLambertMaterial({color:"white",side:THREE.DoubleSide});
        const plane = new THREE.Mesh(planeGeo, planeMet);
        scene.add(plane);
        plane.rotation.x = -0.5 * Math.PI;
        console.log(Math.PI);
        plane.receiveShadow = true;


        // ============= CREATING SPHERE =====================
        const sphereGeo = new THREE.SphereGeometry(5,100,100);
        const sphereMet = new THREE.MeshBasicMaterial({color:'blue',wireframe:false});
        const sphere = new THREE.Mesh(sphereGeo, sphereMet);
        // sphere.material.map = textLoader.load(earth);
        scene.add(sphere);
        sphere.position.x = -10;
        let step = 0;
        let speed = 0.01;
        sphere.castShadow = true;
        


        // ============= CREATING GRID =====================
        
        
        const gridHelper = new THREE.GridHelper(30);
        scene.add(gridHelper);
        
        
        // ============= CREATING LIGHT =====================
        // const abendedLight = new THREE.AmbientLight(0x33333);
        // scene.add(abendedLight) 
        
        
        // const directionalLght = new THREE.DirectionalLight(0xFFFFFF,0.8);
        // scene.add(directionalLight)
        // directionalLight.position.set(-30,50,0)
        // directionalLight.castShadow = true;
        // directionalLight.shadow.camera.bottom = -12;
        // directionalLight.shadow.camera.top = 12;

        // const dLightHelper = new THREE.DirectionalLightHelper(directionalLight,5);
        // scene.add(dLightHelper) 
        
        // ============= CREATING SHADOWHELPER =====================
        // const directionalLightHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
        // scene.add(directionalLightHelper);
        const spotLight = new THREE.SpotLight(0xFFFFFF,7000);
        scene.add(spotLight);
        spotLight.position.set(-20, 70, 0);
        spotLight.castShadow = true;
        spotLight.angle = 0.4;
        const spotLightHelper = new THREE.SpotLightHelper(spotLight);
        scene.add(spotLightHelper);
        // ============= CREATING CUBE =====================
        

        const boxGeometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshLambertMaterial({color:'red'});
        const box = new THREE.Mesh(boxGeometry, material);
        scene.add(box)
        // box.rotation.x = 45;
        
        // ============= CREATING BLUR =====================
        scene.fog = new THREE.Fog(0xF4522F,0,200);
        renderer.setClearColor(0x43e345);//To change the backgroundColor
        const textLoader = new THREE.TextureLoader();
        scene.background = textLoader.load(space);
        // scene.add(blur)
        const sphereGeo2 = new THREE.SphereGeometry(4,400,400)
        const sphereMet2 = new THREE.MeshBasicMaterial();
        const sphere2 = new THREE.Mesh(sphereGeo2, sphereMet2);
        sphere2.material.map = textLoader.load(earth);
        scene.add(sphere2);
        sphere2.position.set(10,10,0);
        
        sphere2.castShadow = true;
        // ============= CREATING Dat.GUI =====================
        const gui = new dat.GUI();
        const option = {
          sphereColor : '#ffea00',
          wireframe: false,
          speed: 0.01,
          angle : 0.1,
          penumbra: 0,
          intensity : 1

        }

        gui.addColor(option, 'sphereColor').onChange(function(e){
          sphere.material.color.set(e);
        })

        gui.add(option, 'wireframe').onChange((e)=>{
          sphere.material.wireframe = e; 
        })

        gui.add(option, 'speed' , 0,0.2)
        gui.add(option, 'angle' , 0.1,1)
        gui.add(option, 'penumbra' , 0,1)
        gui.add(option, 'intensity' , 0,10000)


        // ============= CREATING ObjectLoad =====================
        const bottelLoad = new GLTFLoader();
        bottelLoad.load(bottel.href,(gltf)=>{
          const modal = gltf.scene;
          scene.add(modal);
          modal.position.set(-12,4,10);
        },undefined, function(error){
          console.log(error)
        })

        function animate(){
          box.rotation.x +=0.01;
          box.rotation.y +=0.01;
          box.rotation.z +=0.01;
          step += option.speed;
          sphere.position.y = 20 * Math.abs(Math.sin(step))
          spotLight.angle = option.angle;
          spotLight.penumbra = option.penumbra;
          spotLight.intensity = option.intensity;
          renderer.render(scene , camera)
        }
        renderer.setAnimationLoop(animate);
        

    })
  return (
    <div></div>
  )
}

export default Maintheo