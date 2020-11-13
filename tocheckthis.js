<nav class="nav">
   <ul>
      <li id="tools" data-is-active="false">Tools</li>
      <li id="games" data-is-active="false">Games</li>
      <li id="practice" data-is-active="false">Interactive tutorials</li>
      <li id="vids" data-is-active="false">Video Tutorials</li>
      <li id="articles" data-is-active="false">Articles & written tutorials</li>
   </ul>
</nav>
window.addEventListener('DOMContentLoaded', () => {
   document.querySelector("nav").addEventListener("click", (e) => {
      let target = e.target;
      if (target.nodeName === "LI") {
         if (target.dataset.isActive === "false") {
            target.dataset.isActive = true;
            document.querySelector("#table-" + target.id).classList.add("hidden");
         }
         else {
            document.querySelector("#table-" + target.id).classList.remove("hidden");
            target.dataset.isActive = false;
         }
      }
   })
});



