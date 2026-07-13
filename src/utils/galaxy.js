import * as THREE from 'three'

export function createGalaxy() {
  const count = 50000
  const branches = 5
  const radius = 3000

  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  const insideColor = new THREE.Color(0xffddaa)
  const outsideColor = new THREE.Color(0x4466ff)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3

    const r = Math.random() * radius

    const branchAngle = ((i % branches) / branches) * Math.PI * 2

    const spinAngle = r * 0.18

    const randomX = (Math.random() - 0.5) * 3
    const randomY = (Math.random() - 0.5) * 0.4
    const randomZ = (Math.random() - 0.5) * 3

    positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX

    positions[i3 + 1] = randomY

    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ

    const mixed = insideColor.clone()
    mixed.lerp(outsideColor, r / radius)

    colors[i3] = mixed.r
    colors[i3 + 1] = mixed.g
    colors[i3 + 2] = mixed.b
  }

  const geometry = new THREE.BufferGeometry()

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  const galaxy = new THREE.Points(geometry, material)

  galaxy.rotation.x = -0.2

  return galaxy
}
