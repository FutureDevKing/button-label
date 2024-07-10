import React, { Component } from "react"
import "./button.css"

const Button = (props) => {
    return (
        <div>
            <button className="btn" 
            onClick={()=>{console.log("A label é: " + props.label)}}>
                {props.label}
            </button>
        </div>
    )
}


// class Button extends Component {
    
//     render() {
//         console.log('A mensagem da label é: ' + this.props.label);
//         return <button className="btn" >
//             {this.props.label};
//         </button>
//     }
// }

Button.defaultProps = {
    label: "Mensagem"
}

export default Button