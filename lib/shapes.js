class Shape {
    constructor (){
        this.color = "";
    }
    
    setColor(colorVar) {
        this.color= colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>';
    }
}

class Square extends Shape {
    render () {
        return '<rect x="73" y="40" width="160" fill="{this.color}" />';
    }
}

class Circle extends Shape {
    render () {
        return '<circle cx="50" cy="50" r="40" fill="{this.color}" />';
        //may need to be expanded 
    }
}

module.exports = { Triangle, Square, Circle };