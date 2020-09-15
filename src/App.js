import React, { useEffect } from "react"
import * as THREE from "three"
import grass from './images/grass.bmp'

const App = () => {
    useEffect (() => {
        const scene = new THREE.Scene()
        const camera  = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize( window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        const geometry = new THREE.BoxGeometry( 1, 1, 1 )
        const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } )
        const texture = new THREE.TextureLoader().load(grass)
        const light = new THREE.AmbientLight( 0xffffff )
        scene.add(light)
        texture.encoding = THREE.sRGBEncoding;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        const materialGrass = new THREE.MeshStandardMaterial( {
            map: texture,
          } );
        texture.repeat.set( 4, 4 );
        const cube = new THREE.Mesh( geometry, material )
        cube.position.set(1,1,1)
        const cube2 = new THREE.Mesh( geometry, materialGrass )
        scene.add(cube, cube2)
        
        camera.position.z =5
        const animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
          };
          animate();
    },[])
    return (
        <div>
            
        </div>
    )
}

export default App