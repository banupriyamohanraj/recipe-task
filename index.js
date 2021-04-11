var container = document.createElement('div')
container.setAttribute('class','container-fluid p-0')

    var navbar = document.createElement('nav')
    navbar.setAttribute('class','navbar navbar-expand-xl sticky-top navbar-light bg-success')

        var brand = document.createElement('a')
        brand.setAttribute('class','navbar-brand')
        brand.href = '#'
        brand.innerHTML = 'Recipe'
    navbar.appendChild(brand)
container.appendChild(navbar)


var carousel = document.createElement('div')
carousel.setAttribute('id','carouselExampleSlidesOnly')
carousel.setAttribute('class','carousel slide')
carousel.setAttribute('data-ride','carousel')
    var carouselinner = document.createElement('div')
    carouselinner.setAttribute('class','carousel-inner')
        var carouselitem1 = document.createElement('div')
        carouselitem1.setAttribute('class','carousel-item active')
            var image1 = document.createElement('img')
            image1.setAttribute('src','https://wallpapercave.com/wp/wp3495545.jpg')
            image1.setAttribute('class','d-block w-100')
        carouselitem1.appendChild(image1)
        var carouselitem2 = document.createElement('div')
        carouselitem2.setAttribute('class','carousel-item')
            var image2 = document.createElement('img')
            image2.setAttribute('src','https://wallpaperaccess.com/full/767033.jpg')
            image2.setAttribute('class','d-block w-100')
        carouselitem2.appendChild(image2)
        var carouselitem3 = document.createElement('div')
        carouselitem3.setAttribute('class','carousel-item')
            var image3 = document.createElement('img')
            image3.setAttribute('src','https://www.highreshdwallpapers.com/wp-content/uploads/2014/01/a-74.jpg')
            image3.setAttribute('class','d-block w-100')
        carouselitem3.appendChild(image3)
    carouselinner.append(carouselitem1,carouselitem2,carouselitem3)
carousel.appendChild(carouselinner)



var searchcolumn = document.createElement('div')
searchcolumn.setAttribute('class','col-4 offset-4')
    var inputgroup = document.createElement('div')
    inputgroup.setAttribute('class','input-group mt-3 mb-3')
        var inputfield = document.createElement('input')
        inputfield.setAttribute('type','text')
        inputfield.setAttribute('class','form-control')
        inputfield.setAttribute('id','searchinput')
        inputfield.setAttribute('placeholder','Enter a recipe name')
        inputfield.setAttribute('aria-label',"recipename")
        inputfield.setAttribute('aria-describedby','button-addon2')
        var inputgroupappend = document.createElement('div')
        inputgroupappend.setAttribute('class','input-group-append')
                var button = document.createElement('button')
                button.setAttribute('class','btn btn-success')
                button.setAttribute('type','button')
                button.setAttribute('id','search')
                button.innerText = 'Search';
        inputgroupappend.appendChild(button)
      
    inputgroup.append(inputfield,inputgroupappend)

searchcolumn.appendChild(inputgroup)

var recipecontent = document.createElement('div')
recipecontent.setAttribute('id','displaycontent')
    var contentrow = document.createElement('div')
    contentrow.setAttribute('class','row')
    contentrow.setAttribute('id','cardrows')
recipecontent.appendChild(contentrow)


document.body.append(container,carousel,searchcolumn,recipecontent)



// let searchbutton=document.querySelector('#search');
// searchbutton.addEventListener('click',()=>{
     
//   getdata();
// })

  $(document).ready(function(){  
    $("#search").click(function(){  
        $('#this').one();
        $('#this').add(getdata()); 
       
    });
    
}); 

  
async function getdata(){
  var userinput = document.querySelector('#searchinput').value;
  var APP_ID = '4e017ef6';
  var API_KEY ='c9ddf776232a121138a7d491ce0bab55'
	var resp = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${userinput}`)
	.then((resp)=>{
return resp.json();
})
.then((data)=>{
	console.log(data);


display(data);


})
.catch((err)=>{
	console.log(err);
})

}



function display(data)
{

var row = document.querySelector('div.row')
// var recipedata = data.hits;
console.log(data.hits)
if(data.count === 0)
{
    alert('Please Try with a Different Recipe Name')
}
row.innerHTML='';
data.hits.forEach((obj)=>{
    createcard(obj);
   
})

function createcard(obj){
var col = document.createElement('div')
col.setAttribute('class','col-md-3')

var card = document.createElement('div')
card.setAttribute('class','card')

var cardbody = document.createElement('div')
cardbody.setAttribute('class','card-body p-0')
var img = document.createElement('img')
img.setAttribute('class','card-img-top')
img.setAttribute('src',`${obj.recipe.image}`)

var h4 = document.createElement('h4')
h4.setAttribute('class','card-title ')
h4.innerHTML = `${obj.recipe.label}`

var h5 = document.createElement('h5')
h5.setAttribute('class','card-text')
h5.innerHTML = `Dish Type:${obj.recipe.dishType}<br>
Cuisine Type:${obj.recipe.cuisineType}<br>
  Source:${obj.recipe.source}<br>
   Diet Type:${obj.recipe.dietLabels}`

var fullrecipelink = document.createElement('a')
fullrecipelink.setAttribute('class','btn btn-success')
fullrecipelink.setAttribute('id','receipbutton')
fullrecipelink.setAttribute('href',`${obj.recipe.url}`)
fullrecipelink.innerHTML = ' view full Recipe'
fullrecipelink.style='margin:5px'

cardbody.append(img,h4,h5,fullrecipelink)
card.appendChild(cardbody)
col.appendChild(card)
row.appendChild(col)
}

}




