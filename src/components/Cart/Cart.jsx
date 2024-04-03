import React, { useState , useRef, useEffect} from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/CartReducer';

const Cart = () => {

  const dispatch = useDispatch();

  const products = useSelector( (state) => state.cart.products)

  const totalPrice = () => {
    let total = 0;

    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  }

const [isCartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click is outside the cart area
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        // Close the cart
        setCartOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isCartOpen]);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };



  return (
    <div className='cart'>
        <h1 className='mb-4'>Products In Your Cart</h1>
        {products?.map((item) => (
            <div className="item" key={item.id}>
                <img className='rounded-md ' src={ import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p className='pt-1'>{item.desc?.substring(0,100)}</p>
                    <div className="price">
                        {item.quantity} X ${item.price}
                    </div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick ={() => dispatch(removeItem(item.id))} /> 
            </div>
        ))}
        <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className='rounded-md text-sm'>PROCEED TO CHECKOUT
      <ShoppingCartCheckoutIcon/>
      </button>
      <span className="reset text-[16px] p-3 cursor-pointer  text-white rounded-md w-[2rem] h-[1rem] bg-black" onClick ={() => dispatch(resetCart())}>
        Reset Cart 
        <DeleteIcon className='ml-2 mb-1'/>
      </span>

    </div>
  )
}

export default Cart;