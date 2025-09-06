// Maddox Duggan
// 101483006
// Lab Exercise 1

// Exercise 1
// Writing a JS program to capitalize the first letter of each word of a given string

function capitalFirstLetter(string) {
    const breakdown = string.split(" ");

    for (let i = 0; i < breakdown.length; i++) {
        breakdown[i] = breakdown[i].charAt(0).toUpperCase() + breakdown[i].slice(1);
    }

    return breakdown.join(" ");
}

// Exercise 2
// Find the largest of three given integers

function findLargestInt(a,b,c){
    if (a > b){
        if (a > c){
            return a;
        }
        return c;
    }
    if (a > c){
        if (a > b){
            return a;
        }
        return b;
    }
    if (b > a){
        if(b > c){
            return b;
        }
        return c;
    }
    if (b > c){
        if (b > a){
            return b;
        }
        return a;
    }
    if (c > a){
        if (c > b){
            return c;
        }
        return b;
    }
    if(c > b){
        if (c > a){
            return c;
        }
        return a;
    }
}

// Exercise 3
// Moving the last 3 characters of a string to the front

function lastThreeLetters(string){
    const end = string.slice(-3);
    return end + string.slice(0, -3);
}

// Exercise 4
// Find the angle type of a given angle

function angleType(int){
    if (int < 90){
        return "Acute Angle"
    }
    if (int === 90){
        return "Right Angle"
    }
    if (int > 90 && int < 180){
        return "Obtuse Angle"
    }
    if (int === 180){
        return "Straight Angle"
    }
    else{
        return "Invalid Angle"
    }
}

console.log(capitalFirstLetter("hello my name is maddox"));
console.log(findLargestInt(1,2,3));
console.log(lastThreeLetters("maddox"));
console.log(angleType(140))