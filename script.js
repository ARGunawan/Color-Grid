let numRows = 3;
let numCols = 3;
let colorSelected;

function selcted(){
	colorSelected = document.getElementById("selctedID").value;
	console.log(colorSelected);
}

/****************************************************************************************/
//removeR method removes the last row of the grid
// created by: Ifte Ahmed
function removeR(){ 
	//rows is a nodelist of the TR elements that exist on the page
	let rows = document.getElementById('grid').getElementsByTagName("TR");
	if(rows.length == 0){ //edge case if there are no rows to remove
		alert("no more rows to remove, add some if you like")
	}else{	
		rows[rows.length-1].remove();//gets the last row in the list of rows to remove
	}
}//end of removeR method
/****************************************************************************************/