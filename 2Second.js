const fs = require('fs');
fs.readFile('4vii.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const content = 'Javascript assessment was fine';
fs.writeFile('4vii.txt', content, (err)=>{
  if(err){
    console.error(err);
    return;
  }
  console.log('file written');
} )
