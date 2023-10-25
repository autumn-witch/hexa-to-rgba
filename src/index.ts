function getHexArray(str: string): string[] {
	const array = Array.from(str.replace(/^#/, ""));
	if (![3, 4, 6, 8].includes(array.length)) {
		throw new Error(`error: ${str} does not have a valid length.`);
	}
	if ([3, 4].includes(array.length)) {
		return array.flatMap((v) => [v, v]);
	}
	return array;
}
function groupPair(array: string[]): string[] {
	const finalArray = [
		array[0] + array[1],
		array[2] + array[3],
		array[4] + array[5],
	];
	if (array.length === 8) {
		finalArray.push(array[6] + array[7]);
	}
	return finalArray;
}
function transformHexValue(value: string): number {
	const int = parseInt(value, 16);
	if (Number.isNaN(int)) {
		throw new Error(`error: ${value} is an invalid character`);
	}
	return int;
}
function setRgbFinalArray(rgbInitialArray: number[]): Array<string | undefined> {
	const opacity =
		rgbInitialArray.length === 4 ? rgbInitialArray[3] / 255 : undefined;
	return [...rgbInitialArray.slice(0, 3).map(String), opacity?.toFixed(2)];
}
export function convertHexToRgba(hexCode: string, opacity = 1): string {
	const hexArray = groupPair(getHexArray(hexCode)).map(transformHexValue);
	const finalArray = setRgbFinalArray(hexArray);
	return `rgba(${finalArray[0]}, ${finalArray[1]}, ${finalArray[2]}, ${finalArray[3] ?? opacity})`;
}
