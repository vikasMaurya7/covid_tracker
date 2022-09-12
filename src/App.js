import React from "react";
import styles from "./App.module.css";
import {Cards,Chart,Country} from "./components";
import Navbar from "./Navbar";
// fetch data import 
import {fetchData} from "./api";
class App extends React.Component{

    state = {
        data:{},
    }

    async componentDidMount(){
        let fetchdata = await fetchData();
        this.setState({data:fetchdata});
        
    }
    render(){
        const { data } = this.state;
        return(
            <>
            <Navbar/>
           <div className={styles.container}>
                
                
                <Cards data = {data}/>
                {/* <Country/>
                <Chart/> */}
           </div>
           </>
        )
    }
}
export default App;