import React from 'react';
import './checkoutpro.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';
const CheckoutProduct = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();

	const RemoveItem = () => {
		dispatch({
			type: 'REMOVE_ITEM',
			id: id,
		});
	};

	return (
		<div className='checkoutProduct'>
			<img className='checkoutProduct__image' src={image} />
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>
				<p className='checkoutProduct__price'>
					<small>Rs</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map((_) => (
							<p>
								<StarIcon />
							</p>
						))}
				</div>
				<button onClick={RemoveItem}>Remove from basket</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
