const fs = require('fs');

class Writer{
    _Output = "";
    Add = (item)=>this._Output = this._Output.length>0?`${this._Output}\n${item}`:item;    
    Write = this.Add;
}

class FileSystemWriter extends Writer {
    Print(n = 0){
        fs.writeFile(`table-${n}.txt`,this._Output,(err)=>{
            if(err)throw err;
            console.log("The file has been save!");
        });
    }
}

class ConsoleWriter extends Writer{
    Print(){
        console.log(this._Output);
    }
}

module.exports = {FileSystemWriter, ConsoleWriter}