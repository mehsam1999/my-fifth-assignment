function getHtmlByLocation(id){
    return document.getElementById(id).addEventListener('click',function(){
        window.location.href = './blog.html';
})
}
const home = getHtmlByLocation('home')
