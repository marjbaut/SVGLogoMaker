
class Svg{
    constructor(){
        this.text = ''
        this.shape =''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns='http://www.w3.org/2000/svg'>${this.shape}${this.text}</svg> `
    }
    setText(inputText, color){
        this.text=` <text x='150' y='125' fonst-size='60' text-anchor='middle' fill='${color}'>${inputText}
        </text>`
    }
    setShape(inputShape){
        this.shape=inputShape.render()
    }
}

// /* <svg version="1.1" width="300" height="200" xmlns='http://www.w3.org/2000/svg'><rect x='90' y='40' width='120' height='120' fill="black"/><text x='150' y='125' fonst-size='60' text-anchor='middle' fill='orange'>text</text></svg> */}

// {/* <rect x='90' y='40' width='120' height='120' fill="black"/> */}