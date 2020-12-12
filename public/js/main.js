console.log('scripts loadeeed!');

// fetch row data 
$("tr").dblclick(function(e) {
    let rowItems = $(this).children('td').map(function() {
        return this.innerHTML;
    }).toArray();
    
    let name = rowItems[1];
    let route = 'details'
    let baseUrl = window.location;
    let url = baseUrl + route;  

    console.log({'url': url })  

    $.ajax({
        type:'POST',
        url: url,
        data:name,
        success: function(data) {
            console.log('success')
            $(".selection").innerHTML(data);
        },
        error: function(err) {
            console.log({'err': err})
        }
    })
});