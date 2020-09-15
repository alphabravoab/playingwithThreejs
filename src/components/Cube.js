import React, { useEffect } from 'react'
import grass from '../images/grass.bmp'

const Cube = () => {
    useEffect(()=>{
        const geometry = new THREE.BoxGeometry( 1, 1, 1 )
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
        const cube = new THREE.Mesh( geometry, material )
        scene.add(cube)
    },[])
    return (
        <>
        </>
    )
}

export default Cube
