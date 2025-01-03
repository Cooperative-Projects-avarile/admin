import { MutableRefObject, useEffect, useRef, useState } from "react";

export interface UseResizeObserverProps {
	ref: MutableRefObject<any>;
	onResize: () => void;
}

export const useResizeObserver = ({
	ref,
	onResize,
}: UseResizeObserverProps) => {
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	});

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			const { width, height } = entries[0].contentRect;
			setDimensions({ width, height });
		});

		observer.observe(ref.current);

		return () => {
			ref.current && observer.unobserve(ref.current);
		};
	}, [ref]);

	useEffect(() => {
		onResize();
	}, [dimensions]);

	return dimensions;
};

export default useResizeObserver;
