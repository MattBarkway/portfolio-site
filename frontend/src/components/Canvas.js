import {useEffect, useRef} from "react";
import '../styles/styles.css';
import * as THREE from "three";
import {BufferAttribute} from "three";

const App = () => {
    // TODO on clicking link, have all the stars fly away and leave plain background
    //  maybe also animate cards to have one that was clicked move and grow
    //  while others fly off
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        renderer.setClearColor(new THREE.Color('#20272b'))
        camera.position.z = 5;

        const ambientLight = new THREE.AmbientLight(0xffffff);
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);
        scene.add(ambientLight, pointLight);


        // Star-field
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i ++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }
        particlesGeometry.setAttribute('position', new BufferAttribute(posArray, 3));
        const material = new THREE.PointsMaterial({ size: 0.005 });
        const particlesMesh = new THREE.Points(particlesGeometry, material)

        scene.add(particlesMesh);

        const animate = function () {
            // torus.rotation.x += 0.01;
            // torus.rotation.y += 0.005;
            // torus.rotation.z += 0.01;
            targetX = mouseX * .001;
            targetY = mouseY * .001;
            if ( particlesMesh ) {
                particlesMesh.rotation.y += 0.02 * ( targetX - particlesMesh.rotation.y );
                particlesMesh.rotation.x += 0.02 * ( targetY - particlesMesh.rotation.x );
            }
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        let mouseX = 0;
        let targetX = 0;

        let mouseY = 0;
        let targetY = 0;

        let registerMousePos = function (event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener('mousemove', registerMousePos);
        animate();
    }, []);

    return (
        <div className="canvas" ref={mountRef}>
        </div>
    );
}

export default App;