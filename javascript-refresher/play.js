const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done !");
    }, 1500);
  });
};

setTimeout(() => {
  console.log("timer is done !");
  fetchData()
    .then((text) => {
      console.log("p1" + text);
      return fetchData();
    })
    .then((text2) => {
      console.log("p2" + text2);
    });
}, 2000);

console.log("hello");
console.log("hi");
