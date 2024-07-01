const xRandNo = parseInt(process.argv[2], 10);
const rangeA = parseInt(process.argv[3], 10);
const rangeB = parseInt(process.argv[4], 10);

if (isNaN(xRandNo) || isNaN(rangeA) || isNaN(rangeB)) {
    console.error("Please provide valid numbers for xRandNo, rangeA, and rangeB.");
    process.exit(1);
}

function setRange(rangeA, rangeB) {
    let result = [];
    for (let i = rangeA; i <= rangeB; i++) {
        result.push(i);
    }
    return result;
}

function getRandomNo(array, xRandNo) {
    let tempArray = array.slice();
    let collectRandomNo = [];
    if (xRandNo > tempArray.length) {
        throw new Error("You cannot pick more random numbers than are available in the given range.");
    }

    for (let i = 0; i < xRandNo; i++) {
        let randomIndex = Math.floor(Math.random() * tempArray.length);
        collectRandomNo.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1); // It removes one element at the random index
    }

    return collectRandomNo;
}

// Use the provided rangeA and rangeB values
let array = setRange(rangeA, rangeB);

// Generate and print xRandNo random numbers from the range
try {
    let randomNumbers = getRandomNo(array, xRandNo);
    console.log(`Random numbers: ${randomNumbers.join(', ')}`);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}




