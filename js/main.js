
///<reference path="babylon.2.1.d.ts" />

var jsApp = jsApp || {};

jsApp.init = function () {
       /* GUI CREATION when all texture are loaded*/
           
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
    
     //-----------------------SKYBOX-----------------------------------------------------------//
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 50, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("skybox/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;
    //-----------------------SKYBOX-----------------------------------------------------------//
         

   //Adding Material

    var sunMaterial = new BABYLON.StandardMaterial("sunMat", scene);
    sunMaterial.emissiveTexture =new BABYLON.Texture("assets/sun.jpg",scene);
    sunMaterial.diffuseColor=new BABYLON.Color3(0,0,0);
    sunMaterial.specularColor=new BABYLON.Color3(0,0,0);
  
    var planetMaterial = new BABYLON.StandardMaterial("planetMat", scene);
    planetMaterial.diffuseTexture = new BABYLON.Texture('assets/mercurymap.jpg',scene);
    planetMaterial.specularColor=new BABYLON.Color3(0,0,0);



    var earthMaterial = new BABYLON.StandardMaterial("earthMat", scene);
    earthMaterial.diffuseTexture = new BABYLON.Texture('assets/earthmap.jpg',scene);
    earthMaterial.specularColor=new BABYLON.Color3(0,0,0);
   //----------------------------- Creating Planet---------------------------------------//
  

  


   
    //Sun  size 3  
    var sun = BABYLON.Mesh.CreateSphere("sun", 16, 3, scene);
        //sun light
    var sunLight = new BABYLON.PointLight('sunLight', BABYLON.Vector3.Zero(), scene);
    sunLight.intensity = 5;
    sun.material=sunMaterial;

    //Code for Planets
    //1. Mecury 
    var mercury = BABYLON.Mesh.CreateSphere("planet1", 16, 0.6, scene);
    mercury.position.x = 3;
    mercury.material = planetMaterial;
    mercury.orbit = { radius : mercury.position.x , speed : 0.03, angle : 0 }

             
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
    earth.material = earthMaterial;
    earth.orbit={ radius : earth.position.x , speed : 0.03, angle : 0 }
    
    //4.Mars
     var mars = BABYLON.Mesh.CreateSphere("mars",16,0.7,scene);
     mars.position.x=6.7;
     var marsMaterial = new BABYLON.StandardMaterial("marsMat",scene);
     marsMaterial.diffuseTexture=new BABYLON.Texture('assets/mars.jpg',scene);
     marsMaterial.specularColor=new BABYLON.Color3(0,0,0);
     mars.material=marsMaterial;
     mars.orbit={radius: mars.position.x , speed:0.05, angle:0}
    
    
    //5. Jupiter
    var jupiter = BABYLON.Mesh.CreateSphere("sphere",16,1.5,scene);
    jupiter.position.x = 8.2;
    var jupiterMaterial = new BABYLON.StandardMaterial("jupiterMat",scene);
    jupiterMaterial.diffuseTexture = new BABYLON.Texture("assets/jupitermap.jpg",scene);
    jupiterMaterial.specularColor= new BABYLON.Color3(0,0,0);
    jupiter.material=jupiterMaterial;
    jupiter.orbit={ radius:jupiter.position.x, speed :0.02, angle :0} 


    //6. Saturn
  
     var  saturn = BABYLON.Mesh.CreateSphere("sphere",16,1.0,scene);
     saturn.position.x = 9.9;
     var saturnMaterial = new BABYLON.StandardMaterial("saturnMat",scene);
     saturnMaterial.diffuseTexture = new BABYLON.Texture("assets/saturnmap.jpg",scene);
     saturnMaterial.specularColor= new BABYLON.Color3(0,0,0);
     saturn.material=saturnMaterial;
     saturn.orbit={ radius:saturn.position.x , speed :0.01, angle:0 }
      
      //--------------- Saturn Ring-----------------------//
      var saturnRing =BABYLON.Mesh.CreateCylinder("ring",0.01, 1.5, 1.5,30, 2, scene, false);
      saturnRing.position.x=9.9;
      var saturnRingMaterial = new BABYLON.StandardMaterial("saturnRingMat",scene);
      saturnRingMaterial.bumpTexture= new BABYLON.Texture("assets/saturnrings.png",scene);
      saturnRingMaterial.specularColor= new BABYLON.Color3(0,0,0);
      saturnRing.material=saturnRingMaterial;
      saturnRing.orbit={ radius:saturnRing.position.x , speed :0.01, angle:0 }






    //7. Uranus
      var  uranus = BABYLON.Mesh.CreateSphere("sphere",16,1,scene);
      uranus.position.x = 10.9;
      var uranusMaterial = new BABYLON.StandardMaterial("uranusMat",scene);
      uranusMaterial.diffuseTexture = new BABYLON.Texture("assets/uranusmap.jpg",scene);
      uranusMaterial.specularColor= new BABYLON.Color3(0,0,0);
      uranus.material=uranusMaterial;
      uranus.orbit={ radius:uranus.position.x , speed :0.02, angle:0 }     

    //8. Neptune
      var  neptune = BABYLON.Mesh.CreateSphere("sphere",16,1.0,scene);
      neptune.position.x = 11.9;
      var neptuneMaterial = new BABYLON.StandardMaterial("neptuneMat",scene);
      neptuneMaterial.diffuseTexture = new BABYLON.Texture("assets/neptunemap.jpg",scene);
      neptuneMaterial.specularColor= new BABYLON.Color3(0,0,0);
      neptune.material=neptuneMaterial;
      neptune.orbit={ radius:uranus.position.x , speed :0.02, angle:0 }     



   scene.beforeRender=function(){

       mercury.position.x=mercury.orbit.radius*Math.sin(mercury.orbit.angle); 
       mercury.position.z=mercury.orbit.radius*Math.cos(mercury.orbit.angle); 
       mercury.orbit.angle+=mercury.orbit.speed;

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

       saturn.position.x=saturn.orbit.radius*Math.sin(saturn.orbit.angle);
       saturn.position.z=saturn.orbit.radius*Math.cos(saturn.orbit.angle);
       saturn.orbit.angle+=saturn.orbit.speed;

       saturnRing.position.x=saturnRing.orbit.radius*Math.sin(saturnRing.orbit.angle);
       saturnRing.position.z=saturnRing.orbit.radius*Math.cos(saturnRing.orbit.angle);
       saturnRing.orbit.angle+=saturnRing.orbit.speed;



       uranus.position.x=uranus.orbit.radius*Math.sin(uranus.orbit.angle);
       uranus.position.z=uranus.orbit.radius*Math.cos(uranus.orbit.angle);
       uranus.orbit.angle+=uranus.orbit.speed;
       
       neptune.position.x=neptune.orbit.radius*Math.sin(neptune.orbit.angle);
       neptune.position.z=neptune.orbit.radius*Math.cos(neptune.orbit.angle);
       neptune.orbit.angle+=neptune.orbit.speed;
   }
                                       

    engine.runRenderLoop(function () {
        scene.render();
    });
}