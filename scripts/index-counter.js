function createCounter(n) {
    var r;

    function t(n) {
        var r = n[0] + Math.random() * (n[1] + 1 - n[0]);
        return Math.floor(r)
    }

    return r = t(n), function n(e) {
        var o = ["заявка", "заявки", "заявок"], u = (r += e || 1) % 100;
        u >= 5 && u <= 20 ? finalWord = o[2] : (u %= 10, finalWord = 1 == u ? o[0] : u >= 2 && u <= 4 ? o[1] : o[2]), this.innerHTML = "Одобрено <strong>" + r + "</strong> " + finalWord;
        var i = t([2, 7]);
        setTimeout(n.bind(this, i), t([2e3, 7e3]))
    }
}

function getAllCounters() {
    document.querySelectorAll(".counter").forEach(function (n) {
        createCounter([300, 500]).bind(n)()
    })
}

getAllCounters();