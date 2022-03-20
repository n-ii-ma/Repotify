const clientID = "5fab8efa7e464db59c5a70348063c66e";
const clientSecret = "66d4e0b0893240248649daf9ad916ef1";

// Request authorization
const authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    "Authorization":
      "Basic " +
      new Buffer.from(clientID + ":" + clientSecret).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

export default authOptions;
