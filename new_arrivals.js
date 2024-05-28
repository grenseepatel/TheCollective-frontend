// ### GENDER ###
$(document).ready(function() {
    var showText = '+ GENDER',
        hideText = '- GENDER';

    $('.genderDetails').hide().prev('.gender').append('<a href="#" class="toggleLink">' + showText + '</a>');

    $('a.toggleLink').click(function(e) {
        e.preventDefault();
        var is_visible = $(this).closest('.gender').next('.genderDetails').is(':visible');
        $(this).html(is_visible ? showText : hideText).parent().next('.genderDetails').slideToggle()('fast');
    });
});

// ### BRAND ###
$(document).ready(function() {
    var showText = '+ BRAND',
        hideText = '- BRAND';

    $('.brandDetails').hide().prev('.brand').append('<a href="#" class="toggleLink">' + showText + '</a>');

    $('a.toggleLink').click(function(e) {
        e.preventDefault();
        var is_visible = $(this).closest('.brand').next('.brandDetails').is(':visible');
        $(this).html(is_visible ? showText : hideText).parent().next('.brandDetails').slideToggle()('fast');
    });
});

//### CATEGORY ###
$(document).ready(function() {
    var showText = '+ CATEGORY',
        hideText = '- CATEGORY';

    $('.categoryDetails').hide().prev('.category').append('<a href="#" class="toggleLink">' + showText + '</a>');

    $('a.toggleLink').click(function(e) {
        e.preventDefault();
        var is_visible = $(this).closest('.category').next('.categoryDetails').is(':visible');
        $(this).html(is_visible ? showText : hideText).parent().next('.categoryDetails').slideToggle()('fast');
    });
});

// ### OCCATION ###
$(document).ready(function() {
    var showText = '+ OCCATION',
        hideText = '- OCCATION';

    $('.occationDetails').hide().prev('.occation').append('<a href="#" class="toggleLink">' + showText + '</a>');

    $('a.toggleLink').click(function(e) {
        e.preventDefault();
        var is_visible = $(this).closest('.occation').next('.occationDetails').is(':visible');
        $(this).html(is_visible ? showText : hideText).parent().next('.occationDetails').slideToggle()('fast');
    });
});

//### SLEEVES ###
$(document).ready(function() {
    var showText = '+ SLEEVES',
        hideText = '- SLEEVES';

    $('.sleevesDetails').hide().prev('.sleeves').append('<a href="#" class="toggleLink">' + showText + '</a>');

    $('a.toggleLink').click(function(e) {
        e.preventDefault();
        var is_visible = $(this).closest('.sleeves').next('.sleevesDetails').is(':visible');
        $(this).html(is_visible ? showText : hideText).parent().next('.sleevesDetails').slideToggle()('fast');
    });
});

//### FETCH DATA ###
let mainSection = document.getElementById("data-list-wrapper");
let Poduct=[]

function FetchData(){
    fetch("http://localhost:3000/Poduct")
    .then((res)=>res.json())
    .then((data)=>Cardlist(data))
    .catch((err)=>console.log(err))
}
FetchData()

function Cardlist(data){
    const store=data.map((el)=>Card(el.id,el.innerImageSrc,el.productName,el.productBrand,el.productPrice))
    mainSection.innerHTML=store.join("")
}

function Card(id,innerImageSrc,productName,productBrand,productPrice){
    let singlecard=`
    <div class="card" data-id=${id}>
    <div class="card-img">
      <img src=${innerImageSrc} alt="">
    </div>
    <div class="card-body">
      <h4 class="card-name">${productName}</h4>
      <p class="card-brand">${productBrand}</p>
      <p class="card-price">${productPrice}</p>
    </div>
    </div>
    `

    return singlecard
}





// <a href="description.html?name=${encodeURIComponent(productName)}&image=${encodeURIComponent(innerImageSrc)}&brand=${encodeURIComponent(productBrand)}}&price=${encodeURIComponent(productPrice)}"></a>