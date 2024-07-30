// $('strong').parent().css('color', 'red')
// $('strong').parent().parent().parent().css('font-family', '幼圆')


// $('article').find('strong').parents().css('border', '1px solid blue')
// $('strong').parents('article').css('border', '1px solid blue')


// $('strong').parentsUntil('article').css('border', '1px solid blue')


// $('strong').closest('strong').css('border', '1px solid blue')
// $('strong').closest('*').css('border', '1px solid blue')
// $('strong').closest('section').css('border', '1px solid blue')


$('strong').offsetParent().css({
    'background-color': 'red',
    'color': 'white'
})