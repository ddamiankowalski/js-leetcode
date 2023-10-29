const romanToInt = (string) => {
    result = 0;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char === 'I') {
            if(string[i + 1] === 'V') {
                result += 4;
                i++;
            } else if(string[i + 1] === 'X') {
                result += 9;
                i++;
            } else {
                result +=1;
            }
        }

        if (char === 'X') {
            if(string[i + 1] === 'L') {
                result += 40;
                i++;
            } else if(string[i + 1] === 'C') {
                result += 90;
                i++;
            } else {
                result +=10;
            }
        }

        if (char === 'C') {
            if(string[i + 1] === 'D') {
                result += 400;
                i++;
            } else if(string[i + 1] === 'M') {
                result += 900;
                i++;
            } else {
                result += 100;
            }
        }

        if(char === 'M') {
            result += 1000;
        }

        if(char === 'V') {
            result += 5;
        }

        if(char === 'L') {
            result += 50;
        }

        if(char === 'D') {
            result += 500;
        }
    }

    return result;
}