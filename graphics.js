
var scene;
var camera;
var renderer;
var controls;
var effect;

var ASCIIEffect = false;

function startGraphics(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.01, 1000 );
    camera.position.set(0.001,0,1);
    camera.up.set(0,0,1);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );



    window.addEventListener( 'resize', onWindowResize, false );

    if (ASCIIEffect){
        setAsciiEffect();
        document.body.appendChild( effect.domElement );
        setControls(effect)
    }else{

        document.body.appendChild( renderer.domElement );
        setControls(renderer)
    }


    animate();
}

function setControls(rend){
    controls = new THREE.TrackballControls( camera, rend.domElement );
}

function setAsciiEffect(){
    effect = new THREE.AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
    effect.setSize( window.innerWidth, window.innerHeight );
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'black';
}

function onWindowResize() {

    var aspect = window.innerWidth / window.innerHeight;

    camera.aspect = aspect;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    if (ASCIIEffect){
        effect.setSize( window.innerWidth, window.innerHeight );
    }

    controls.handleResize();

}

function animate() {
    requestAnimationFrame( animate );

    if (ASCIIEffect){
        effect.render( scene, camera );
    }else{
        renderer.render( scene, camera );
    }
}
