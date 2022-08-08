if (window.rootpath != null) {
  console.log("rootpath: " + window.rootpath);
} else {
  window.rootpath = "";
  console.log("file in root folder");
}

function getRootFile(filename) {
  return `${window.rootpath}${filename}`;
}

function getImageFile(filename) {
  return `${window.rootpath}assets/images/${filename}`;
}

// Main
const mainEl = $("main");
mainEl.addClass("container my-3");