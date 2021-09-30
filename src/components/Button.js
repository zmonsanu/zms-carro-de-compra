import { Component } from "react";

const styles = {
    button:{
        backgroundColor: '#0A283E',
        padding: '15px 20px',
        color: '#fff',
        border : 'none',
        borderRadius: '5px',
        cursor: 'pointer',

    }
}
class Button extends Component {
    render() {
        const {producto, agregarAlCarro}= this.props
        return (
            <button style = {styles.button} {...this.props}></button>
        )
    }
}
export default Button