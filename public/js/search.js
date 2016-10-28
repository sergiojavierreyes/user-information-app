$(document).ready(function(){

    $('#update').keyup(function(){

        var searchField = $('#update').val()
        var searchresult = []
        console.log(searchField)

        $.post('/form', {data: searchField}, function(data){
            console.log(data)
            $('#searchbar').empty();
            for (let i = data.length - 1; i >= 0; i--) {
                console.log(data[i].firstname)
                $('#searchbar').append('<option>' + data[i].firstname + " " + data[i].lastname +  '</option>')
            }
        })
    })
})