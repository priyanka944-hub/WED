var img = new Image();
img.src = 'https://arcadiacmsprodblob.blob.core.windows.net/cmsstorage/arcadia/media/100most/yose1smallsummer.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30;
var scale = 1.05;
var y = -4.5; 

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
      
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
       
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    ctx = document.getElementById('canvas').getContext('2d');

   
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); 
    if (imgW <= CanvasXSize) {
        
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        // draw additional image1
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    
    else {
       
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
   
    ctx.drawImage(img, x, y,imgW, imgH);
   
    x += dx;
}

var images=[
  "https://bsmedia.business-standard.com/_media/bs/img/article/2021-06/05/full/1622854444-6718.jpg",
  "https://learnenglish.britishcouncil.org/sites/podcasts/files/RS7824_ThinkstockPhotos-506316644-hig.jpg",
  "https://images.assettype.com/freepressjournal/2021-06/72b10276-ba26-4d80-a141-455ec17357f6/info_lead_june_4.jpg"
];

var text =[
  "With this big and challenging picture, the World Environment Day is focus in the ecosystem restoration and its theme is “Reimagine. Recreate. Restore.” Ecosystem restoration means preventing, halting and reversing this damage – to go from exploiting nature to healing it",
  "People celebrate World Environment Day (WED) in many different ways all over the world: planting trees, cleaning up local beaches, organising meetings, joining online protests. Each year the United Nations Environment Programme (UNEP) chooses a particular issue to focus on.",
  "Environment plays an important role in healthy living and the existence of life on planet earth. Earth is a home for different living species and we all are dependent on the environment for food, air, water, and other needs. Therefore, it is important for every individual to save and protect our environment."
];

var i = 0;
function change(){
  if(i==3){
    i=0;
  }
  document.getElementById("image1").src=images[i];
  document.getElementById("label1").innerHTML= "<b>" + text[i] + "</b>";
  i++;
}
