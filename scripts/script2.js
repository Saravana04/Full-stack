var count = 0;
function testJS() {
    

    count= count+1;
    console.log(count);

    //var b = document.getElementById('name').value,
        url = '/Full-Stack/Sample/index.html?count=' + encodeURIComponent(count);

    window.open(url);
}