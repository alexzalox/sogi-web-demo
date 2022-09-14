const phoneEl = document.querySelector("#phone-number");
const analyticsEl = document.querySelector("#analytics");
console.log(phoneEl, analyticsEl);

phoneEl.value = "0988881234"

function analytics() {
    let phoneNumber = phoneEl.value;
    if (phoneNumber == "") {
        alert("請輸入手機號碼")
        return;
    }

    if (phoneNumber.length < 10) {
        alert("手機號碼為10個數字")
        return;
    }

    //正則式
    const re = /09\d{8}/;
    if (!re.test(phoneNumber)) {
        alert("手機號碼格式不正確");
        return;
    }

    console.log(phoneNumber);
    analyticsPhoneNumber(phoneNumber);



}

//  算法參考 https://ppfocus.com/0/asd29276a.html
function analyticsPhoneNumber(phoneNumber) {
    let fourNumber = phoneNumber.substring(phoneNumber.length - 4, phoneNumber.length);
    console.log(fourNumber);
    console.log(fourNumber / 80);
    //取得整數部分
    console.log(parseInt(fourNumber / 80));

    let code = parseInt((fourNumber / 80 - parseInt(fourNumber / 80)) * 80);
    console.log(code);

    return code;
}