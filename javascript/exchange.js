function doiTien() {
    let st = parseFloat(document.getElementById("stId").value);
    let dv = document.getElementById("dvId").value;

    let d = 0;
    switch (dv) {
        case "eur":
            d = st / 26000;
            break;
        case "usd":
            d = st / 22000;
            break;
        case "aud":
            d = st / 16000;
            break;
    }
    let kq = document.getElementById("kq2");
    kq.innerText = `${st} VNĐ = ${d.toFixed(2)} ${dv.toUpperCase()}`;
}
function scroll_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}