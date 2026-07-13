import * as THREE from 'three'

export class Planet {
  constructor({ radius, distance, texture, rotationSpeed = 0.5, orbitSpeed = 0.1 }) {
    this.orbit = new THREE.Object3D()

    const geometry = new THREE.SphereGeometry(radius, 64, 64)

    const material = new THREE.MeshStandardMaterial({
      map: texture,
    })

    this.mesh = new THREE.Mesh(geometry, material)

    this.mesh.position.x = distance

    this.orbit.add(this.mesh)

    this.rotationSpeed = rotationSpeed
    this.orbitSpeed = orbitSpeed
  }

  update(delta) {
    this.mesh.rotation.y += this.rotationSpeed * delta

    this.orbit.rotation.y += this.orbitSpeed * delta
  }
}
