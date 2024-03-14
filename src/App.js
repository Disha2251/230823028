import logo from './logo.svg';
import './App.css';

// import Contact from './conatct.js'
// const mca=require('./mca.json')

import Desription from './description';
const content=require('./content.json')
function App(props) {
  // console.log(mca)
  // return (


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


  //   <>
  //   {
  //     mca.map(function(facluty){
  //       return <Contact image={`${facluty.image}`} 
  //       name={facluty.name} 
  //       description={`${facluty.description}`}
  //       />
  //     })
  //   }
  //   </>
  // );

  console.log(content)
  return(

    <>
    {
      content.map(function(props)
      {
        return <Desription tags={`${props.tags}`}
        description={`${props.description}`}/>
      })
    }
    </>
  )
}

export default App;
