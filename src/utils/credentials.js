const clientID = "07be2d47cbce4b259bcc607f2db19129";
const clientSecret = "0898f3b8cd8b4ab8957940ad2add8a82";

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
