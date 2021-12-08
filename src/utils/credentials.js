const clientID = "07be2d47cbce4b259bcc607f2db19129";
const clientSecret = "9242edb6dca64460a3a8de3be6ad6f13";

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
