function functionFleurs()
{
  var checkFleurs = document.getElementById("checkFleurs");
  var targ = document.getElementById("fleursD");
  if (checkFleurs.checked == true)
    {
      targ.classList.remove("fleursC");
    } else
      {
        targ.classList.add("fleursC");
      }
}	

//Function onscroll :
//Get categories_basket :
//var categories_basket = document.getElementById("categories_basket");
//Get the offset position :
//var sticky = categories_basket.offsetTop;
//Add the sticky class to categories_basket when you reach its scroll position. Remove "sticky" when you leave the scroll position :
//function functionScroll() {
//	if (window.pageYOffset > sticky) {
//		categories_basket.classList.add("sticky");
//	} else {
//		categories_basket.classList.remove("sticky");
//	}
//}


