import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

camera.position.z = 5

// Renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Cube
const geometry = new THREE.BoxGeometry()

const material = new THREE.MeshNormalMaterial()

const cube = new THREE.Mesh(
  geometry,
  material
)

scene.add(cube)

// Animation Loop

function animate() {
  requestAnimationFrame(animate)

  const time = Date.now() * 0.001

  cube.rotation.x = time
  cube.rotation.y = time

  cube.position.y = Math.sin(time) * 0.5

  renderer.render(scene, camera)
}

animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
})

animate()


