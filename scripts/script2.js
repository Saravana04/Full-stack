var count = 0;
function testJS() {
    

    count= count+1;
    console.log(count);

    $.ajax({
        url: 'https://api.myjson.com/bins/93dfw',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function (data) {
            alert("Success");
        },
        data: JSON.stringify(count)
    });
    //var b = document.getElementById('name').value,
        //url = '/Full-Stack/Sample/index.html?count=' + encodeURIComponent(count);     

    window.open('/Full-Stack/Sample/index.html');
}