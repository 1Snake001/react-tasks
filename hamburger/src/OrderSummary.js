

export default function OrderSummary(props){
   
return(
<div>
    <h2 className='mt-4'>Order Summary</h2>
    <div>
        {props.count} Hamburger
    </div>
</div>
 );
}