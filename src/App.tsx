import { Routes, Route } from 'react-router-dom'

// ---

import { Home, About } from './pages'
import { initialState, ManagedAppContext } from './context'

// ---

export default function App() {
	return (
		<>
			<ManagedAppContext {...initialState}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</ManagedAppContext>
		</>
	)
}
