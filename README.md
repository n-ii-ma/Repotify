[![MIT License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

# Repotify

A React/Redux app which lets clients search for their favorite artist and get their top ten tracks with previews.

## Table of contents
+ [General Info](#general-info)
+ [Address](#address)
+ [Technologies](#technologies)
+ [Setup](#setup)
+ [Features](#features)
+ [Screenshots](#screenshots)
+ [Usage](#usage)
+ [License](#license)
+ [Contact](#contact)

## General Info
This React/Redux app uses the Spotify API to let clients search any artist's name and get their top ten tracks. By using the Spotify Embed they can play and share the tracks with others.

## Address
https://repotify.netlify.app/

## Technologies
Project is created with:
+ React v17.0.2
+ Redux 4.1.2
+ React-Redux v7.2.6
+ @Reduxjs/Toolkit v1.6.2
+ npm v6.14.15
+ VSCode 1.62.3

## Setup

### Installation
To run this project, install it locally using npm:
```
$ cd ../repotify
$ npm install
$ npm start
```
### Environment Variables
The following variables are required to run the program:
- REACT_APP_CLIENT_ID
- REACT_APP_CLIENT_SECRET

Both are required to fetch data from Spotify. Check [here](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/) to learn more.

## Features
- Get the top ten tracks of the searched artist
- Play the tracks
- Share the tracks and view them in Spotify

## Screenshots
<p float="left">
  <img src="https://user-images.githubusercontent.com/88039431/146408485-28671a2a-71d6-4d75-874d-864ce80f8b0a.png" width="300" />
  <img src="https://user-images.githubusercontent.com/88039431/146408705-9ddc0aaa-d311-4b92-b35e-0bbc18ab68f2.png" width="500" /> 
</p>

## Usage
Useful for getting the gist of an artist's voice by listening to the preview of their top tracks.

## License
Distributed under the [MIT](https://opensource.org/licenses/MIT) License.

## Contact
Created by [n-ii-ma](https://github.com/n-ii-ma)

Feel free to contact me!
