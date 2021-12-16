var usData = new Array(); 
var results = JSON.parse(localStorage.getItem('localResults'))|| [];
(function () {
   
    var table = document.getElementById('result-table');

    var clearButton = document.getElementById('clearBtn');
    clearButton.addEventListener('click', clearData);

    var i = 0;
    results.forEach(function (data) {
        table.innerHTML += getRowTemplate(data, i);
        usData.push(data);
        i++;
    });
 

    function getRowTemplate(userData, i) {
        return '<tbody style="height: 40px">' + '<tr>' +
            '<td>' +
            emptyFilter(userData.login) +
            '</td>' +
            '<td>' +
            emptyFilter(userData.name) +
            '</td>' +
            '<td>' +
            emptyFilter(userData.secondName) +
            '</td>' +
            '<td>' +
            emptyFilter(userData.PurchaseDate) +
            '</td>' +
            '<td>' +
            emptyFilter(userData.kind) +
            '</td>' +
            '<td>' +
            emptyFilter(userData.model) +
            '</td>' +
            '<td>' +
            emptyFilter(getStringFormArray(userData.cmpl)) +
            '</td>' +
            '<td>' +
            emptyFilter(userData.info) +
            '</td>' +
            '</tr>' + '</tbody>';
    }



    function emptyFilter(string) {
        return string === '' ? '[нет данных]' : string;
    }


    function clearData() {
        localStorage.clear();
        window.location.reload();
    }

    
if (results) {

    const select = document.querySelector('select');
    results.forEach( item => {

        const option = document.createElement('option');
        option.innerText = item.login;
        select.appendChild(option);
    })
    

}

})();

function getStringFormArray(array) {
    var string = "";

    array.forEach((element, index, arr)=> {
        string += index !== arr.length - 1 ? element + ',<br> ' : element;
    });

    return string;
}
console.log("message",results)

console.log(results)

