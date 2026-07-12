import './style.css'

import * as THREE from 'three'

import { scene } from './core/scene'
import { camera } from './core/camera'
import { renderer } from './core/renderer'
import { controls } from './core/controls'
import { createLights } from './utils/lights'

createLights(scene)

// Temporary cube
const cube = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial())

scene.add(cube)

function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  controls.update()

  renderer.render(scene, camera)
}

animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight

  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
})
