import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Dashboard from "./components/layouts/Dashboard";
import InicioDashboard from "./components/pages/Dashboard/InicioDashboard";
import TestDashboard from "./components/pages/Dashboard/TestDashboard";
import ResultadoDashboard from "./components/pages/Dashboard/ResultadoDashboard";
import VideosDashboard from "./components/pages/Dashboard/VideosDashboard";

ReactDOM.createRoot(document.getElementById("cintia")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/dashboard/*' element={<Dashboard />}>
					<Route path='' element={<InicioDashboard />} />
					<Route path='test' element={<TestDashboard />} />
					<Route path='resultados' element={<ResultadoDashboard />} />
					<Route path='videos' element={<VideosDashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
