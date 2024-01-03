let str = '{"name": "charvi", "rno": 45, "age": 22}';

let obj = JSON.parse(str);

console.log(obj);

const student= {
    "name": "charvi",
    "rno": 45,
    "age": 22,
    "marks":{
        "science" : 60,
        "Hindi": 89
    }
  }

  let op = JSON.stringify(student)
  console.log(op);