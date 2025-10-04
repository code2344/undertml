// Themes the UNDERTML site pages.
// theme = str
var defaulttheme = "dark";

// Script Code
var str = q('theme'); // Grab 'theme' query value
var link = document.getElementById("theme"); 
var theme = defaulttheme;
try {
// Basic Themes
  if (str === 'Default') {
    theme = defaulttheme;
  }
  else if (str === 'Debug') {
    theme = "debug";
  }
  else if (str === 'Dark') {
    theme = "dark";
  }
  else if (str === 'Light') {
    theme = "light";
  }
  else if (str === 'TobyFox') {
    theme = "TobyFox";
  }
  else if (str === 'Dogs') {
    theme = "dogs";
  }

// Location Themes
  else if (str === 'Ruins') {
    theme = "ruins";
  }
  else if (str === 'Snowdin') {
    theme = "snowdin";
  }
  else if (str === "Grillby's" || str === 'Grillbys') {
    theme = "TobyFox";
  }
  else if (str === 'Waterfall') {
    theme = "waterfall";
  }
  else if (str === 'Hotland') {
    theme = "hotland";
  }
  else if (str === 'The Core' || str === 'TheCore' || str === 'Core') {
    theme = "core";
  }
  else if (str === 'Mettaton Resort' || str === 'MTT Resort' || str === 'MTTResort') {
    theme = "mttresort";
  }
  else if (str === 'True Lab' || str === 'TrueLab') {
    theme = "truelab";
  }
  else if (str === 'Spider Bake Sale' || str === 'Spider Bakesale' || str === 'SpiderBakeSale') {
    theme = "spidersale";
  }

// Main Character Themes
  else if (str === 'Frisk') {
    theme = "frisk";
  }
  else if (str === 'Chara') {
    theme = "chara";
  }
  else if (str === 'Flowey') {
    theme = "flowey";
  }
  else if (str === 'Toriel') {
    theme = "toriel";
  }
  else if (str === 'Sans') {
    theme = "sans-c";
  }
  else if (str === 'Papyrus') {
    theme = "papyrus";
  }
  else if (str === 'Undyne') {
    theme = "undyne";
  }
  else if (str === 'Alphys') {
    theme = "alphys";
  }
  else if (str === 'Mettaton') {
    theme = "mtt";
  }
  else if (str === 'Asgore') {
    theme = "asgore";
  }

// Other Character Themes
  else if (str === 'Temmie' || str === 'Tem') {
    theme = "temmie";
  }
  else if (str === 'Napstablook' || str === 'Napsta' || str === 'Blooky') {
    theme = "napsta";
  }
  else if (str === 'Monster Kid' || str === 'MonsterKid') {
    theme = "mkid";
  }
  else if (str === 'Echo Flower' || str === 'EchoFlower') {
    theme = "ecflw";
  }

// Bonus Themes
  else if (str === 'JackSepticEye') {
    theme = "jse";
  }  else if (str === 'Markiplier' || str === 'Markimoo') {
    theme = "mkr";
  }
  else if (str === 'PewDiePie' || str === 'Pewds') {
    theme = "pewds";
  }
  else if (str === 'The Game Theorists' || str === 'TheGameTheorists' || str === 'Game Theory' || str === 'GameTheory' || str === 'MatthewPatrick13') {
    theme = "gmtheory";
  }

// Else Code (for errors)
  else {
  }
}
// debug
catch(err) {
  try {
    var p = document.createElement("p"); 
    p.innerHTML = 'query/theme.js: ' + err.message; 
    document.getElementById("bugboxprint").appendChild(p);
  } catch(innerErr) {
    // Silently fail if bugboxprint element doesn't exist
  }
}
// Exit Code
link.href = "css/theme/"+theme+".css";
