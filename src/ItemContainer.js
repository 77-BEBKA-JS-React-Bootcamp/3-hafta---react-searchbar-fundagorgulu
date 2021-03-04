import React from 'react'
import {Component} from 'react'
import Item from './Item'
class ItemContainer extends Component{
    render(){
        return(
            <div className="items">
                {this.props.items.slice(0,5).map(item => <Item item = {item}/>)}
            </div>
        );
    }
}

export default ItemContainer