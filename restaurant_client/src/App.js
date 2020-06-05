import React from 'react';
import { Routes, Route } from 'react-router';

import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import Sidebar from './components/ui/Sidebar';

function App() {
	return (
		<>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Ordenes />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/nuevoplatillo' element={<NuevoPlatillo />} />
			</Routes>
		</>
	);
}

export default App;
