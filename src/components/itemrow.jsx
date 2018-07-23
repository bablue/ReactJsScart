import React,{ Component } from 'react';
import './itemrow.css';

class Itemrow extends Component{
//    state ={
//        itemName:'Rice',
//        itemCount:0,
//        itemPrice:10
//    }
//    handleIncrement=()=>{
//        this.setState({itemCount:this.state.itemCount+1});
//    }
//    handleDecrement=()=>{
//        
//        this.setState({itemCount:this.state.itemCount>0?this.state.itemCount-1:0});
//    }
//    handleReset=()=>{
//        this.setState({itemCount:0});
//    }
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>qty</th>
                        <th>unit Price</th>
                        <th>total price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                       {this.props.itemrow.itemName}
                    </td>
                    <td>
                        <span>{this.props.itemrow.itemCount}</span>
                        <button onClick={()=>{this.props.onIncrement(this.props.itemrow)}} className='countButtons btn btn-primary'>+</button>
                        <button onClick={()=>{this.props.onDecrement(this.props.itemrow)}} className='countButtons btn btn-primary'>-</button>
                    </td>
                    <td>
                        {this.props.itemrow.itemPrice}
                    </td>
                    <td>
                        {this.calculatePrice()}
                    </td>
                    <td>
                        <button onClick={()=>{this.props.onReset(this.props.itemrow)}} className="btn btn-warning">reset</button>
                    </td>
                        </tr>
                </tbody>
            </table>
        );
    }
    calculatePrice=()=>{
//        var itc= this.state.itemCount
        return this.props.itemrow.itemCount * this.props.itemrow.itemPrice;
    }
}

export default Itemrow;