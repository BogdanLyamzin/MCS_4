import calcWeightIndex from "./calcWeightIndex.js";

/*
1. Given weight in kg and height in metr.
2. Return weight / (height * height) round 2.
3. Throw error if invalid data with correct data.

90, 1.9 => 24.93
 => error 'weight and height required'
'90', '1.9' => error 'weight and height mus be number'
-5, -4 => error 'weight and height must be > 0'
1.9, 90 => error 'weight must be first argument and height - second'
*/

describe("test calcWeightIndex function", ()=> {
    test("90, 1.9 => 24.93", ()=> {
        const result = calcWeightIndex(90, 1.9);
        expect(result).toBe(24.93);
        /*
        const expect = result => ({
            result,
            toBe(value) {
                if(this.result !== value) {
                    тест не пройдено
                }
            }
        })
        */
    })

    test(" => error 'weight and height required'", ()=> {
        expect(()=> calcWeightIndex()).toThrow('weight and height required')
    })

    test(" => error 'weight and height required'", ()=> {
        expect(()=> calcWeightIndex()).toThrow('weight and height required')
    })

    test("'90', '1.9' => error 'weight and height mus be number'", ()=> {
        expect(()=> calcWeightIndex('90', '1.9')).toThrow('weight and height mus be number')
    })

    it("-5, -4 => error 'weight and height must be > 0'", ()=> {
        expect(()=> calcWeightIndex(-5, -4)).toThrow('weight and height must be > 0')
    })

    it("1.9, 90 => error 'weight must be first argument and height - second'", ()=> {
        expect(()=> calcWeightIndex(1.9, 90)).toThrow('weight must be first argument and height - second')
    })
})