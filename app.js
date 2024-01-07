const fs = require('fs');

class MultiplicationTable{
    Factor = 0
    StarNumber = 1
    _Writer = null

    constructor(Writer = null, n = 0){
        this._Writer = Writer;
        this.Factor = n;
    }

    _Multiply(i=this.StarNumber){    
        if(i > 10)return;    
        this._Writer.write(`${this.Factor} X ${i} = ${this.Factor*i}`)
        return this._Multiply(++i)
    }
    
    Print(){
        this._Writer.write(`=================== ${this.Factor} Times Table ===================`);        
        this._Multiply();
    }
}

class Writer{
    write = null;    
    constructor(callback){
        this.write = callback;
    }
}

function ConsoleMultiplication(n = 0){   
    console.clear(); 
    let table = new MultiplicationTable(new Writer(console.log),n)
    table.Print();
}

function FileSystemMultiplication(n = 0){    
    let output = new String();
    output.Add = (item)=>output = output.length>0?`${output}\n${item}`:item;
    let table = new MultiplicationTable(new Writer(output.Add),n)
    table.Print();    
    fs.writeFile(`table-${n}.txt`,output,(err)=>{
        if(err)throw err;
        console.log("The file has been save!");
    });
}
const base = 123;
ConsoleMultiplication(base);
FileSystemMultiplication(base);