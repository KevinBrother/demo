importScripts('./util.js');

self.addEventListener('message', function(messageEvent) {
    const {min, max, key} = messageEvent.data;
    console.time(key);
    const result = generatePrimes(min, max);
    console.timeEnd(key);

    self.postMessage(result.length);
})
