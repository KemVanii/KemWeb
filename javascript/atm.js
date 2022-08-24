function validate() {
    let error = ""

    let fname = document.getElementById("fname")
    if(fname.value === "")
    {
        alert("Nhập họ của bạn")
        return false;
    }

    let name = document.getElementById("name")
    if(name.value == "")
    {
        alert("Nhập tên của bạn")
        return false;
    }

    let idNumbers = document.getElementById("idNumbers")
    if(idNumbers.value == "")
    {
        alert("Nhập CMT/Hộ chiếu của bạn")
        
        return false;
    }

    let placeGot = document.getElementById("placeGot")
    if(placeGot.value == "")
    {
        alert("Nhập nơi cấp của bạn")
        return false;
    }

    else {
        alert('Nhập liệu hoàn tất. Cảm ơn bạn')
        return true;
    }
}

function scroll_to_top() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}