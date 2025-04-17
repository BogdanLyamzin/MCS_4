const calcWeightIndex = (weight, height)=> {
    if(weight === undefined || height === undefined) {
        throw new Error('weight and height required');
    }

    if(typeof weight !== "number" || typeof height !== "number") {
        throw new Error('weight and height mus be number');
    }

    if(weight < 0 || height < 0) {
        throw new Error('weight and height must be > 0');
    }

    if(weight < height) {
        throw new Error('weight must be first argument and height - second');
    }

    return Number((weight / (height ** 2)).toFixed(2));
}

export default calcWeightIndex;