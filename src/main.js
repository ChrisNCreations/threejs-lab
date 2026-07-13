import './style.css'

import * as THREE from 'three'

import { scene } from './core/scene'
import { camera } from './core/camera'
import { renderer } from './core/renderer'
import { controls } from './core/controls'
import { createLights } from './utils/lights'
import { textureLoader } from './utils/loaders'
import { Sun } from './planets/Sun'
import { Planet } from './planets/Planet'
import { addRings } from './planets/Saturn'
import { Moon } from './planets/Moon.js'
import { createOrbit } from './utils/orbits.js'
import { createStars } from './utils/stars'
import { createGalaxy } from './utils/galaxy'
import { createBloom } from './postprocessing/bloom'
import { createAsteroidBelt } from './utils/asteroids'

createLights(scene)

//composer
const composer = createBloom(renderer, scene, camera)

//Sun
const sunTexture = textureLoader.load('/textures/sun.jpg')
const sun = new Sun(sunTexture)
scene.add(sun.mesh)

//galaxy
const galaxy = createGalaxy()

scene.add(galaxy)

//stars
const stars = createStars()

scene.add(stars)

//Planets
const mercuryTexture = textureLoader.load('/textures/mercury.jpg')
const venusTexture = textureLoader.load('/textures/Venus.jpg')
const earthTexture = textureLoader.load('/textures/earth.jpg')
const moonTexture = textureLoader.load('/textures/moon.jpg')
const marsTexture = textureLoader.load('/textures/mars.jpg')
const jupiterTexture = textureLoader.load('/textures/jupiter.jpg')
const saturnTexture = textureLoader.load('/textures/saturn.jpg')
const uranusTexture = textureLoader.load('/textures/Uranus.jpg')
const neptuneTexture = textureLoader.load('/textures/Neptune.jpg')
const ringTexture = textureLoader.load('/textures/saturn_ring.png')

const mercury = new Planet({
  radius: 0.4,
  distance: 5,
  texture: mercuryTexture,
  rotationSpeed: 0.6,
  orbitSpeed: 1.6,
})

const venus = new Planet({
  radius: 0.8,
  distance: 8,
  texture: venusTexture,
  rotationSpeed: 0.4,
  orbitSpeed: 1.2,
})

const earth = new Planet({
  radius: 0.85,
  distance: 11,
  texture: earthTexture,
  rotationSpeed: 1.0,
  orbitSpeed: 1.0,
})

const moon = new Moon(moonTexture)

const mars = new Planet({
  radius: 0.6,

  distance: 15,

  texture: marsTexture,

  rotationSpeed: 0.8,

  orbitSpeed: 0.8,
})

const jupiter = new Planet({
  radius: 2,

  distance: 21,

  texture: jupiterTexture,

  rotationSpeed: 1.3,

  orbitSpeed: 0.4,
})

const saturn = new Planet({
  radius: 1.7,

  distance: 28,

  texture: saturnTexture,

  rotationSpeed: 1,

  orbitSpeed: 0.3,
})

const uranus = new Planet({
  radius: 1.2,

  distance: 35,

  texture: uranusTexture,

  rotationSpeed: 0.8,

  orbitSpeed: 0.2,
})

const neptune = new Planet({
  radius: 1.1,

  distance: 42,

  texture: neptuneTexture,

  rotationSpeed: 0.8,

  orbitSpeed: 0.15,
})

const asteroidBelt = createAsteroidBelt()

scene.add(asteroidBelt)
scene.add(mercury.orbit)
scene.add(venus.orbit)
scene.add(earth.orbit)
earth.mesh.add(moon.orbit)
scene.add(mars.orbit)
scene.add(jupiter.orbit)
scene.add(saturn.orbit)
addRings(saturn, ringTexture)
scene.add(uranus.orbit)
scene.add(neptune.orbit)

const clock = new THREE.Clock()

scene.add(createOrbit(5))
scene.add(createOrbit(8))
scene.add(createOrbit(11))
scene.add(createOrbit(15))
scene.add(createOrbit(21))
scene.add(createOrbit(28))
scene.add(createOrbit(35))
scene.add(createOrbit(42))

// Animation
function animate() {
  requestAnimationFrame(animate)

  const delta = clock.getDelta()

  stars.rotation.y += delta * 0.01
  galaxy.rotation.y += delta * 0.01
  asteroidBelt.rotation.y += delta * 0.03

  sun.update(delta)
  mercury.update(delta)
  venus.update(delta)
  earth.update(delta)
  moon.update(delta)
  mars.update(delta)
  jupiter.update(delta)
  saturn.update(delta)
  uranus.update(delta)
  neptune.update(delta)

  controls.update()

  composer.render()
}

animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight

  camera.updateProjectionMatrix()

  composer.setSize(window.innerWidth, window.innerHeight)
})
