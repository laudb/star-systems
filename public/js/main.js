console.log('scripts loadeeed!');

// fetch row data 
$("tr").click(function(e) {
    let rowItems = $(this).children('td').map(function() {
        return this.innerHTML;
    }).toArray();
    
    let name = rowItems[1];
    let route = 'system/'
    let baseUrl = window.location;
    let url = baseUrl + route + name;  

    console.log({'url': url })  

    $.ajax({
        type:'GET',
        url: url,
        success: function(data) {
            console.log('success')
            window.location.href=url
        },
        error: function(err) {
            console.log({'err': err})
        }
    })
});