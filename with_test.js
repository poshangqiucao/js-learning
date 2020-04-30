var with_test = {
    name: "poshang",
    sayName: function() {
        console.log(this.name.toLocaleUpperCase());
    }
}

with(with_test){
    console.log(name);
    sayName();
}