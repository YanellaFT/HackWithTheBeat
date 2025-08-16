/*TO DO:
1. record feature
 */

/* VARIABLES */
let piano;
let Ckey, Dkey, Ekey, Fkey, Gkey, Akey, Bkey;
let Dbkey, Ebkey, Gbkey, Abkey, Bbkey;
let CkeyAud, DkeyAud, EkeyAud, FkeyAud, GkeyAud, AkeyAud, BkeyAud;
let DbkeyAud, EbkeyAud, GbkeyAud, AbkeyAud, BbkeyAud;
let Ccir, Dcir, Ecir, Fcir, Gcir, Acir, Bcir;
let Dbcir, Ebcir, Gbcir, Abcir, Bbcir;
let showNoteNames, hideNoteNames;

function preload(){
  piano = loadImage("assets/piano.png");
  starBg = loadImage("assets/starbackground.gif");

  Crock = loadImage("assets/Crock-removebg-preview.png");  
  Drock = loadImage("assets/Drock-removebg-preview.png");
  Erock = loadImage("assets/Erock-removebg-preview.png");
  Frock = loadImage("assets/Frock-removebg-preview.png");
  Grock = loadImage("assets/Grock-removebg-preview.png");
  Arock = loadImage("assets/Arock-removebg-preview.png");
  Brock = loadImage("assets/Brock-removebg-preview.png");

  Dbstar = loadImage("assets/Dbrock-removebg-preview.png");
  Ebstar = loadImage("assets/Ebrock-removebg-preview.png");
  Gbstar = loadImage("assets/Gbrock-removebg-preview.png");
  Abstar = loadImage("assets/Abrock-removebg-preview.png");
  Bbstar = loadImage("assets/Bbrock-removebg-preview.png");

  CkeyAud = loadSound("assets/Ckey.webm");
  DkeyAud = loadSound("assets/Dkey.webm");
  EkeyAud = loadSound("assets/Ekey.webm");
  FkeyAud = loadSound("assets/Fkey.webm");
  GkeyAud = loadSound("assets/Gkey.webm");
  AkeyAud = loadSound("assets/Akey.webm");
  BkeyAud = loadSound("assets/Bkey.webm");

  DbkeyAud = loadSound("assets/Dbkey.webm");
  EbkeyAud = loadSound("assets/Ebkey.webm");
  GbkeyAud = loadSound("assets/Gbkey.webm");
  AbkeyAud = loadSound("assets/Abkey.webm");
  BbkeyAud = loadSound("assets/Bbkey.webm");
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
  Ccir.visible = false;
  Ccir.color = "red";
  Ccir.image = Crock;
  Crock.resize(0, 30);

  Dcir = new Sprite(-130, -250, "k")
  Dcir.visible = false;
  Dcir.color = "orange";
  Dcir.image = Drock; 

  Ecir = new Sprite(-220, -250, "k");
  Ecir.image = Erock; 
  Ecir.color = "yellow";
  Ecir.visible = false;

  Fcir = new Sprite(-295, -250, "k");
  Fcir.image = Frock;
  Fcir.color = "lightgreen";
  Fcir.visible = false;

  Gcir = new Sprite(-385, -250, "k");
  Gcir.image = Grock;
  Gcir.color = "blue";
  Gcir.visible = false;

  Acir = new Sprite(-470, -250, "k");
  Acir.image = Arock;
  Acir.color = "purple";
  Acir.visible = false;

  Bcir = new Sprite(-565, -250, "k");
  Bcir.image = Brock;
  Bcir.color = "pink";
  Bcir.visible = false;

  Dbcir = new Sprite(-87, -250, "k");
  Dbcir.image = Dbstar;
  Dbcir.color = "#d0580eff";
  Dbcir.visible = false;

  Ebcir = new Sprite(-173, -250, "k");
  Ebcir.image = Ebstar;
  Ebcir.color = "#d19215ff";
  Ebcir.visible = false;

  Gbcir = new Sprite(-345, -250, "k");
  Gbcir.image = Gbstar;
  Gbcir.color = "#08905aff";
  Gbcir.visible = false;

  Abcir = new Sprite(-427, -250, "k");
  Abcir.image = Abstar;
  Abcir.color = "#5714c1ff";
  Abcir.visible = false;

  Bbcir = new Sprite(-512, -250, "k");
  Bbcir.image = Bbstar;
  Bbcir.color = "#d20cc2ff";
  Bbcir.visible = false;


  //noteName button
  showNoteNames = createButton("Show Note Names");
  showNoteNames.position(470, 30);
  showNoteNames.style("font-size", "12px");
  showNoteNames.style("color", "black");
  showNoteNames.style("background-color", "white");
  showNoteNames.style("border-color", "white");
  showNoteNames.style("border-width", "5px");
  showNoteNames.style("border-radius", "7px");
  showNoteNames.mousePressed(noteNamesShow);

  hideNoteNames = createButton("Hide Note Names");
  hideNoteNames.position(-470, -30);
  hideNoteNames.style("font-size", "12px");
  hideNoteNames.style("color", "black");
  hideNoteNames.style("background-color", "white");
  hideNoteNames.style("border-color", "white");
  hideNoteNames.style("border-width", "5px");
  hideNoteNames.style("border-radius", "7px");
  hideNoteNames.mousePressed(hideNotes);


  recordButton = createButton("Start Recording");
  recordButton.position(478, 70);
  recordButton.style("font-size", "12px");
  recordButton.style("color", "black");
  recordButton.style("background-color", "white");
  recordButton.style("border-color", "white");
  recordButton.style("border-width", "5px");
  recordButton.style("border-radius", "7px");
  recordButton.mousePressed(startRecording());
}

function draw() {
  background(starBg);//"#555661"
  image(piano, 0, 250, 600, 250);
  
  fill("white");
  textFont("Verdana");
  text("Play the piano and watch it make colorful art. \nYou can use the keyboard with note names \nor your mouse to click on the piano keys.", 15, 25);

  if (Ckey.mouse.pressed() || kb.pressed("c")) {
    print("Ckey");
    CkeyAud.play();

    Ccir.pos = {x: 40, y: 250};
    Ccir.visible = true;
    Ccir.vel.y = random(-8, -1);
    Crock.resize(0, random(20, 80));
  }

  if (Dkey.mouse.pressed() || kb.pressed("d")) {
    print("Dkey");
    DkeyAud.play();

    Dcir.pos = {x: 130, y: 250};
    Dcir.visible = true;
    Dcir.vel.y = random(-8, -1);
    Drock.resize(0, random(20, 80));
  }

  if (Ekey.mouse.pressed() || kb.pressed("e")) {
    print("Ekey");
    EkeyAud.play();

    Ecir.pos = {x: 220, y: 250};
    Ecir.visible = true;
    Erock.resize(0, random(20, 80));
    Ecir.vel.y = random(-8, -1);
  }

  if (Fkey.mouse.pressed() || kb.pressed("f")) {
    print("Fkey");
    FkeyAud.play();

    Fcir.pos = {x: 295, y: 250};
    Fcir.visible = true;
    Frock.resize(0, random(20, 80));
    Fcir.vel.y = random(-8, -1);
  }

  if (Gkey.mouse.pressed() || kb.pressed("g")) {
    print("Gkey");
    GkeyAud.play();

    Gcir.pos = {x: 385, y: 250};
    Gcir.visible = true;
    Grock.resize(0, random(20, 80));
    Gcir.vel.y = random(-8, -1);
  }

  if (Akey.mouse.pressed() || kb.pressed("a")) {
    print("Akey");
    AkeyAud.play();

    Acir.pos = {x: 470, y: 250};
    Acir.visible = true;
    Arock.resize(0, random(20, 80));
    Acir.vel.y = random(-8, -1);
  }

  if (Bkey.mouse.pressed() || kb.pressed("b")) {
    print("Bkey");
    BkeyAud.play();

    Bcir.pos = {x: 565, y: 250};
    Bcir.visible = true;
    Brock.resize(0, random(20, 80));
    Bcir.vel.y = random(-8, -1);
  }

  if (Dbkey.mouse.pressed() || kb.pressed("1")) {
    print("Dbkey");
    DbkeyAud.play();

    Dbcir.pos = {x: 87, y: 250};
    Dbcir.visible = true;
    Dbstar.resize(0, random(10, 40));
    Dbcir.vel.y = random(-8, -1);
  }

  if (Ebkey.mouse.pressed() || kb.pressed("2")) {
    print("Ebkey");
    EbkeyAud.play();

    Ebcir.pos = {x: 173, y: 250};
    Ebcir.visible = true;
    Ebstar.resize(0, random(10, 40));
    Ebcir.vel.y = random(-8, -1);
  }

  if (Gbkey.mouse.pressed() || kb.pressed("3")) {
    print("Gbkey");
    GbkeyAud.play();

    Gbcir.pos = {x: 345, y: 250};
    Gbcir.visible = true;
    Gbstar.resize(0, random(10, 40));
    Gbcir.vel.y = random(-8, -1);
  }  

  if (Abkey.mouse.pressed() || kb.pressed("4")) {
    print("Abkey");
    AbkeyAud.play();

    Abcir.pos = {x: 427, y: 250};
    Abcir.visible = true;
    Abstar.resize(0, random(10, 40));
    Abcir.vel.y = random(-8, -1);
  }  

  if (Bbkey.mouse.pressed() || kb.pressed("5")) {
    print("Bbkey");
    BbkeyAud.play();

    Bbcir.pos = {x: 512, y: 250};
    Bbcir.visible = true;
    Bbstar.resize(0, random(10, 40)); 
    Bbcir.vel.y = random(-8, -1);
  }  

}

/* FUNCTIONS */
function noteNamesShow() {
  showNoteNames.position(-470, -30);
  hideNoteNames.position(470, 30);

  fill("black");
  Ckey.text = "C";
  Dkey.text = "D";
  Ekey.text = "E";
  Fkey.text = "F";
  Gkey.text = "G";
  Akey.text = "A";
  Bkey.text = "B";

  Dbkey.textColor = '#ffffffff';
  Ebkey.textColor = '#ffffffff';
  Gbkey.textColor = '#ffffffff';
  Abkey.textColor = '#ffffffff';
  Bbkey.textColor = '#ffffffff';

  Dbkey.text = "C#/ \nDb \n(1)";
  Ebkey.text = "D#/ \nEb \n(2)";
  Gbkey.text = "F#/ \nGb \n(3)";
  Abkey.text = "G#/ \nAb \n(4)";
  Bbkey.text = "A#/ \nBb \n(5)";
}
function hideNotes() {
  showNoteNames.position(470, 30);
  hideNoteNames.position(-470, -30);

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


function startRecording() {
  //saveGif('myRecording', 10);
  canvas.captureStream();
  Audio.ctx();
}