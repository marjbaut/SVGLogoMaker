class SVG{
  
    constructor(){
        this.text = ''
        this.shape =''
    }
    render(){
        return `<svg height="300px" width="200px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">	${this.shape} ${this.text} </svg>`

    }
    setText(inputText, color){
        this.text = `<text x="50%" y="50%" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${color}">${inputText}</text>`;

    }
    setShape(inputShape){
        this.shape=inputShape.render()
    }
}

module.exports = { SVG };
