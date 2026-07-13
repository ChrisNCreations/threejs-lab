import * as THREE from 'three'

export function createLights(scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.2)

  const sunLight = new THREE.PointLight(0xffffff, 20, 500)
  sunLight.position.set(0, 0, 0)

  scene.add(ambient)
  scene.add(sunLight)

  return {
    ambient,
    sunLight,
  }
}
