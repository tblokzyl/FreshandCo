$(document).foundation();

$('#btn-edit').on('click', function(){
    $('#view').removeClass('visible');
    $('#view').addClass('invisible');
    $('#edit').addClass('visible');
    $('#edit').removeClass('invisible');
});


$('#edit').on('valid.fndtn.abide', function() {
    $('#edit').removeClass('visible');
    $('#edit').addClass('invisible');
    $('#view').addClass('visible');
    $('#view').removeClass('invisible');
});