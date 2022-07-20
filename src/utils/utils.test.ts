import {genrateRandomNumber, getRandomMoleId,generateMoles} from "./utils";

describe('Utils tests', () => {
    it('should generate a number greater or equal than 0', () => {
        const result = genrateRandomNumber(0,10);
        expect(result).toBeGreaterThanOrEqual(0);
      })
      it('should generate a number smaller or equal than 10', () => {
        const result = genrateRandomNumber(0,10);
        expect(result).toBeLessThanOrEqual(10);
      })
      it('should return a mole id', () => {
        const result = getRandomMoleId(3,4);
        expect(result).not.toBeUndefined();
      })
      it('should return a array of moles with 4 columns', () => {
        const result = generateMoles(3,4);
        expect(result[0].length).toBeLessThanOrEqual(4);
      })
      it('should return a array of moles with 3 rows', () => {
        const result = generateMoles(3,4);
        expect(result.length).toBeLessThanOrEqual(3);
      })
      

});