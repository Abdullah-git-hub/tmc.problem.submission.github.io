/*
fb: https://www.facebook.com/sharer.php?u=[post-url]
twt: https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
whats: https://api.whatsapp.com/send?text=[post-title] [post-url]
lnkin: https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
*/

// let title = document.getElementById("title").innerHTML;
// let img = document.getElementById("contestImg").src;
let title = $("#userName").text()+" has solved "+ $("#probName").text();
let pageUrl = document.location.href;
let facebookBtn = $("#facebook");
let twitterBtn = $("#twitter");
let whatsappBtn = $("#whatsapp");
let linkedinBtn = $("#linkedin");


facebookBtn.attr("href", `https://www.facebook.com/sharer.php?u=${pageUrl}`);
twitterBtn.attr("href", `https://twitter.com/share?url=${pageUrl}&text=${title}`);
whatsappBtn.attr("href", `https://api.whatsapp.com/send?text=${title} ${pageUrl}`);
linkedinBtn.attr("href", `https://www.linkedin.com/shareArticle?url=${pageUrl}&title=${title}`);