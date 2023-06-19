const isLogged = true;

function firstP() {
  return new Promise((resolve, reject) => {
    if (isLogged === true) {
      resolve(Math.random());
    } else {
      reject(new Error("qui c'è un errore!"));
    }
  });
}

function secondP() {
  return new Promise((resolve, reject) => {
    let num = Math.random();
    if (num > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      throw new Error("questo è un nuovo errore!");
    }
  });
}

// firstP.then((val) => console.log(val)).catch((err) => console.error(err));

// secondP.then((val) => console.log(val)).catch((err) => console.error(err));

// console.log(firstP);
// console.log(secondP);

firstP()
  .then(secondP)
  .then((val) => console.log(val))
  .catch((err) => console.error(err))
  .finally(() => console.log("end!"));

console.log(firstP);


