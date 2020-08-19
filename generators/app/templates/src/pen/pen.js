const tclouds = gsap.timeline({ repeat: -1 })
const tbranches = gsap.timeline({ repeat: -1 })
const tsun = gsap.timeline({ repeat: -1, yoyo: true })

tclouds
  .set('#cloud1, #cloud2', { x: '600' })
  .to('#cloud1, #cloud2', { x: '-800', ease: 'none', stagger: 5, duration: 16 })
  .progress(0.3)

tbranches
  .set('.tree__branch', { transformOrigin: '50% 95%', rotate: '3deg' })
  .to('.tree__branch', { rotate: '-5deg', duration: 3 })
  .to('.tree__branch', { rotate: '3deg', duration: 3 })

tsun
  .to('#sun', { y: '+=80', ease: 'power1.inOut', duration: 6 })
