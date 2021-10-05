import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component {
  state = {
    productos:[
       {name:'Camiseta', price: 12, img: '/productos/c4.jpeg'},
       {name:'CD 1', price: 15, img: '/productos/p1.jpeg'},
       {name:'CD 2', price: 15, img: '/productos/p2.jpeg'},
       {name:'CD 3', price: 15, img: '/productos/p3.jpg'}
    ],
    carro:[ ],
    esCarroVisible:false,
  }
agregarAlCarro =(producto) => {
  const {carro}    = this.state
  if (carro.find(x=> x.name === producto.name)){
    const newCarro = carro.map( x => x.name === producto.name? ({
    ...x, cantidad: ++x.cantidad
    })
    :x)
    return this.setState ({carro:newCarro})
  }
  return this.setState({
       carro: this.state.carro.concat({
         ...producto,
         cantidad:1,
       })
     })
}


mostrarCarro =() => {
  if(!this.state.carro.length) {
    return
  }
  this.setState({esCarroVisible: !this.state.esCarroVisible})
}




  render() {
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} 
                esCarroVisible={esCarroVisible}
                mostrarCarro = {this.mostrarCarro}/>
        <Layout>
          <Title/>
        <Productos
        agregarAlCarro ={this.agregarAlCarro}
        productos={this.state.productos}
        />
        </Layout>
        <Footer/>
      
      </div>
    )
  }
}

export default App;
