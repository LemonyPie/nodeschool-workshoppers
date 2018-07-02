const remote = require('electron').remote;
const fs = require('fs');
const picture = require('cat-picture');
const image = require('lightning-image-poly')
const src = picture.src;
picture.remove();

let viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})

function save() {
  remote.getCurrentWebContents().printToPDF({
    portrait: true
  }, (err, data) => {
    fs.writeFile('annotation.pdf', data, (err) => {
      if(err) alert('Error generating PDF! ' + err.message);
      else alert('PDF saved!');
    })
  })
}
window.addEventListener('keydown', (e) => {
  if(e.keyCode === 80) {
    alert(e.keyCode)
    save();
  }
})