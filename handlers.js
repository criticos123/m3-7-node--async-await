// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");
const { getGeekJoke } = require("./__workshop/exercise-4.3");

async function handleJoke(req, res) {
  if (req.params.type === "dad") {
    res.status(200).json({ status: 200, joke: await getDadJoke() });
  } else if (req.params.type === "tronald") {
    res.status(200).json({ status: 200, joke: await getTronaldDumpQuote() });
  } else if (req.params.type === "geek") {
    res.status(200).json({ status: 200, joke: await getGeekJoke() });
  }
}

module.exports = { handleJoke };
