import authOptions from "./credentials.js";
import pkg from "request";

const { post } = pkg;

const baseURI = "https://api.spotify.com/v1";
const redirectURI = "http://localhost:3000/";

const Spotify = {
  async getAccessToken() {
    const response = await new Promise((resolve, reject) => {
      post(authOptions, (error, response, body) => {
        if (response.statusCode === 200) {
          const token = body.access_token;
          resolve(token);
        } else if (error) {
          reject(error);
        }
      });
    });
    return response;
  },

  async search(input) {
    const accessToken = await Spotify.getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=artist`,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  },
};

export default Spotify;
