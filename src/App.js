import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<h2>App.js 페이지 입니다</h2>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new" element={<New />} />
					<Route path="/edit" element={<Edit />} />
					<Route path="/diary" element={<Diary />} />
				</Routes>
				<RouteTest />
			</div>
		</BrowserRouter>
	);
}

export default App;
