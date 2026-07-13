import * as THREE from 'three'

export function addRings(planet, texture) {
  const geometry = new THREE.RingGeometry(2.2, 3.6, 128)

  const material = new THREE.MeshStandardMaterial({
    map: texture,

    side: THREE.DoubleSide,

    transparent: true,
  })

  const rings = new THREE.Mesh(geometry, material)

  rings.rotation.x = Math.PI / 2

  planet.mesh.add(rings)
}
