import React from 'react';
import { useStateValue } from '../StateProvider';
import './checkout.css';
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';

const Checkout = () => {
	const [{ basket }] = useStateValue();
	return (
		<div className='checkout'>
			<div className='checkout__left'>
				<img
					className='checkout__ads'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Redmi_G3M/GW/V239463881_IN_WLME_Redmi_G3M_LandingPage_Mob_Hero_1242x450_1._CB407855248_SY250_.jpg'
				/>
				{basket?.length == 0 ? (
					<div>
						<h2>Your Shopping Basket is Empty</h2>
					</div>
				) : (
					<div>
						<div className='checkout__title'>Your Shopping basket</div>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								price={item.price}
								rating={item.rating}
								image={item.image}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className='checkout__right'>
					<Subtotal />
				</div>
			)}
		</div>
	);
};

export default Checkout;
