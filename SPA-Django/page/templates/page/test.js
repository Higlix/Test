import * as THREE from 'three';

function startGame()
{
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	const canvas = document.getElementById("myCanvas");
	const renderer = new THREE.WebGLRenderer( {stencil: true, canvas: canvas} );
	renderer.setSize( canvas.width, canvas.height );

	camera.aspect = canvas.width / canvas.height;
	camera.updateProjectionMatrix();
	renderer.setSize(canvas.width, canvas.height, true);

	document.getElementById("game").appendChild( renderer.domElement );

	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );

	camera.position.z = 5;

	function animate() {
		if (!isRunning)
			return (0);
		requestAnimationFrame( animate );

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		// console.log("Loop");
		renderer.render( scene, camera );
	}

	animate();
}

startGame();