
// $('.design').click((e)=>{
//     e.currentTarget.nextElementSibling.classList.remove('d-none')
//     e.currentTarget.nextElementSibling.classList.add('d-block')
//     // $('.design-description').css({'text-align':'center'})

// })
$('.folio').mouseenter((e)=>{
   console.log($(this))
   $(e.currentTarget).find('.title').addClass('d-block')
   $(e.currentTarget).find('.title').removeClass('d-none')
})
$('.folio').mouseleave((e)=>{
   $(e.currentTarget).find('.title').addClass('d-none')
   $(e.currentTarget).find('.title').removeClass('d-block')
})
