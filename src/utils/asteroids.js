import * as THREE from 'three'

export function createAsteroidBelt() {
  const group = new THREE.Group()

  const geometry = new THREE.IcosahedronGeometry(0.05, 0)

  const material = new THREE.MeshStandardMaterial({
    color: 0x888888,
  })

  const count = 3000

  for (let i = 0; i < count; i++) {
    const asteroid = new THREE.Mesh(geometry, material)

    const angle = Math.random() * Math.PI * 2

    const radius = 17 + Math.random() * 4

    asteroid.position.set(
      Math.cos(angle) * radius,

      (Math.random() - 0.5) * 0.6,

      Math.sin(angle) * radius
    )

    asteroid.rotation.set(
      Math.random() * Math.PI,

      Math.random() * Math.PI,

      Math.random() * Math.PI
    )

    const scale = 0.5 + Math.random()

    asteroid.scale.setScalar(scale)

    group.add(asteroid)
  }

  return group
}
