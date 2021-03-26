import React,{Component} from 'react'

class Greeting extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default Greeting