window.onload = function() {

    // define variables
	var items = document.querySelectorAll(".timeline ul li");
 
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	

	function callbackFunc() {
		for (var i = 0; i < items.length; i++) {
			if (isElementInViewport(items[i])){
				items[i].classList.add("in-view");
			}
			if (! isElementInViewport(items[i])){
				items[i].classList.remove("in-view");
			}
		}
	}
	
	function closeMod(event)
	{
		if (event.keyCode == 27 || event.keyCode == 13 || event.keyCode == 32) { 
			$('#myModal01').hide();
		  }
	}
  
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	
	//close Modal on 'ESC' key press
	window.addEventListener("keydown", closeMod);
   
};

function imgFunc(myText,myImg){
      // Get the modal
      var modal = document.getElementById('myModal01');
      //USE FOR LOOP FOR ALL LIST of SEUSS
      //Get the Text to click to get Image
      var txt =  document.getElementById(myText);
      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById(myImg);
      var modalImg = document.getElementById("img01");
      var captionText = document.getElementById("caption");
      txt.onclick = function(){
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
      };
	  
	// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
	
	   
	};
}

