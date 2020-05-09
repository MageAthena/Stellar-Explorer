class Star{
    constructor(txtLine){
        
        this.name = txtLine.slice(0,28).trim();
        this.angular = {
            ra:Number(txtLine.slice(28,39).trim()),
            dec:Number(txtLine.slice(39,49).trim()),
            r:Number(txtLine.slice(69,80).trim()),
        };
        this.cart = {
            x:Number(txtLine.slice(85,95).trim()),
            y:Number(txtLine.slice(95,105).trim()),
            z:Number(txtLine.slice(105,115).trim()),
        }
        this.vmag = Number(txtLine.slice(49,59).trim());
        this.jmag = Number(txtLine.slice(59,69).trim());

        this.type = txtLine.slice(117,120).trim();

        this.spec = txtLine.slice(121,131).trim();
        var specClass = this.spec.slice(0,1);
        var specColours = {
            "O": new THREE.Color("#92B5FF"),
            "B": new THREE.Color("#A2C0FF"),
            "A": new THREE.Color("#D5E0FF"),
            "F": new THREE.Color("#F9F5FF"),
            "G": new THREE.Color("#FFEDE3"),
            "K": new THREE.Color("#FFDAB5"),
            "M": new THREE.Color("#FFB56C"),
        }

        this.Mv = Number(txtLine.slice(131,137).trim());
        this.Mj = Number(txtLine.slice(137,142).trim());

        this.visLum = Number(txtLine.slice(143,155).trim());
        this.volLum = Number(txtLine.slice(155,168).trim());

        this.mass = Number(txtLine.slice(169,175).trim());
        this.radius = Number(txtLine.slice(182,188).trim());

        this.observedValue = 1 / Math.pow(this.mass - 1,2)
        this.naturalValue = this.observedValue * (0.5 + Math.random())
        this.manufacturedValue = 0;



        if (this.radius >0.2){
            var geometry = new THREE.SphereGeometry( 1, 64, 64 );
            var material = new THREE.MeshBasicMaterial({color:specColours[specClass]});
            this.mesh =  new THREE.Mesh( geometry, material );

            this.mesh.scale.setScalar(this.radius);
            this.mesh.position.set(this.cart.x,this.cart.y,this.cart.z)
            scene.add(this.mesh)
        }




    }
}