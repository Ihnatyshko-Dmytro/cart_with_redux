import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import { selectGoods } from '../store/goodsSlice';
import { selectCart } from "../store/cartSlice";
import { Cart } from '../components/Cart'
import {minus, deleteGo} from '../store/cartSlice'




function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);

    const dispatch = useDispatch();

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    let clickHandler = (event) => {
        event.preventDefault();

        let t = event.target;

        if (t.classList.contains('deleteGo')) {
            console.log('ffff')
            let data = t.getAttribute('data-key');
            dispatch(deleteGo(data));
        }
        
        if (t.classList.contains('minus')) {
    
            let data = t.getAttribute('data-key');
            dispatch(minus(data));
        }
        
        

        
    }
    return (
        <div onClick={clickHandler}>
            <Cart counts={cart} goodsO={goodsObj} />
        </div>
    );
}

export default CartList;