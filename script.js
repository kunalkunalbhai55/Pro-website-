import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

function create3DModel(containerId, modelPath) {
    const container = document.getElementById(containerId);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lights (Taaki bed asli dikhe)
    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    scene.add(topLight);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load(modelPath, function (gltf) {
        const object = gltf.scene;
        scene.add(object);
        
        // Model ko ghumane ke liye
        function animate() {
            requestAnimationFrame(animate);
            object.rotation.y += 0.01; 
            renderer.render(scene, camera);
        }
        animate();
    });

    camera.position.z = 5;
}

// Ab yahan tere 6 models load honge
// Note: Abhi tere paas ek hi bed.glb hai, toh sabme wahi dikhega
create3DModel('model-1', 'bed.glb');
create3DModel('model-2', 'bed.glb');
create3DModel('model-3', 'bed.glb');
create3DModel('model-4', 'bed.glb');
create3DModel('model-5', 'bed.glb');
create3DModel('model-6', 'bed.glb');
                                             
