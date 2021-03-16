
import './style.css'


export default function ItemCount({count, onChange}) {

    return (
<div>
    <button className='button' type="button" onClick={()=>{if(count >= 1){onChange(count)}else{onChange(count-1)}}}>-</button>
    <span>{count}</span>
    <button className='button'type="button" onClick={()=>{if(count === 10){onChange(count)}else{onChange(count+1)}}}>+</button>
</div>
);
}