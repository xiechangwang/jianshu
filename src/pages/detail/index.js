import React,{Component} from 'react';

class Detail extends Component{
    render(){
        console.log(this.props.location.query)
        return(
            <div>detail</div>
        )
    }
}

export default Detail;