$(document).ready(function(){

    var timeNow = 0
    console.log(timeNow)

    $('#update').keyup(function(){

        var searchField = $('#update').val()
        var searchresult = []
        console.log(searchField)

        var timeLater = Date.now()
        console.log(timeNow)
        console.log(timeLater)
        console.log(timeLater-timeNow)
        if (timeLater - timeNow > 3000){
            console.log(timeLater - timeNow)
            $.post('/form', {data: searchField}, function(data){
                console.log(data)
                $('#searchbar').empty();
                for (let i = data.length - 1; i >= 0; i--) {
                    console.log(data[i].firstname)
                    $('#searchbar').append('<option>' + data[i].firstname + " " + data[i].lastname +  '</option>')
                }
            })
            
            timeNow = Date.now()
        }
    })
})