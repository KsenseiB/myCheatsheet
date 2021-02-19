const lis = document.querySelectorAll("[data-pointer]");
const divs = document.querySelectorAll("[data-target]");
lis.forEach((li) =>
{
   li.addEventListener("click", () =>
   {
      [ ...divs ].map((div) =>
      {
         div.classList.remove("show");
      });
      const index = li.dataset.pointer;
      document.querySelector(`[data-target='${ index }']`).classList.add("show");
   });
});

// open links new page
$("a").attr("target", "_blank");
//same but vanilla
//var links = document.links;
//for (var i = 0; i < links.length; i++) {
//   links[i].target = "_blank"; }

//-----THIS WORKS-----
// $(function () {
//    $("[data-pointer]").click(function () {
//       $("[data-target]:not([data-target='" + $(this).data("pointer") + "'])").addClass("hidden");
//       $("[data-target='" + $(this).data("pointer") + "']").removeClass("hidden");
//    });
// });

//--------------NOT---------

// var li = document.getElementsByTagName("li")["data-pointer"].getAttribute("class");
//
// li.addEventListener("click", function () {
//    li.style.display = li.style.display === 'none' ? li.style.removeClass('hidden') : li.style.display === 'none';
// });

//---------------NOT---------

// li.addEventListener('click', function () {
//
//    li.style.display = li.style.display === 'none' ? '' : 'none';
//    {
//       if (li.style.display === 'none') {     //y use both display & class, use either
//          li.style.removeClass('hide')     // li.classList.removeClass
//       } else {
//          li.style.display = 'none';
//       }
//    }
// }
// );

//----------------------------------------------

