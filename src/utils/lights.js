import * as THREE from 'three'

export function createLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.2)

  const sunLight = new THREE.PointLight(0xffffff, 5, 500)

  scene.add(ambient)
  scene.add(sunLight)

  return {
    ambient,
    sunLight,
  }
}
