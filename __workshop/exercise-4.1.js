const request = require("request-promise");

getDadJoke = async () => {
  try {
    const response = await request({
      uri: "https://icanhazdadjoke.com/",
      headers: {
        Accept: "application/json",
      },
      json: true,
    });
    return response.joke;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// 4.1
getDadJoke().then((data) => console.log(data));
module.exports = { getDadJoke };
