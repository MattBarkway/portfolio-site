import {useEffect, useRef} from "react";
import '../styles/styles.css';
import * as THREE from "three";

const App = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        scene.background = new THREE.TextureLoader().load('/static/space2.jpeg');
        camera.position.z = 30;

        const ambientLight = new THREE.AmbientLight(0xffffff);
        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(5, 5, 5);
        scene.add(ambientLight, pointLight);


        //ß
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.1, 50, 50);
            const material = new THREE.MeshBasicMaterial({color: 0xAE88D1});
            const star = new THREE.Mesh(geometry, material);

            const [x, y, z] = Array(3)
                .fill()
                .map(() => THREE.MathUtils.randFloatSpread(500));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(2000).fill().forEach(addStar);
        //
        let theta = 0;
        let radius = 100;
        const animate = function () {
            requestAnimationFrame(animate);
            theta += 0.1;
            camera.position.x = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
            camera.position.y = radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
            camera.position.z = radius * Math.cos( THREE.MathUtils.degToRad( theta ) );
            camera.lookAt( scene.position );
            renderer.render(scene, camera);
        };
        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener("resize", onWindowResize, false);
        animate();
    }, []);

    return (
        <div className="canvas" ref={mountRef}>
        </div>
    );
}

export default App;