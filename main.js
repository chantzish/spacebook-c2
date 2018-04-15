var posts = [];
var idC=0;
// var dateObj = new Date();
var addPost = function(content){
    posts.push({
        text: content,
        // date: dateObj.getDate()+"-"+(dateObj.getMonth()+1)+"-"+dateObj.getFullYear()
        id: idC++
    })
}

var renderPosts = function() {
    $('.posts').find('p').remove();
    posts.forEach(postObj => $('.posts').append('<p class="post" data-id="'+postObj.id+
    '"><button type="button" class="remove">REMOVE</button>'+postObj.text+'</p>'));
    $('button.remove').on('click',function(){
        posts.splice(posts.findIndex(postObj => postObj.id == $(this).closest('p').data().id),1);
        renderPosts();
    })
}

$('.add-post').click(function() {
    addPost($('#post-name').val());
    renderPosts();
})