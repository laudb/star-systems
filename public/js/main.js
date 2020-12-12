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

    // console.log({'url': url })  

    $.ajax({
        type:'POST',
        url: url,
        data:{name}
    }).then((response) => {
        console.log('success')
        let results = response.pods;
        let content = results.filter( result => result['title']==='Properties' );
        // console.log({'api-content': content });
        // console.log({'api-subpods': content[0]});
        // console.log({'api-sub-subpods': content[0].subpods[0]});
        let {img, plaintext } = content[0].subpods[0];
        // console.log({img, plaintext });
        $(".selection-text").innerHTML={plaintext};
        $(".selection-img").attr('src', {img}.src );
    }).catch((err)=>{
        console.log({'err': err})
    })
});