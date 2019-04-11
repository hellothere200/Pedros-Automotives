var items = [];
var prices = [];
var images = [];
$('.addbutton').click(function() {
    var item = $(".product").val();
    items.push(item);
    $("body").append("<li>" + item + "</li>");

    var price = $(".price").val();
    prices.push(price);
    $("body").append("<li>" + price + "</li>");

    prices.forEach(function(price2) {
        console.log(price2);
    });

    var image = $(".url").val();
    images.push(image);
    $("#url").append("<div>" +
        "<img src=" + image + ">" +
        "</div>");

});
$('.purchase').click(function() {
    alert("Thank You for your purchase of " + items[0] + " and other things");
});