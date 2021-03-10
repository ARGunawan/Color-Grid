let numRows = 0;
let numCols = 0;
let colorSelected;

function selected()
{
	colorSelected = document.getElementById("selectedID").value;
	console.log(colorSelected);
}

//adding the addR() function
//done by Caitlin-Dawn Sangcap
function addR() 
{
	//getting access to the grid
	var table = document.getElementById("grid");

	//creating the new row
	let rows = document.createElement("tr");

	//for the case if the Add Row button get hit first
	let count =0;

	if(numCols==0)
	{
		count = 1;
		numCols=1;
	}
	else
	{
		count = numCols;
	}

	for(var x=0; x<count; x++)
	{
		//making the new block
		//adding the block to the row

		//helper function below  to help change the color for each cell on click
		rows.append(ChangeColor());
	}
	//adding the completed row to the grid
	table.append(rows);
	numRows++;

	//checking that the rows were being added
	//console.log("clicked add row", numRows);
}
//adding the addC() function
//done by Caitlin-Dawn Sangcap
function addC()
{
	//getting access to the grid
	var table = document.getElementById("grid");

	//in the case that the Add Col button is pushed first
	if(numRows==0 && numCols==0)
	{
		numRows=1;
		numCols=1;
    //create the new row
		let rows = document.createElement("tr");
    //create the new cell
		//var cell = document.createElement("td");
    //add the cell to the row
	//helper function below  to help change the color for each cell on click
		rows.append(ChangeColor());
    //add the new row to the table
		table.append(rows);
	}
	
  //for every other button push
	else
	{
    //get the current existing rows in the table 
		let get_row = table.getElementsByTagName("tr");
    //go through each row
		for(var x=0; x<numRows; x++)
		{
      //make a new cell
			//var cell = document.createElement("td");
      //add cell to the row it is currently on
	  //helper function below  to help change the color for each cell on click
			get_row[x].append(ChangeColor());
		}
    //increment the number of numCols
    numCols++;
	//checking that the rows were being added
	//console.log("clicked add row", numRows);
  }
}

//adding fillU() method
//done by James Yoo
function fillU()
{
	let original_box= document.getElementById("grid");	//access the grid
	let trs=original_box.getElementsByTagName("tr");	//get all the elements of tr
	
	for (let i=0; i<numRows; i++)						//loop through to go through tows and columns
	{
		let tds= trs[i].getElementsByTagName("td");		//to access the columns of the boxes in each row
		for (let j=0; j<numCols; j++)
		{
			if (tds[j].style.backgroundColor==="" || tds[j].style.backgroundColor==="white"){		//if the box is white or undefined(for some reason thats how it is instantiated)
				tds[j].style.backgroundColor=colorSelected;     //change color to color Selected
			}
		}
	}
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

/****************************************************************************************/
//removeR method removes the last row of the grid
// created by: Ifte Ahmed
function removeR(){ 
	//rows is a list of the TR elements that exist on the page
	let rows = document.getElementById('grid').getElementsByTagName("TR");
	if(rows.length == 0){ //edge case if there are no rows to remove
    
		alert("no more rows to remove, add some if you like");
	}else{	
		rows[rows.length-1].remove();//gets the last row in the list of rows to remove
		numRows--;//decrease global counter by 1
	}

	if(numRows == 0){//checks to make sure global counters are updated accurately 
		numCols =0;
	}
}//end of removeR method
/****************************************************************************************/

/****************************************************************************************/
//removeR method removes the last column for the grid
// created by: Ifte Ahmed
function removeC(){ 
	//rows is a list of the TR elements that exist on the page
	let rows = document.getElementById('grid').getElementsByTagName("TR");

	if(numCols == 0){ //if no colums send alert
		alert("no more rows to remove, add some if you like");
	}else{
		numCols--; //decrease global counter by 1
	}

	for(let i =0;i<rows.length;i++){
		let cols = rows[i].getElementsByTagName("TD");//gets list of all the columns per row
		if(numCols == 0){//checks to make sure global counters are updated accurately 
			numRows=0;
		}
		cols[cols.length-1].remove(); //remove last column
	}
	console.log(numRows, "cols:", numCols);
}//end of removeC method
/****************************************************************************************/

/****************************************************************************************************/
/*
Done by: Alfonso Gunawan
ChangeColor()
Click on a single cell, changing its color to the currently selected color. This function acts the helper function for the addR
and addC functions as they will append the rows to the correct color when selecting the cell. When the desired color is selected, the 
clicked cell will change to that specific color. It will also override any other color that was already previously filled.
*/

function ChangeColor()
{
	let cell = document.createElement("td"); //lets the cell value be determined by td
	//create an event on click to have the cells change color when clicked
    cell.addEventListener('click', function(){this.style.backgroundColor = colorSelected}, false); 
	//return the value of the cell
    return cell;
}

/*****************************************************************************************************************/
