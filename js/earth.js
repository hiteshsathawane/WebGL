   var earth = BABYLON.Mesh.CreateSphere("earth", 16, 0.9, scene);
    earth.position.x = 5.5;
    earth.material = earthMaterial;
    earth.orbit={ radius : earth.position.x , speed : 0.03, angle : 0 }