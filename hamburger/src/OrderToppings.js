export default function OrderToppings(props){
    let {selectedToppings} = props;
    return(
        <div>
            <ul>
                {selectedToppings.map(topping =>(<li>{topping}</li>))}
            </ul>
        </div>
    );
}