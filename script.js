/* VARIABLES */
let piano;
let Ckey, Dkey, Ekey, Fkey, Gkey, Akey, Bkey;
let Dbkey, Ebkey, Gbkey, Abkey, Bbkey;
let CkeyAud, DkeyAud, EkeyAud, FkeyAud, GkeyAud, AkeyAud, BkeyAud;
let Ccir, Dcir, Ecir, Fcir, Gcir, Acir, Bcir;
let showNoteNames, hideNoteNames;
let showAgain = true;


function preload(){
  piano = loadImage("assets/piano.png");

  CkeyAud = loadSound("assets/Ckey.webm");
  DkeyAud = loadSound("assets/Dkey.webm");
  EkeyAud = loadSound("assets/Ekey.webm");
  FkeyAud = loadSound("assets/Fkey.webm");
  GkeyAud = loadSound("assets/Gkey.webm");
  AkeyAud = loadSound("assets/Akey.webm");
  BkeyAud = loadSound("assets/Bkey.webm");
}


function setup() {
  createCanvas(600,500);

  noStroke();
  //Keys
  Ckey = new Sprite(45, 445, 75, 100, "k");
  Ckey.color = "white";

  Dkey = new Sprite(130, 445, 75, 100, "k");
  Dkey.color = "white";

  Ekey = new Sprite(215, 445, 75, 100, "k");
  Ekey.color = "white";

  Fkey = new Sprite(300, 445, 75, 100, "k");
  Fkey.color = "white";

  Gkey = new Sprite(385, 445, 75, 100, "k");
  Gkey.color = "white";

  Akey = new Sprite(470, 445, 75, 100, "k");
  Akey.color = "white";

  Bkey = new Sprite(555, 445, 75, 100, "k");
  Bkey.color = "white";

  Dbkey = new Sprite(87, 339, 37, 100, "k");
  Dbkey.color = "black";

  Ebkey = new Sprite(174, 339, 37, 100, "k");
  Ebkey.color = "black";

  Gbkey = new Sprite(344, 339, 37, 100, "k");
  Gbkey.color = "black";

  Abkey = new Sprite(427, 339, 37, 100, "k");
  Abkey.color = "black";

  Bbkey = new Sprite(512, 339, 37, 100, "k");
  Bbkey.color = "black";


  //bubbles
  Ccir = new Sprite(-40, -250, "k");
  Ccir.diameter = 10;
  Ccir.color = "red";
  Ccir.visible = false;

  Dcir = new Sprite(-130, -250, "k")
  Dcir.diameter = 10;
  Dcir.color = "orange";
  Dcir.visible = false;

  Ecir = new Sprite(-220, -250, "k");
  Ecir.diameter = 10;
  Ecir.color = "yellow";
  Ecir.visible = false;

  Fcir = new Sprite(-295, -250, "k");
  Fcir.diameter = 10;
  Fcir.color = "lightgreen";
  Fcir.visible = false;

  Gcir = new Sprite(-385, -250, "k");
  Gcir.diameter = 10;
  Gcir.color = "blue";
  Gcir.visible = false;

  Acir = new Sprite(-470, -250, "k");
  Acir.diameter = 10;
  Acir.color = "purple";
  Acir.visible = false;

  Bcir = new Sprite(-565, -250, "k");
  Bcir.diameter = 10;
  Bcir.color = "pink";
  Bcir.visible = false;


  //noteName button
  showNoteNames = new Sprite(530, 30, 115, 20, "k");
  showNoteNames.text = "Show Note Names";
  showNoteNames.color = "white";

  hideNoteNames = new Sprite(-530, -30, 115, 20, "k");
  hideNoteNames.text = "Hide Note Names";
  hideNoteNames.color = "white";

}

function draw() {
  background("#555661");
  image(piano, 0, 250, 600, 250);
  
  fill("black");
  textFont("Verdana");
  text("Play the piano and watch it make colorful art. \nYou can use the keyboard with note names \nor your mouse to click on the piano keys.", 15, 25);

  if (Ckey.mouse.pressed() || kb.pressed("c")) {
    print("Ckey");
    CkeyAud.play();

    Ccir.pos = {x: 40, y: 250};
    Ccir.visible = true;
    Ccir.diameter = random(10, 50);
    Ccir.vel.y = random(-8, -1);
  }

  if (Dkey.mouse.pressed() || kb.pressed("d")) {
    print("Dkey");
    DkeyAud.play();

    Dcir.pos = {x: 130, y: 250};
    Dcir.visible = true;
    Dcir.diameter = random(10, 50);
    Dcir.vel.y = random(-8, -1);
  }

  if (Ekey.mouse.pressed() || kb.pressed("e")) {
    print("Ekey");
    EkeyAud.play();

    Ecir.pos = {x: 220, y: 250};
    Ecir.visible = true;
    Ecir.diameter = random(10, 50);
    Ecir.vel.y = random(-8, -1);
  }

  if (Fkey.mouse.pressed() || kb.pressed("f")) {
    print("Fkey");
    FkeyAud.play();

    Fcir.pos = {x: 295, y: 250};
    Fcir.visible = true;
    Fcir.diameter = random(10, 50);
    Fcir.vel.y = random(-8, -1);
  }

  if (Gkey.mouse.pressed() || kb.pressed("g")) {
    print("Gkey");
    GkeyAud.play();

    Gcir.pos = {x: 385, y: 250};
    Gcir.visible = true;
    Gcir.diameter = random(10, 50);
    Gcir.vel.y = random(-8, -1);
  }

  if (Akey.mouse.pressed() || kb.pressed("a")) {
    print("Akey");
    AkeyAud.play();

    Acir.pos = {x: 470, y: 250};
    Acir.visible = true;
    Acir.diameter = random(10, 50);
    Acir.vel.y = random(-8, -1);
  }

  if (Bkey.mouse.pressed() || kb.pressed("b")) {
    print("Bkey");
    BkeyAud.play();

    Bcir.pos = {x: 565, y: 250};
    Bcir.visible = true;
    Bcir.diameter = random(10, 50);
    Bcir.vel.y = random(-8, -1);
  }

  if (Dbkey.mouse.pressed() || kb.pressed("1")) {
    print("Dbkey");
    //DbkeyAud.play();
  }

  if (Ebkey.mouse.pressed() || kb.pressed("2")) {
    print("Ebkey");
    //EbkeyAud.play();
  }

  if (Gbkey.mouse.pressed() || kb.pressed("3")) {
    print("Gbkey");
    //GbkeyAud.play();
  }  

  if (Abkey.mouse.pressed() || kb.pressed("4")) {
    print("Abkey");
    //AbkeyAud.play();
  }  

  if (Bbkey.mouse.pressed() || kb.pressed("5")) {
    print("Bbkey");
    //BbkeyAud.play();
  }  

  //noteName button
  if (showNoteNames.mouse.pressed()) {
    showNoteNames.pos = {x: -530, y: -30};
    hideNoteNames.pos = {x: 530, y: 30}

    fill("black");
    Ckey.text = "C";
    Dkey.text = "D";
    Ekey.text = "E";
    Fkey.text = "F";
    Gkey.text = "G";
    Akey.text = "A";
    Bkey.text = "B";

    fill('white');
    Dbkey.text = "Db \n(1)";
    Ebkey.text = "Eb \n(2)";
    Gbkey.text = "Gb \n(3)";
    Abkey.text = "Ab \n(4)";
    Bbkey.text = "Bb \n(5)";
  } 
  if (hideNoteNames.mouse.pressed()) {
    showNoteNames.pos = {x: 530, y: 30}
    hideNoteNames.pos = {x: -530, y: -30};

    Ckey.text = " ";
    Dkey.text = " ";
    Ekey.text = " ";
    Fkey.text = " ";
    Gkey.text = " ";
    Akey.text = " ";
    Bkey.text = " ";

    Dbkey.text = " ";
    Ebkey.text = " ";
    Gbkey.text = " ";
    Abkey.text = " ";
    Bbkey.text = " ";
  }

}

/* FUNCTIONS */
