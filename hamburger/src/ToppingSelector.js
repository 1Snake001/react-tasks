
export default function ToppingSelector(props) {
    let {onChange}= props;
    let toppings = ['+ Hagyma', '+ Majonéz', '+ Mustár'];
    return (
        <div>
            {toppings.map(topping => (
                <div className ='form-check' key={topping}>
                    <input type ='checkbox' value={topping} id={topping} 
                    onChange={e =>onChange(topping,e.target.checked)} />
                    <label htmlForm={topping}>{topping}</label>
                </div>
            ))}
        </div>
    );
}