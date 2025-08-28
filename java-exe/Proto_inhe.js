function HtmlElement(){
    this.click = function(){
        console.log('clicked');
    }
}

Object.prototype.focus = function (){
    console.log('Focused');
}

function HtmlSelectElement(items = []){
    this.items = items;

    this.addItem = function(item){
        this.items.push(item);
    }

    this.removeItem = function(item){
        this. items.splice(this.items.indexOf(item), 1);
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;