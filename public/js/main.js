console.log('scripts loadeeed!');

// fetch row data 
$(document).ready(function () {
    $("tr").dblclick(function(e) {

        let rowItems = $(this).children('td').map(function() {
            return this.innerHTML;
        }).toArray();

        let name = rowItems[1];
        let route = 'details'
        let baseUrl = window.location;
        let url = baseUrl + route;  
        
        $.ajax({
            type:'POST',
            url: url,
            data:{name}
        }).then((response) => {
            console.log({'response>>>>': response})
            $("#wolfram-image").attr("src", response.img);
        }).catch((err)=>{
            console.log({'err': err})
        })
    });

});