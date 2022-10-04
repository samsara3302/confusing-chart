const jsonfile = require('jsonfile');
const moment = require('moment');
const { default: simpleGit } = require('simple-git');
const simpleGit = require('simple-git');

const FILE_PATH = "./json/data.json";
const DATE = moment().format();

const data = {
  date: DATE
}

jsonfile.writeFile(FILE_PATH, data)

// git commit pass parameter day
simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE})