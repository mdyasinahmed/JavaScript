//Problem 1
/*
This function will work to operate a integer number
*/
function mindGame(positiveNumber)
{
    positiveNumber *= 3;
    positiveNumber += 10;
    positiveNumber /= 2;
    positiveNumber -= 5;
    let numberOperation = positiveNumber;
    return numberOperation
}
const numberOpResult = 5;
console.log(mindGame(numberOpResult));

// Problem 2
/*
This function will work to check a string which is even or odd
*/
function evenOdd(checkString)
{
    const checkStrLength = (checkString.length);
    if(checkStrLength%2 == 0)
    {
        console.log("even");
    }
    else
    {
        console.log("odd");
    }

    return checkString
}
const takeAString = 'hello';
evenOdd(takeAString);

// Problem 3
/*
This function will compare a number with number 7
*/
function isLGSeven(takeANumber)
{
    const setNumber = 7;
    if(takeANumber < 7)
    {
        console.log(takeANumber - setNumber);
    }
    else
    {
        console.log(takeANumber * 2);
    }

    return takeANumber
}
const takeInputNumber = 15;
isLGSeven(takeInputNumber);

// Problem 4
/*
This function will find the amount of a bad data
*/
function findingBadData(arrayInput)
{
    let goCount = arrayInput.length;
    let i, badData = 0;
    
    for(i=0; i<goCount; i++)
    {
        if(arrayInput[i]<0)
        {
            badData++;
        }
    }
    console.log(badData);

    return arrayInput
}
const takeArray = [ 1, 2, 5];
findingBadData(takeArray)

// Problem 5
/*
This function will work to distribute gems
*/
function gemsToDiamond(friend1,friend2,friend3)
{
    const gems1 = 21*friend1;
    const gems2 = 32*friend2;
    const gems3 = 43*friend3;
    
    let gemsTotal = gems1 + gems2 + gems3;
    
    if(gemsTotal > (1000*2))
    {
        console.log(gemsTotal-2000);
    }
    else{
        console.log(gemsTotal);
    }
    return friend1,friend2,friend3
}

const gemsOf1 =20, gemsOf2 =200, gemsOf3 =50;
gemsToDiamond(gemsOf1,gemsOf2,gemsOf3)