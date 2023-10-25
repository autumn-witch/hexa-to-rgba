import { convertHexToRgba } from "../src";
const hexSimilarStrings = ["fbe", "ffbbee", "ffbbeeff", "#fbe", "#ffbbee", "#ffbbeeff"];
const rgbaConvertedValue = 'rgba(255, 187, 238, 1)';

test.each(hexSimilarStrings)("different versions of the same hex string should return the same output", (hexString: string) => {
	expect(convertHexToRgba(hexString)).toEqual(rgbaConvertedValue);
});

test("opacity should be correctly converted", () => {
	expect(convertHexToRgba('FFC0CB80')).toEqual('rgba(255, 192, 203, 0.50)');
	expect(convertHexToRgba('FFC0CB', 0.5)).toEqual('rgba(255, 192, 203, 0.5)');
})

const incorrectHexStrings = ["", "ff", "#ff", "ffbbge", "#ffbbge", "aabbccddee", "#aabbccddee"];
test.each(incorrectHexStrings)("all kind of wrong inputs should throw an error", (incorrectValue: string) => {
	expect(() => { convertHexToRgba(incorrectValue) }).toThrowError();
});

