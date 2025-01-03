"use client";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useLocationListen = (listener: (location: Location) => void) => {
	const { pathname } = useLocation();
	useEffect(() => {
		const handler = () => {
			listener({
				pathname: window.location.pathname,
				search: window.location.search,
				hash: window.location.hash,
			} as any);
		};
		window.addEventListener("popstate", handler);
		window.addEventListener("pushState", handler);
		window.addEventListener("replaceState", handler);
		handler();
		return () => {
			window.removeEventListener("popstate", handler);
			window.removeEventListener("pushState", handler);
			window.removeEventListener("replaceState", handler);
		};
	}, [pathname]);
};

export default useLocationListen;
