import React from 'react';
import './home.css';
import Product from '../components/Product';
const Home = () => {
	return (
		<div className='home'>
			<img
				className='home__image'
				src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
			/>
			<div className='home__row'>
				<Product
					id='1234451'
					title='Samsung Galaxy Tab A 10.1 (10.1 inch, 32GB, Wi-Fi + 4G LTE + Voice Calling), Black'
					price={14500}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/71dFS-MGE9L._SL1500_.jpg'
				/>
				<Product
					id='1234452'
					title='Lenovo Tab V7 Tablet (6.9 inch, 32GB, Wi-Fi + 4G Voice Calling), Onyx Black'
					price={8000}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/71u18HarG2L._SL1500_.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='1234453'
					title='Lenovo Tab M8 2nd Gen Tablet (8-inch, 2GB, 32GB, Wi-Fi + LTE + Calling), Iron Grey'
					price={6000}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/31ZQ90PhTOL.jpg'
				/>
				<Product
					id='1234454'
					title='HUAWEI MediaPad T5 Tablet-Black (10.1 inch, 3+32GB, Wi-Fi + 4G LTE, 5 MP Rear Camera, 5100mAH Battery, 16.7M Colours, Dual Stereo Speakers, Children'
					price={12000}
					rating={4}
					image='https://images-na.ssl-images-amazon.com/images/I/71fJozIQZ3L._SL1200_.jpg'
				/>
				<Product
					id='1234455'
					title='Apple iPad Mini (Wi-Fi, 64GB) - Space Grey'
					price={34000}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/81kzAlgOAIL._SL1500_.jpg'
				/>
			</div>
			<div className='home__row'>
				<Product
					id='1234456'
					title='Samsung Galaxy Tab A 8.0 (Black, 2GB RAM, 32GB Storage) WiFi + 4G'
					price={11000}
					rating={5}
					image='https://images-na.ssl-images-amazon.com/images/I/71ceecYkxML._SL1500_.jpg'
				/>
			</div>
		</div>
	);
};

export default Home;
