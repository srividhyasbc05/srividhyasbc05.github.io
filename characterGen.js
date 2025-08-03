let avatar;
function preload() {
  baseimage = loadImage("baseimagecg.png");
  baseshading = loadImage("baseshading.PNG");

  for (let i = 1; i <= 7; i++) {
    let im = loadImage("hair" + i + "cg.png");
    hair.push(im);
  }
  for (let i = 1; i <= 5; i++) {
    let im = loadImage("skin" + i + ".PNG");
    skintone.push(im);
  }
  for (let i = 1; i <= 15; i++) {
    let im = loadImage("top" + i + ".PNG");
    tops.push(im);
  }
  for (let i = 1; i <= 8; i++) {
    let im = loadImage("bottom" + i + ".PNG");
    bottoms.push(im);
  }
  for (let i = 1; i <= 5; i++) {
    let im = loadImage("dupatta" + i + ".PNG");
    dupatta.push(im);
  }
  
  for (let i = 1; i <= 7; i++) {
    let im = loadImage("necklace" + i + ".PNG");
    necklaces.push(im);
  }
  for (let i = 1; i <= 6; i++) {
    let im = loadImage("earrings" + i + ".PNG");
    earrings.push(im);
  }
  for (let i = 7; i <= 11; i++) {
    let im = loadImage("bangles" + i + ".PNG");
    bangles.push(im);
  }
  for (let i = 1; i <= 4; i++) {
    let im = loadImage("nosering" + i + ".PNG");
    noserings.push(im);
  }
  for (let i = 1; i <= 2; i++) {
    let im = loadImage("pottu" + i + ".PNG");
    pottus.push(im);
  }
}

let baseimage;
let skintone = [];
let hair = [];
let tops= [];
let dupatta= [];
let bottoms= [];
let necklaces= [];
let earrings= [];
let bangles= [];
let noserings= [];
let pottus= [];

class character {
  constructor(x, y, cheight) {
    this.x = x;
    this.y = y;
    this.cheight = cheight;
    this.skinindex = 0;
    this.hairindex = 0;
    this.topindex = 0;
    this.dupattaindex = 0;
    this.bottomindex = 0;
    this.necklaceindex = 0;
    this.earringindex= 0;
    this.bangleindex= 0;
    this.noseringindex=0
    this.pottuindex=0
  }
  display() {
    skintone[this.skinindex].resize(0, this.cheight);
    image(skintone[this.skinindex], this.x, this.y);
    
    baseshading.resize(0, this.cheight);
    image(baseshading, this.x, this.y);
    
    baseimage.resize(0, this.cheight);
    image(baseimage, this.x, this.y);
    
    //print(this.bottomindex)
    //print(bottoms[this.bottomindex])
    bottoms[this.bottomindex].resize(0, this.cheight);
    image(bottoms[this.bottomindex], this.x, this.y);
    
  pottus[this.pottuindex].resize(0, this.cheight);
    image(pottus[this.pottuindex], this.x, this.y);
    
    tops[this.topindex].resize(0, this.cheight);
    image(tops[this.topindex], this.x, this.y);
    
    
    dupatta[this.dupattaindex].resize(0, this.cheight);
    image(dupatta[this.dupattaindex], this.x, this.y);
    
    necklaces[this.necklaceindex].resize(0, this.cheight);
    image(necklaces[this.necklaceindex], this.x, this.y);
    
    hair[this.hairindex].resize(0, this.cheight);
    image(hair[this.hairindex], this.x, this.y);
    
    //print(this.necklaceindex)
    //print(necklaces)
    
    
    earrings[this.earringindex].resize(0, this.cheight);
    image(earrings[this.earringindex], this.x, this.y);
    
    bangles[this.bangleindex].resize(0, this.cheight);
    image(bangles[this.bangleindex], this.x, this.y);
    
    noserings[this.noseringindex].resize(0, this.cheight);
    image(noserings[this.noseringindex], this.x, this.y);
  }
  changeoutfit() {
    //print("changing outfit");
    this.hairindex= int(random(0, hair.length));
    this.topindex= int(random(0, tops.length));
    this.dupattaindex= int(random(0, dupatta.length));
    this.bottomindex= int(random(0, bottoms.length));
    this.earringindex= int(random(0, earrings.length));
    this.bangleindex= int(random(0, bangles.length));
    this.necklaceindex= int(random(0, necklaces.length));
    this.noseringindex= int(random(0, noserings.length));
    this.pottusindex= int(random(0, pottus.length));
    //this.skinindex= int(random(0, skintone.length));
  }
  changeHair() {
    //print("hair is changing");
    this.hairindex++;
    if (this.hairindex > hair.length - 1) {
      this.hairindex = 0;
    }
  }
  changeTop() {
    this.topindex++;
    if (this.topindex > tops.length - 1) {
      this.topindex = 0;
    }
  }
  changeDupatta() {
    this.dupattaindex++;
    if (this.dupattaindex > dupatta.length - 1) {
      this.dupattaindex = 0;
    }
  }
  changeBottom() {
    this.bottomindex++;
    if (this.bottomindex > bottoms.length - 1) {
      this.bottomindex = 0;
    }
  }
  changeNecklace() {
    this.necklaceindex++;
    if (this.necklaceindex > necklaces.length - 1) {
      this.necklaceindex = 0;
    }
  }
  changeEarrings() {
    this.earringindex++;
    if (this.earringindex > earrings.length - 1) {
      this.earringindex = 0;
    }
  }
  changeBangles() {
    this.bangleindex++;
    if (this.bangleindex > bangles.length - 1) {
      this.bangleindex = 0;
    }
  }
  changeSkintone() {
    this.skinindex++;
    if (this.skinindex > skintone.length - 1) {
      this.skinindex = 0;
    }
  }
  changeNoseRing() {
    this.noseringindex++;
    if (this.noseringindex > noserings.length - 1) {
      this.noseringindex = 0;
    }
  }
}

let characterinstances;

function setup() {
  let avatar= createCanvas(250, 250);
  characterinstances = new character(width/10, 25, height);
  print(necklaces)

  let hairbutton = createButton("hair");
  hairbutton.mousePressed(() => characterinstances.changeHair());
  
  let topbutton = createButton("top");
  topbutton.mousePressed(() => characterinstances.changeTop());
  
  let dupattabutton = createButton("dupatta");
  dupattabutton.mousePressed(() => characterinstances.changeDupatta());
  
  let bottombutton = createButton("bottom");
  bottombutton.mousePressed(() => characterinstances.changeBottom());
  
  let necklacebutton = createButton("necklace");
  necklacebutton.mousePressed(() => characterinstances.changeNecklace());
  
  let earringbutton = createButton("earrings");
  earringbutton.mousePressed(() => characterinstances.changeEarrings());
  
  let banglebutton = createButton("bangles");
  banglebutton.mousePressed(() => characterinstances.changeBangles());
  
  let noseringbutton = createButton("nosering");
  noseringbutton.mousePressed(() => characterinstances.changeNoseRing());
  
  let skinbutton = createButton("skin color");
  skinbutton.mousePressed(() => characterinstances.changeSkintone());
  
  let randombutton = createButton("random fit!");
  randombutton.mousePressed(() => characterinstances.changeoutfit());
  //button.position();
  
  let savebutton = createButton("save image!");
  savebutton.mousePressed(() => saveCanvas(avatar,'myAvatar', '.jpg'));
 
}

function draw() {
  background('white');
  characterinstances.display();
}


