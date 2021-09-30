import { Component } from "react";

const styles = {
    footer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '50px',
        backgroundColor: '#d5f4e6',
        //justifyContent: 'space-between',
        position:'relative',
        padding:'0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)',
        fontSize: '0.6rem',
    }
}

class Footer extends Component {
    render () {
        return (
            <div style={styles.footer}>
                &#169; ZMS 2021
            </div>
        )
    }

}

export default Footer