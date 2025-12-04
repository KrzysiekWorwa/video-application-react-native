Video Learning App — React Native (Expo)

A mobile learning application built as part of a recruitment assignment.
The app serves as a knowledge hub for developers, allowing users to browse categorized videos, search content using the YouTube API, watch videos in a custom video player, and create timestamped notes stored locally on the device.

🚀 Tech Stack
Core

React Native — mobile framework

Expo — build system & native tooling

Expo Router — file-based navigation

TypeScript — static typing

Styled Components — UI styling

Native Modules

react-native-video — custom video player

@react-native-async-storage/async-storage — local notes storage

react-native-svg + transformer — SVG icons

expo-screen-orientation — fullscreen rotation lock

expo-font — custom fonts (Poppins)

API

YouTube Data API v3

search videos

fetch metadata

fetch statistics

.env support via Expo public variables

Custom Hooks

useVideoPlayer — player logic (progress, fullscreen, gestures, subtitles)

useSearchScreen — search logic, sorting, pagination

useFetch — reusable API loader

useDebounce — input debouncing

📁 Project Structure
src/
 ├── app/               # Routing (Expo Router)
 ├── components/        # Reusable UI components
 ├── hooks/             # Custom hooks
 ├── services/          # API communication (YouTube API)
 ├── screens/           # App screens (Home, Search, VideoDetails)
 ├── theme/             # Styled Components theme
 └── assets/            # Fonts, icons, images

🎥 Implemented Features
✔️ 1. Main Screen (Required)

Four categories:

React Native

React

TypeScript

JavaScript

Horizontal carousels for each category

“Show More” → navigates to Search screen

Search bar → navigates to Search screen

✔️ 2. Search Screen (Required)
Features:

YouTube API search with debounced input

Infinite scrolling (20 videos per page)

Displays:

thumbnail

title

channel name

publish date

Sorting:

Most popular

Upload date — latest

Upload date — oldest

✔️ 3. Video Details Screen (Required)

Displays:

Video title

Channel

Description

Views & Likes

🎬 Custom Video Player (react-native-video)

Supports:

Play / pause

10s forward / backward skip

Mute / unmute

Progress bar with draggable thumb

Subtitles toggle

Fullscreen mode with orientation lock

Minimized mode in details view

Subtitles file used:

https://bitmovin-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt


Video stream source:

https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8

✔️ 4. Local Notes System (Optional)

Each video has a Notes tab.

Users can:

write notes during playback

automatically capture timestamp (MM:SS)

store notes locally using AsyncStorage

restore notes when returning to a video

Storage key pattern:

video_notes:<videoId>


Data format:

{
  "id": "string",
  "text": "string",
  "time": "MM:SS"
}

❌ Not Implemented (Time Constraints)

Daily push notifications with scheduling

🛠️ Installation & Running

⚠️ Expo Go will NOT work.
This project uses native modules (AsyncStorage, react-native-video).
Use expo prebuild + dev client.

1️⃣ Clone the project
git clone https://github.com/KrzysiekWorwa/video-application-react-native.git
cd video-application-react-native

2️⃣ Install dependencies
npm install
# or
yarn install

3️⃣ Configure YouTube API key

Create a .env file:

EXPO_PUBLIC_YT_API_KEY=YOUR_API_KEY

4️⃣ Prebuild native projects
npx expo prebuild


This generates native iOS & Android projects required for dev-client.

5️⃣ Run the app
Android:
npx expo run:android

iOS:
npx expo run:ios

👤 Author

Krzysztof Worwa
GitHub: https://github.com/KrzysiekWorwa