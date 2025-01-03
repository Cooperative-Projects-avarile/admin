// 更新hash
export function updateHash({ name, value }: { name: string; value: number }) {
	let stepStr = location.hash
		.split("#")[1]
		?.split("&")
		.find((item) => {
			return item.includes(name);
		});
	let result = location.hash;
	if (!stepStr) {
		result += `${result ? "&" : "#"}${name}=${value}`;
	} else {
		result = result.replace(stepStr, `${name}=${value}`);
	}
	return result;
}
