import React  from 'react'
import { useSelector } from 'react-redux'
import {quotesSelector} from '../../redux/quotesSlice'
import { useParams} from "react-router-dom";

function QuoteDetail() {
    const {quote_id}=useParams();
    const items=useSelector(quotesSelector);    
    const quote=items.find((item)=>item.quote_id===Number(quote_id));
    
  
    
    return (
        <div>
           <h1>Quote Detail</h1>
           <pre>{JSON.stringify(quote,null,2)}</pre>
        </div>
    );
}

export default QuoteDetail
