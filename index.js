//just a comment
module.exports = function fbWebhookVerify(req, res, next) {
  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === config.verifyToken) {
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  } else {
    console.warn("Got /webhook but without needed parameters.");
  }
  next();
};

<<<<<<< HEAD
### you need to add sth here like a new word
=======
### you need to add sth here

and here
>>>>>>> main
