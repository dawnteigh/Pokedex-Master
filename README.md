# Pokédex Master

In the world of Pokémon, typically you have catch a Pokémon to read its Pokédex entry.
Pokédex Master is a single page application that challenges users to 'catch' Pokémon <i>after</i> reading their Pokédex entries. 

## Requirements
You will need to have [Node Package Manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [JSON Server](https://www.npmjs.com/package/json-server) installed to use this application.<br>
<i>In your CLI (Command Line Interface), enter the following commands:</i>
```console
~$ npm install -g npm
~$ npm install -g json-server
```

## Installation
In this application's GitHub repo, click the fork button to create a copy for yourself. Next, in your own fork, click the 'Code' button, make sure SSH is selected, and copy what's there.<br><br>
<img src="public/forkclone.gif" alt="Fork and clone" height="auto" width="400" /><br><br>
Head into your CLI and navigate to the directory where Pokédex Master will live. Enter the following, pasting in the text you copied:<br><br>
<img src="public/Animation.gif" alt="git clone git@github.com:your_username/Pokedex-Master.git" height="auto" width="400" /><br><br>
Once it's done, navigate into the new directory and you're ready to begin using Pokédex Master!
```console
~$ cd pokedex-master
```


## Usage
To get started, make sure you are in the <b>pokedex-master</b> directory and type this in your terminal:
```console
~/pokedex-master$ npm run server
```
This starts up a mock back-end server. Think of it as a PC box that you'll be sending your captured Pokémon to.<br>
Next, you will need to open a <i>second</i> terminal. Navigate to the correct directory again, this time entering:
```console
~/pokedex-master$ npm install && npm start
```
A browser window will open, but don't panic. It's the game! If you entered the commands out of order, don't worry; just refresh the page after both servers are running and everything should work properly.<br>
After that, it's pretty straightforward. Head into the browser window at http://localhost:3000/ and follow the in-app instructions. Enjoy!<br><br>
![pokedex-master](public/pkdxmstr.gif)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## Acknowledgements
- Pokemon data comes from the great [PokéAPI](https://pokeapi.co/).
- Mock back end possible thanks to [JSON Server](https://www.npmjs.com/package/json-server).
- Header graphic created with [Canva](https://www.canva.com/).
- Toast messages from [React Bootstrap](https://react-bootstrap.github.io/).
- Application created using [Create React App](https://create-react-app.dev/).


## License
[MIT](https://choosealicense.com/licenses/mit/)