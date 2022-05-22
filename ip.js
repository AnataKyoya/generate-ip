$.getJSON("https://api.ipify.org?format=json", function (data) {
    document.getElementById('gfg').innerHTML = "IP User Block: " + data.ip;

    const ipBlock = document.getElementById('gfg').innerHTML;

    if (ipBlock.includes(data.ip)) {
        setTimeout(function () {
            document.getElementById('gfg').innerHTML = "I Love You";
        }, 4000);
    }
});