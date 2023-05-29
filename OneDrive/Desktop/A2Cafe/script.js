var foodItems = [
    {
        ItemId: 1,
        FoodName: "French Fries",
        Price: 110.00,
        Discount: 11.00,
        FinalPrice: 99.00,
        ImgPath: "./assets/download/frefry.jpg"
    },
    {
        ItemId: 1,
        FoodName: "Burger",
        Price: 150.00,
        Discount: 75.00,
        FinalPrice: 75.00,
        ImgPath: "./assets/download/Burger.jpg"
    },
    {
        ItemId: 1,
        FoodName: "Aloo Samosa",
        Price: 15.00,
        Discount: 0.00,
        FinalPrice: 15.00,
        ImgPath: "./assets/download/Samosa.jpg"
    }
];


var foodHtml = "";
$.each(foodItems, function (key, value) {
    foodHtml += '<section class="foodCard" ><img class="foodImg" src='
        + value.ImgPath + ' alt=""> <div class="divider"></div>  <section class="rightside"> <div class="itemheader">'
        + value.FoodName + '</div> <section><div class="prices"><i class="fa fa-quote-right" aria-hidden="true"></i><div class="">'
        + value.Price + ' <span>₹</span></div></div> <div class="prices"><i class="fa fa-gift" aria-hidden="true"></i> <div class="">'
        + value.Discount + ' <span>₹</span></div></div><div class="prices"><i class="fa fa-tag" aria-hidden="true"></i> <div class="">'
        + (value.Price - value.Discount) + '<span>₹</span></div></div></section><div class="starholder"> <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i></div></section></section>';
});

$('#MainFoodItemDivId').html(foodHtml);