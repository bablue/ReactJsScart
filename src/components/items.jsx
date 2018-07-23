import React,{ Component } from 'react';
import ItemRow from './itemrow.jsx';
class Items extends Component{
    state={
        itemslist:[{
                        itemName:'Rice',
                        itemCount:0,
                        itemPrice:10,
                        id:1
                    },{
                        itemName:'Banana',
                        itemCount:0,
                        itemPrice:20,
                        id:2
                    },{
                        itemName:'atta',
                        itemCount:0,
                        itemPrice:15,
                        id:3
                    }]
    }
    handleIncrement=(itemrow)=>{
        let temparr = [... this.state.itemslist];
        let index = temparr.indexOf(itemrow);
        temparr[index].itemCount +=1;
        this.setState({itemlist:temparr});
    }
    handleDecrement=(itemrow)=>{
        let temparr = [... this.state.itemslist];
        let index = temparr.indexOf(itemrow);
        temparr[index].itemCount -=1;
        this.setState({itemlist:temparr});
    }
    handleReset=(itemrow)=>{
        let temparr = [... this.state.itemslist];
        let index = temparr.indexOf(itemrow);
        temparr[index].itemCount =0;
        this.setState({itemlist:temparr});
    }
    render(){
        return (
            <React.Fragment>
                {this.state.itemslist.map(item=>{
                    return <ItemRow key={item.id} itemrow={item} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onReset={this.handleReset}></ItemRow>
                })}
            </React.Fragment>
            
        );
    }
}

export default Items;