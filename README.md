# Movie Trivia Game

This is a fun and engaging movie trivia game built with React JS, styled with Material-UI (MUI), and utilizing the TMDBv API to fetch movie data.

## Features

- **Challenging Trivia:** Test your knowledge of movies by answering a variety of questions.
- **Score Tracking:** Keep track of your progress and see how well you perform.
- **Movie Data Integration:** Leverage the TMDBv API to ensure question accuracy and potentially display movie-related visuals.

## Technologies

- Frontend: React JS
- Styling: Material-UI (MUI)
- API: TMDBv API (for movie data)

## Getting Started

1. Clone the Repository:
```shell
git clone https://github.com/houssamel-bakkouri/movies-game.git
```
2. Install Dependencies:
```shell
cd movies-game
npm install
```
3. Set Up TMDB API Key:
- Create a free TMDB developer account at https://developer.themoviedb.org/docs/getting-started.
- Generate an API key and store it securely (not in version control).
- Create a .env file in the project root directory (ignore this file with .gitignore).
- Add the following line to your .env file, replacing YOUR_API_KEY with your actual key:
```shell
REACT_APP_TMDB_API_KEY=YOUR_API_KEY
```

4. Run the Development Server:
```shell
npm start
```
This will start the development server, typically accessible at http://localhost:3000/ in your web browser.

## Usage

The application provides a user interface for playing the movie trivia game. There's no specific setup or configuration required beyond the steps mentioned above.
