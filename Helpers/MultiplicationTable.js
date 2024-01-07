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
        this._Writer.Write(`${this.Factor} X ${i} = ${this.Factor*i}`)
        return this._Multiply(++i)
    }
    
    Print(){
        this._Writer.Write(`=================== ${this.Factor} Times Table ===================`);        
        this._Multiply();
        this._Writer.Print(this.Factor);
    }
}

module.exports = {
    MultiplicationTable
};