function Person(){
    this.fullName = 'Lola';
    this.fav = 'Cola';

    this.describe = function(){
        console.log('this is: ', this);
        console.log(this.fullName + ' likes ' + this.fav);
    };
}

var lola = new Person();
lola.describe();

var describe = lola.describe;
describe();
describe.call(lola);