import * as THREE from 'three'

export class Sun {
  constructor(texture) {
    const geometry = new THREE.SphereGeometry(2.5, 64, 64)

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      emissive: 0xffaa00,
      emissiveIntensity: 2,
    })

    this.mesh = new THREE.Mesh(geometry, material)
  }

  update(delta) {
    this.mesh.rotation.y += delta * 0.2
  }
}
