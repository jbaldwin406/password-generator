function getRandomChar(fromString) {
    return fromString[randRange(fromString.length)];
}

function randRange(max) {
    const requestBytes = Math.ceil(Math.log2(max) / 8);
    
    if(!requestBytes) {
        return 0;
    }

    const maxNum = Math.pow(256, requestBytes);
    const ar = new Uint8Array(requestBytes);

    // eslint-disable-next-line no-constant-condition
    while (true) {
        crypto.getRandomValues(ar);

        let val = 0;
        for (let i = 0; i < requestBytes; i++) {
            val = (val << 8) + ar[i];
        }

        if (val < maxNum - maxNum % max) {
            return val % max;
        }
    }
}

const passwordOptions = {
    numbers: '1234567890',
    symbols: '!@#$%^&*()-+',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

export function buildPassword(value, options) {
    var passwordInfo = '';
    var passwordChars = [];

    for (let key in options) {
        let value;
        value = options[key];
        if (value) {
        passwordInfo += passwordOptions[key];
        passwordChars.push(getRandomChar(passwordOptions[key]))
        }
    }
    
    while (passwordChars.length < value) {
        passwordChars.push(getRandomChar(passwordInfo));
    }

    for (let i = passwordChars.length - 1; i > 0; i--) {
        const swapIdx = randRange(i + 1);
        const temp = passwordChars[i];

        passwordChars[i] = passwordChars[swapIdx];
        passwordChars[swapIdx] = temp;
    }

    return passwordChars.join('');
    
}