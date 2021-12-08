import authOptions from "./credentials";

// "Request" Library
import { post } from "request";

// Get Access Token from API
const getAccessToken = async () => {
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
};

export default getAccessToken;
