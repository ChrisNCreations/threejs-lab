import * as THREE from 'three'

export function createOrbit(radius) {
  const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2)

  const points = curve.getPoints(256)

  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  const material = new THREE.LineBasicMaterial({
    color: 0x444444,
    transparent: true,
    opacity: 0.4,
  })

  const orbit = new THREE.LineLoop(geometry, material)

  orbit.rotation.x = Math.PI / 2

  return orbit
}
