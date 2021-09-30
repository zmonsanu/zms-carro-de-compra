import { Component } from "react";

const styles = {
    bubbleAlert: {
       backgroundColor : '#c94c4c',
       borderRadius: '15px',
       color: '#fff',
       padding: '2px 10px',
       fontSize: '0.9rem',
       width:'20px',

    }
}
class BubbleAlert extends Component {
    render() {              
        return (
            <span style={styles.bubbleAlert}>5</span>
        )
    }
}
export default BubbleAlert