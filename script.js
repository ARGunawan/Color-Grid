let numRows = 0;
let numCols = 0;
let colorSelected;

function selected(){
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
		var cell = document.createElement("td");
		//adding the block to the row
		rows.append(cell);
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
		var cell = document.createElement("td");
    //add the cell to the row
		rows.append(cell);
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
			var cell = document.createElement("td");
      //add cell to the row it is currently on
			get_row[x].append(cell);
		}
    //increment the number of numCols
    numCols++;
	//checking that the rows were being added
	//console.log("clicked add row", numRows);
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