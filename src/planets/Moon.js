import * as THREE from 'three'

export class Moon {
  constructor(texture) {
    this.orbit = new THREE.Object3D()

    const geometry = new THREE.SphereGeometry(0.2, 32, 32)

    const material = new THREE.MeshStandardMaterial({
      map: texture,
    })

    this.mesh = new THREE.Mesh(geometry, material)

    this.mesh.position.x = 1.4

    this.orbit.add(this.mesh)
  }

  update(delta) {
    this.mesh.rotation.y += delta

    this.orbit.rotation.y += delta * 3
  }
}
