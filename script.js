let numRows = 0;
let numCols = 0;
let colorSelected;

function selcted(){
	colorSelected = document.getElementById("selctedID").value;
	console.log(colorSelected);
}


//adding the addR() function
//done by Caitlin-Dawn Sangcap
function addR() 
{
	var table = document.getElementById("grid");
	let row = document.createElement("TR");
	var cell = document.createElement("TD");
	row.append(cell);
	table.append(row);
	numRows++;
	//checking that the rows were being added
	//console.log("clicked add row", numRows);
}

//adding the fill() function
//done by James Yoo
function fill()
{
	let original_box= document.getElementById("grid");	//access the grid
	let trs=original_box.getElementsByTagName("tr");	//get all the elements of tr
	
	for (let i=0; i<numRows; i++)						//loop through to go through tows and columns
	{
		let tds= trs[i].getElementsByTagName("td");		//to access the columns of the boxes in each row
		for (let j=0; j<numCols; j++)
		{
			tds[j].style.backgroundColor=colorSelected; //change color to color Selected
		}
	}
}

//clearAll() function
//done by James Yoo
function clearAll()
{
	let original_box= document.getElementById("grid");	//access the grid
	let trs=original_box.getElementsByTagName("tr");	//get all the elements of tr
	
	for (let i=0; i<numRows; i++)						//loop through the rows and columns
	{
		let tds= trs[i].getElementsByTagName("td");		//to access the columns of the boxes in each row
		for (let j=0; j<numCols; j++)
		{
			tds[j].style.backgroundColor="white";		//reset the color to white.
		}
	}
}