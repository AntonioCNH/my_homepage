var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var timeID = setInterval(updateTime, 1000);
updateTime();

function updateTime(){
    let today = new Date();
    document.getElementById("time").innerHTML = zeroPadding(today.getHours(), 2) + ':' + zeroPadding(today.getMinutes(), 2) + 
        ':' + zeroPadding(today.getSeconds(), 2);
    document.getElementById("date").innerHTML = zeroPadding(today.getFullYear(), 4) + '-' + zeroPadding(today.getMonth() + 1, 2) +
        '-' + zeroPadding(today.getDate(), 2) + ' ' + week[today.getDay()];
}

function zeroPadding(num, digit){
    let zero = '';
    for (var i = 0; i < digit; i++)
    {
        zero += '0';
    }
    return (zero + num).slice(-digit);

}



