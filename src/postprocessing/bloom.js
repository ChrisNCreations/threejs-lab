import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import * as THREE from 'three'

export function createBloom(renderer, scene, camera) {
  const composer = new EffectComposer(renderer)

  composer.addPass(new RenderPass(scene, camera))

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.4, // strength
    0.4, // radius
    0.85 // threshold
  )

  composer.addPass(bloom)

  return composer
}
