// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2 * num);
    }, 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const num1 = await doublesLater(num);
    const num2 = await doublesLater(num1);
    const num3 = await doublesLater(num2);
    return num1 + num2 + num3;
  } catch (err) {
    console.log("Error: ", err);
  }
};
// 4. verification
handleSum(10).then((ans) => console.log(ans));
