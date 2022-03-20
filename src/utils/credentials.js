// Inject environment variables
import dotenv from 'dotenv';
dotenv.config();

const clientID = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

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
