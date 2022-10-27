
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CheckOut = () => {
    const checkout = useLoaderData()
    const{photoURL,name,price}= checkout;

    const handlePurchase = () => {
        alert(`${name} course purchase successfully!`)
    }
    return (
        <div className='mt-2'>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photoURL} />
      <Card.Body>
        <Card.Text>
          <input type="text" value={name} readOnly />
          <input type="text" value={price} readOnly />
        </Card.Text>
        <Button variant="primary" onClick={handlePurchase}>purchase ${price}</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CheckOut;












// import React from 'react'

// const Checkout = () => {
//   return (
//     <div>Checkout</div>
//   )
// }

// export default Checkout
