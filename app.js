const {MultiplicationTable} = require('./Helpers/MultiplicationTable');
const {FileSystemWriter, ConsoleWriter} = require('./Helpers/Writer');

const base = 11;
let table = new MultiplicationTable(new FileSystemWriter(),base);
let table2 = new MultiplicationTable(new ConsoleWriter(),base);
table.Print();
table2.Print();

