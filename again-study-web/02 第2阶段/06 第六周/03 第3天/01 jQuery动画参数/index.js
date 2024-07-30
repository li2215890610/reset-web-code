$(':header').click(function(){
    $(this).css('position', 'absolute')
    
    $('ol').css('position', 'absolute').animate({
        left: 400,
        backgroundColor: 'blue',
        color: 'white'
    }, {
        duration: 5 * 1000,
        // step: function(value, fx){
        //     console.log('-'.repeat(30))
        //     console.log(fx.elem)
        //     console.log(fx.start)
        //     console.log(fx.end)
        //     console.log(fx.prop)
        //     console.log(value)
            
        //     if(fx.prop == 'left'){
        //         $(':header').css('top', value + 'px')
        //     }
        // }
        progress: function(animate, progress, ms){
            console.log('-'.repeat(30))
            console.log(animate)
            console.log(progress)
            console.log(ms)
            $('progress').val(progress)
        }
    }).animate({
        top: 400,
        backgroundColor: 'red'
    },{
        duration: 3 * 1000,
        progress: function(animate, progress, ms){
            console.log('-'.repeat(30))
            console.log(animate)
            console.log(progress)
            console.log(ms)
            $('progress').val(progress)
        }
    })
})


$('button').click(function(){
    // $.fx.off = true
    $.fx.interval = 1000 / 60
})