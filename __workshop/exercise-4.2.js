const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  try {
    const response = await request({
      uri: "https://api.tronalddump.io/random/quote",
      headers: {
        Accept: "application/json",
      },
      json: true,
    });
    return response.value;
  } catch (err) {
    console.log("Error: ", err);
  }
};
getTronaldDumpQuote().then((data) => console.log(data));
module.exports = { getTronaldDumpQuote };
