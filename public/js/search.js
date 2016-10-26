$(document).ready(function(){

    $('#searchBar').keyup(function(){
        var searchField = $('#searchBar').val()
        console.log(searchField)

        $.post('/form', {data: searchField}, function(data){
            console.log(data)
            let $update = $('#update')
            $.each(data, function(i, order){
                $update.append('<li>Name</li>')
            })
        })
    })
})