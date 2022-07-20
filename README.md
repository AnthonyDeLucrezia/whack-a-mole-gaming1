# whack-a-mole-gaming1

This game is an adaptation of the popular game "Whack-a-mole".
It was developed as part of the gaming1 recruitment process.

## Prerequisites

To use this software you need to install NodeJS 17.9.0.
You can find the right version [here](https://nodejs.org/en/download/releases).
Or if you are using nvm :

```
nvm install 17.9.0
```

## Installation

1. Clone the frontend repo:
   ```
   git clone https://github.com/AnthonyDeLucrezia/whack-a-mole-gaming1.git
   ```
2. Clone the backend repo:
   ```
   git clone https://github.com/AnthonyDeLucrezia/whack-a-mole-gaming1-api.git
   ```
3. Install NPM packages for both projects:
   ```
   npm install
   ```
4. Verify API_URL variable in file webpack.config.js. This must match your api url:
   ```
   new webpack.DefinePlugin({
      'process.env':{
        'API_URL': JSON.stringify('http://localhost:8080/api')
      }
    }),
   ```
5. Start both projects:
   ```
   npm start
   ```

## Test

To run the tests, use the following command at the root of this project :

```
npm run test
```

## Usage

1. Once the application is running, enter your name and click on start to launch the game

2. Moles will come out of the holes randomly. Use mouse click to hit them.

3. If you click on a mole in time, you earn 10 points.

4. Moles will keep coming out for 2 min.

5. After 2 min, the game ends and the leaderboard is displayed.

6. Click on restart to restart a game
