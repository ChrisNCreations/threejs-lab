import * as THREE from 'three'

export function createStars(count = 10000) {
  const geometry = new THREE.BufferGeometry()

  const positions = []

  for (let i = 0; i < count; i++) {
    const radius = 1000

    positions.push(
      (Math.random() - 0.5) * radius,
      (Math.random() - 0.5) * radius,
      (Math.random() - 0.5) * radius
    )
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    color: 0xffffff,

    size: 0.15,

    sizeAttenuation: true,
  })

  return new THREE.Points(geometry, material)
}
