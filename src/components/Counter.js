import React,{Component} from 'react'

export class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0      
        }
    }

   increment(){
      this.setState({
          count: this.state.count + 1
      })
   }
   
   decriment(){
       this.setState({
           count: this.state.count - 1
       })
   }

   incrementFive(){
       this.setState({
           count: this.state.count + 5
       })
   }

   decrimentFive(){
       this.setState({
           count: this.state.count - 5
       })
   }

   incrementHandred(){
       this.setState({
           count: this.state.count + 100
       })
   }

   decrimentHandred(){
       this.setState({
           count: this.state.count - 100
       })
   }
    render(){
        return(
            <div className="button-container">
                <p className="counter-div">თვლა : {this.state.count}</p>
                <button id="first-button" onClick={()=>this.increment()}>გაზრდა 1-ით</button>
                <button id="second-button" onClick={()=>this.decriment()}>შემცირება 1–ით</button><br />
                <button id="third-button" onClick={()=>this.incrementFive()}>გაზრდა 5–ით</button>
                <button id="fourth-button" onClick={()=>this.decrimentFive()}>შემცირება 5–ით</button><br />
                <button id="fifth-button" onClick={()=>this.incrementHandred()}>გაზრდა 100–ით</button>
                <button id="sixth-button" onClick={()=>this.decrimentHandred()}>შემცირება 100–ით</button>
            </div>
        )
    }
}
export default Counter