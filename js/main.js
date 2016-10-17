
///<reference path="babylon.2.1.d.ts" />

var jsApp = jsApp || {};

jsApp.init = function () {
    
    var canvas = document.getElementById('renderCanvas');
    //Engine Object
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 15, BABYLON.Vector3.Zero(), scene);
     // var camera =new BABYLON.FreeCamera("camera", 0, 0, 15, BABYLON.Vector3.Zero(), scene);
      camera.attachControl(canvas);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity=0.5;
    scene.clearColor=new BABYLON.Color3(0,0,0);
    
    //Sun  size 3
    var sun = BABYLON.Mesh.CreateSphere("sun", 16, 4, scene);
    var sunMaterial = new BABYLON.StandardMaterial("sunMat", scene);
    sunMaterial.emissiveTexture =new BABYLON.Texture("assets/sun.jpg",scene);
    sunMaterial.diffuseColor=new BABYLON.Color3(0,0,0);
    sunMaterial.specularColor=new BABYLON.Color3(0,0,0);
    sun.material=sunMaterial;

    //Code for Planets
    //1. Mecury 
    var planet1 = BABYLON.Mesh.CreateSphere("planet1", 16, 0.6, scene);
    planet1.position.x = 3;
    
    var planetMaterial = new BABYLON.StandardMaterial("planetMat", scene);
    planetMaterial.diffuseTexture = new BABYLON.Texture('assets/mercurymap.jpg',scene);
    planetMaterial.specularColor=new BABYLON.Color3(0,0,0);
    planet1.material = planetMaterial;
    planet1.orbit={ radius : planet1.position.x , speed : 0.01, angle : 0 }
  
    //2. Venus
    var venus = BABYLON.Mesh.CreateSphere("venus",16,0.5,scene);
    venus.position.x = 4;
    var venusMaterial=new BABYLON.StandardMaterial("venusMap",scene);
    venusMaterial.diffuseTexture=new BABYLON.Texture('assets/venusmap.jpg',scene);
    planetMaterial.specularColor=new BABYLON.Color3(0,0,0);
    venus.material =venusMaterial;
    venus.orbit={radius : venus.position.x , speed : 0.01, angle : 0}

    //3. Earth
    var earth = BABYLON.Mesh.CreateSphere("earth", 16, 0.9, scene);
    earth.position.x = 5.5;
    var earthMaterial = new BABYLON.StandardMaterial("earthMat", scene);
    earthMaterial.diffuseTexture = new BABYLON.Texture('assets/earthmap1k.jpg',scene);
    earthMaterial.specularColor=new BABYLON.Color3(0,0,0);
    earth.material = earthMaterial;
    earth.orbit={ radius : earth.position.x , speed : 0.01, angle : 0 }

    
    //4.Mars
     var mars = BABYLON.Mesh.CreateSphere("mars",16,0.7,scene);
     mars.position.x=6.7;
     var marsMaterial = new BABYLON.StandardMaterial("marsMat",scene);
     marsMaterial.diffuseTexture=new BABYLON.Texture('assets/mars.jpg',scene);
     marsMaterial.specularColor=new BABYLON.Color3(0,0,0);
     mars.material=marsMaterial;
     mars.orbit={radius: mars.position.x , speed:0.01 , angle:0}
    
    
    //5. Jupiter
    var jupiter = BABYLON.Mesh.CreateSphere("sphere",16,1.5,scene);
    jupiter.position.x=8.2;
    var jupiterMaterial= new BABYLON.StandardMaterial("jupiterMat",scene);
    jupiterMaterial.diffuseTexture=new BABYLON.Texture("assets/jupitermap.jpg",scene);
    jupiterMaterial.specularColor=new BABYLON.Color3(0,0,0);
    jupiter.material=jupiterMaterial;
    jupiter.orbit={ radius:jupiter.position.x, speed :0.01 , angle :0} 


    //6. Saturn
    
    //7. Uranus

    //8. Neptune

   scene.beforeRender=function(){

       planet1.position.x=planet1.orbit.radius*Math.sin(planet1.orbit.angle); 
       planet1.position.z=planet1.orbit.radius*Math.cos(planet1.orbit.angle); 
       planet1.orbit.angle+=planet1.orbit.speed;

       earth.position.x=earth.orbit.radius*Math.sin(earth.orbit.angle); 
       earth.position.z=earth.orbit.radius*Math.cos(earth.orbit.angle); 
       earth.orbit.angle+=earth.orbit.speed;

       venus.position.x=venus.orbit.radius*Math.sin(venus.orbit.angle); 
       venus.position.z=venus.orbit.radius*Math.cos(venus.orbit.angle); 
       venus.orbit.angle+=venus.orbit.speed;

       mars.position.x=mars.orbit.radius*Math.sin(mars.orbit.angle); 
       mars.position.z=mars.orbit.radius*Math.cos(mars.orbit.angle); 
       mars.orbit.angle+=mars.orbit.speed;

       jupiter.position.x=jupiter.orbit.radius*Math.sin(jupiter.orbit.angle);
       jupiter.position.z=jupiter.orbit.radius*Math.cos(jupiter.orbit.angle);
       jupiter.orbit.angle+=jupiter.orbit.speed;
   }
                                       

    engine.runRenderLoop(function () {
        scene.render();
    });
}