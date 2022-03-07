var pictures = [ {
    "name": "Škofja Loka Bridge",
    "link": "https://live.staticflickr.com/65535/51565570257_0ab24e3457_o.jpg"
},
{
    "name": "Bridge 1",
    "link": "https://live.staticflickr.com/65535/51565570257_0ab24e3457_o.jpg"
},
{
    "name": "Bridge 3",
    "link": "https://live.staticflickr.com/65535/51565570257_0ab24e3457_o.jpg"
} ];
// var divLeft = document.createElement('p');
// for (i = 0; i <= pictures.length - 1; i++) {
    
//     divLeft.innerHTML = pictures[i].name;  
//     append()
//     console.log(pictures[i].link)
//     var img = 'img';
//     var createImg = document.createElement('img');
//     img.src = pictures[i].link;
//     createImg.append('');
//     console.log(pictures[i].name)
// }
       
    



// fetch('./pictures.json')
//     .then(response => response.json())
//     .then(data => {
       
//         var arrItems = [];
//             arrItems = JSON.parse(pictures);
//             console.log(arrItems)
//              var img = document.getElementById('gallery');
//              img.innerHTML = ' ';
     
//              for(picture of pictures) {
                 
//                  var image = document.createElement('img');
//                  image.src = picture.link
//              }
//        });
var gallery = document.getElementById('gallery');

for(const picture of pictures) {
    console.log(picture)
    var div = document.createElement('p');
    var img = document.createElement('img');
    img.src= picture.link;
    img.classList.add('picture');
    div.classList.add('pictureName')
    div.innerHTML = picture.name;
    
    gallery.appendChild(img);
    gallery.appendChild(div);

}