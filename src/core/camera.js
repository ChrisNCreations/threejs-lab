import * as THREE from 'three'

export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
)

camera.position.set(0, 8, 25)
