window.onload = function(){

	//Init chico Dropdown	
	var dropdown1 = new ch.Dropdown(document.querySelector('.demo-dropdown1'), { "width": "50px"});
	var dropdown2 = new ch.Dropdown(document.querySelector('.demo-dropdown2'), { "width": "50px"});

	var drops = [];
	drops.push(document.querySelector('.demo-dropdown1'));
	drops.push(document.querySelector('.demo-dropdown2'));

	//Add listener in dropdown 
	drops.forEach(function(drop){
		drop.addEventListener(ch.onpointertap, function () {

			//Verify if dropdown1 is shown
			if (dropdown1.isShown()) {
				var dli = document.querySelectorAll('.ch-popover-content li');

				dli.forEach(function(item){
					item.addEventListener(ch.onpointertap, function(){
						document.querySelector('.demo-dropdown1').innerHTML = this.innerHTML;
						document.querySelector('.input-drop1').value = this.innerHTML;
						dropdown1.hide();
					})
				})
			}
			//Verify if dropdown2 is shown
			else if (dropdown2.isShown()) {
				var dli = document.querySelectorAll('.ch-popover-content li');

				dli.forEach(function(item){
					item.addEventListener(ch.onpointertap, function(){
						document.querySelector('.demo-dropdown2').innerHTML = this.innerHTML;
						document.querySelector('.input-drop2').value = this.innerHTML;
						dropdown2.hide();
					})
				})
			}
		});
	})

	//Init chico Carousel	
	var carousel = new ch.Carousel(ch('.infos-carousel')[0], {});

}
