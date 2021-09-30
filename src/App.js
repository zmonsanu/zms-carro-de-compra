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
    ]
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Layout>
          <Title/>
        <Productos
        agregarAlCarro ={() => console.log('No hace nada')}
        productos={this.state.productos}
        />
        </Layout>
        <Footer/>
      
      </div>
    )
  }
}

export default App;
