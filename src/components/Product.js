import React from 'react';
import './product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';
const Product = ({ id, title, image, price, rating }) => {
	const [{}, dispatch] = useStateValue();
	const AddToBasket = () => {
		//add item
		dispatch({
			type: 'ADD_ITEM',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>Rs</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_) => (
							<p>
								<StarIcon />
							</p>
						))}
				</div>
			</div>
			<img src={image} alt='' />
			<button onClick={AddToBasket}>Add to Basket</button>
		</div>
	);
};

export default Product;
