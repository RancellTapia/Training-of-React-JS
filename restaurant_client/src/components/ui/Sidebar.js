import React from 'react';

const Sidebar = () => {
	return (
		<div className='md:w-2/5 xl:w-1/5 bg-gray-800'>
			<div className='p-6'>
				<p className='uppercase text-white text-2xl tracking-wide text-center font-bold'>
					RestaurantAPP
				</p>
				<p className='mt-3 text-gray-600'>
					Administra tu restaurant en las siguientes opciones
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
