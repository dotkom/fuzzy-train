import * as Three from 'three';

function draw() {
  const canvasDiv = document.getElementById('canvasDiv');

  if (canvasDiv === null) {
    // This should not ever happen as long as the HTML element exists.
    return;
  }

  const scene = new Three.Scene();
  scene.background = new Three.Color(0x7fc0ef);
  const camera = new Three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new Three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  canvasDiv.appendChild(renderer.domElement);

  const elems = new Three.Group();

  // Drawing
  const earthGeometry = new Three.SphereGeometry(3, 32, 32);
  const earthMaterial = new Three.MeshBasicMaterial({ color: 0x53864e });
  const earth = new Three.Mesh(earthGeometry, earthMaterial);
  elems.add(earth);

  // Add a box too
  const samfundetGeometry = new Three.CylinderGeometry(0.5, 0.5, 0.75, 32);
  const samfundetMaterial = new Three.MeshBasicMaterial({ color: 0xa03033 });
  const samfundet = new Three.Mesh(samfundetGeometry, samfundetMaterial);

  // Move Samfundet a bit out of the center of the earth
  samfundet.position.x = 3;
  // Flip the cube by 90 degrees, which in radians is (Pi / 180 * 90)
  samfundet.rotation.z = (Math.PI / 180) * 90;

  elems.add(samfundet);

  scene.add(elems);

  // Set camera somewhere other than in the middle of the figures.
  camera.position.z = 1;
  camera.position.y = 3;

  animate(renderer, scene, camera);
}

draw();

function animate(
  renderer: Three.WebGLRenderer,
  scene: Three.Scene,
  camera: Three.Camera
): void {
  // Request animation frame from the browser
  requestAnimationFrame(() => animate(renderer, scene, camera));
  renderer.render(scene, camera);

  // Animation
  scene.children[0].rotation.z += 0.01;
}
