import OrderToppings from './OrderToppings';
import ToppingSelector from './ToppingSelector';
import OrderSummary from './OrderSummary';
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState(1);
  const [selectedToppings, setselectedToppings] = useState([])
  /*
  const [user, setUser] = useSatate(null);
  let userId = 1;
  useEffect(() => {
    fetch('https://60381e5d4e3a9b0017e92cc3.mockapi.io/api/users/' + userId)
      .then(res => res.jeson())
      .then(user => setUser(user))
  }, [userId]);
*/


  function handleItemCountChange(count) {
    setCount(count)

  }


  function handleSelectedToppingChange(topping, checked) {
    if (checked) {
      setselectedToppings([...selectedToppings, topping]);
    } else {
      setselectedToppings(selectedToppings.filter(t => t !== topping))
    }
    /*
    fetch('', {
      method: 'post',
      body: JSON.stringify(selectedToppings)
    });
    */
  }


  return (
    <div>
      <h1>Your Order</h1>
      {/*user && (<div>Welcome, {user.username}</div>)*/}
      <ItemCount count={count} onChange={handleItemCountChange}/*setCount={setCount}*/ />
      <ToppingSelector onChange={handleSelectedToppingChange} />
      <OrderSummary count={count} />
      <OrderToppings selectedToppings={selectedToppings} />
    </div>
  );
}


export default App;
