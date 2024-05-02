module.exports.A = 1

function encrypt(data) {
    return "encrypted data";
}

// -module 생략 가능.
exports.encrypt = function encrypt(data) {
    return "encrypted data";
}



function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`${encryptedData} is being sent to ${url}`);
}

module.exports = {
    send
}
