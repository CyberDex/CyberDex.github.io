function loadJSON(url) {
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 2000;
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        let JSONData = JSON.parse(xhr.response);
                        resolve(JSONData);
                    } catch (err) {
                        reject(err);
                    }
                } else {
                    reject(xhr.status)
                }
            }
        }
        xhr.ontimeout = function () {
            reject('timeout')
        }
        xhr.open('get', url, true)
        xhr.send();
    })
}

function getRandomSlot(slotsCount) {
    return Math.floor(Math.random() * Math.floor(slotsCount) + 1);
}
export default {
    loadJSON,
    getRandomSlot
}