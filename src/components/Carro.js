import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
    carro: {
        backgroundColor: '#618685',
        color: '#fff',
        border:'none',
        padding: '15px',
        borderRadius: '15px',
        cursor:'pointer',
       
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,// << top hace que aparezca sobrepuesto
    },    
}
class Carro extends Component {
    render() {
        const { carro, esCarroVisible, mostrarCarro } =this.props
        //el método reduce suma al acumulador acc las cantidades de cada elemente partiendo de 0
        const cantidad = carro.reduce((acc,el) => acc+el.cantidad,0)
        return (
           <div>
               <span style={styles.bubble}>
                   {cantidad !== 0
                       ? <BubbleAlert value={cantidad}/>
                       : null}
                </span>                                      
               <button onClick={mostrarCarro} style={styles.carro}><i class="fas fa-shopping-cart"></i></button>
               {esCarroVisible ? <DetallesCarro carro={carro}/> :  null }

           </div>
        )
    }
}
export default Carro