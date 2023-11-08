const obj = {
    name: "May",
    printName: function(){
        console.log(this.name);
    },
    printNameAfterASecond: function(){
        setTimeout(() =>{
            this.printName();
        }, 1000)
    }
}

obj.printNameAfterASecond()