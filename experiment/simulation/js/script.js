var flag=-1;
var count=-1;
var circle=["Slide1.PNG","Slide2.jpg","Slide3.jpg","Slide6.jpg","Slide9.jpg","Slide10.jpg"];
var rectangle=["Slide1.PNG","Slide2.jpg","Slide4.jpg","Slide7.jpg","Slide9.jpg","Slide11.jpg"];
var triangle=["Slide1.PNG","Slide2.jpg","Slide5.jpg","Slide8.jpg","Slide9.jpg","Slide12.jpg"];
var shapes=["circle.jpg","rectangle.jpg","triangle.jpg"];
var directory="images/";
var area=0;
var array;
function setshape(){
	var str=document.getElementById("inputa").value.trim();
	array = str.split(" ");
	var error=false;
	for(var i=0;i<array.length;i++)
    	{
		console.log(isNaN(array[i]))
        	if(isNaN(array[i])){error=true;break;}
    	}
	if(array.length>3 || str.trim()==""){
		//alert("Invalid Number of Parameters"); 
		 
        document.getElementById('reset').click();
	document.getElementById('outputa').innerHTML="Invalid Number of Parameters";
	}
	else if(error){
		console.log(error);
		document.getElementById('reset').click();
		document.getElementById('outputa').innerHTML="Invalid Parameters";		
	}
	else{
		document.getElementById('outputa').innerHTML="";
		flag=array.length;
		count=-1;
        if (array.length==1) {
            area=3.14*array[0]*array[0];
	    area="The area of circle is "+area;
            console.log(area);
            
        }
        else if (array.length==2) {
            area=array[0]*array[1];
	     area="The area of rectangle is "+area;
            console.log(area);
        }
        else if(array.length==3){
            s=parseInt(array[0])+parseInt(array[1])+parseInt(array[2]);
            s=s/2;                  
            area=Math.sqrt(s*(s-array[0])*(s-array[1])*(s-array[2]));
	    area="The area of triangle is "+area;
            console.log(area);
        }
        var image = document.getElementById('myImage');
        image.src='images/default.jpg';
	}
	//console.log(area);
	 
    
}

function setoutpic(){
	//shape picture on last pane
    var image = document.getElementById('shapepic');
	image.src = directory+shapes[flag-1];
}

	

function init(){
    flag=-1;
	count=-1;
	}
	
function next(){
	if(flag!=-1){
		count=count+1;
		if(count>6){
            count-=1;
            console.log(count);
            
        }
	var image = document.getElementById('myImage');
	var text='';
	if(count==3){
		if(flag==1){
			text='<br><b>Radius : </b><span id="radius">'+array[0]+'</span><br><br>';
		}
		else if(flag==2){
			text='<br><b>Length : </b><span id="length">'+array[0]+'</span><br><br><b>Breadth : </b><span id="breadth">'+array[1]+'</span><br><br>';
		}
		else if(flag==3){
			text='<br><b>Side1 : </b><span id="side1">'+array[0]+'</span><br><br><b>Side2 : </b><span id="side2">'+array[1]+'</span><br><br><b>Side3 : </b><span id="side3">'+array[2]+'</span><br>';
		}
		document.getElementById('parameters').innerHTML=text;
	}		
        if(count==6){
            console.log(count);            
            image.src = directory+'full_code.jpg';                        
            document.getElementById('outputa').innerHTML=area; 
	    document.getElementById('quizalert').innerHTML="Attempt the task given below!";
	    document.getElementById("quizdiv").style.display = "block";
		}
        else{
            if(flag==1){            
			image.src = directory+circle[count];
		}
		if(flag==2){
			image.src = directory+rectangle[count];
		}
		if(flag==3){
			image.src = directory+triangle[count];
		}
        }   
	if(count==2){
		setoutpic();
	}
		
	}
}

function prev(){
	if(flag!=-1 && count>=0){
		count=count-1;
		if(count<0){
			count=0;
		}
		var image = document.getElementById('myImage');
		if(flag==1){
			image.src = directory+circle[count];
		}
		if(flag==2){
			image.src = directory+rectangle[count];
		}
		if(flag==3){
			image.src = directory+triangle[count];
		}
	}
}

function viewresult(){
var qans=0;
var selected=0;

//checking for total marked answers
if(document.getElementById("op11").checked==true){
	selected=selected+1;
}
if(document.getElementById("op12").checked==true){
	selected=selected+1;
}
if(document.getElementById("op13").checked==true){
	selected=selected+1;
}
if(document.getElementById("op14").checked==true){
	selected=selected+1;
}
if(document.getElementById("op21").checked==true){
	selected=selected+1;
}
if(document.getElementById("op22").checked==true){
	selected=selected+1;
}
if(document.getElementById("op31").checked==true){
	selected=selected+1;
}
if(document.getElementById("op32").checked==true){
	selected=selected+1;
}
if(document.getElementById("op33").checked==true){
	selected=selected+1;
}
if(document.getElementById("op34").checked==true){
	selected=selected+1;
}
if(document.getElementById("op41").checked==true){
	selected=selected+1;
}
if(document.getElementById("op42").checked==true){
	selected=selected+1;
}
if(document.getElementById("op43").checked==true){
	selected=selected+1;
}
if(document.getElementById("op44").checked==true){
	selected=selected+1;
}
if(document.getElementById("op45").checked==true){
	selected=selected+1;
}
if(document.getElementById("op51").checked==true){
	selected=selected+1;
}
if(document.getElementById("op52").checked==true){
	selected=selected+1;
}
if(document.getElementById("op53").checked==true){
	selected=selected+1;
}
if(document.getElementById("op54").checked==true){
	selected=selected+1;
}

if(selected==5){
//checking users response
if(document.getElementById("op11").checked==true){
	document.getElementById("lop11").style.color = 'red'; // red or #fffff
}
if(document.getElementById("op12").checked==true){
	document.getElementById("lop12").style.color = 'red';
}
if(document.getElementById("op13").checked==true){
	document.getElementById("lop13").style.color = 'red';
}
if(document.getElementById("op14").checked==true){
	document.getElementById("lop14").style.color = 'red';
}
if(document.getElementById("op21").checked==true){
	document.getElementById("lop21").style.color = 'red';
}
if(document.getElementById("op22").checked==true){
	document.getElementById("lop22").style.color = 'red';
}
if(document.getElementById("op31").checked==true){
	document.getElementById("lop31").style.color = 'red';
}
if(document.getElementById("op32").checked==true){
	document.getElementById("lop32").style.color = 'red';
}
if(document.getElementById("op33").checked==true){
	document.getElementById("lop33").style.color = 'red';
}
if(document.getElementById("op34").checked==true){
	document.getElementById("lop34").style.color = 'red';
}
if(document.getElementById("op41").checked==true){
	document.getElementById("lop41").style.color = 'red';
}
if(document.getElementById("op42").checked==true){
	document.getElementById("lop42").style.color = 'red';
}
if(document.getElementById("op43").checked==true){
	document.getElementById("lop43").style.color = 'red';
}
if(document.getElementById("op44").checked==true){
	document.getElementById("lop44").style.color = 'red';
}
if(document.getElementById("op45").checked==true){
	document.getElementById("lop45").style.color = 'red';
}
if(document.getElementById("op51").checked==true){
	document.getElementById("lop51").style.color = 'red';
}
if(document.getElementById("op52").checked==true){
	document.getElementById("lop52").style.color = 'red';
}
if(document.getElementById("op53").checked==true){
	document.getElementById("lop53").style.color = 'red';
}
if(document.getElementById("op54").checked==true){
	document.getElementById("lop54").style.color = 'red';
}





//checking correct answers
if(document.getElementById("op11").checked==true){
	qans=qans+1;
	}
if(document.getElementById("op22").checked==true){
	qans=qans+1;
	}
if(document.getElementById("op32").checked==true){
	qans=qans+1;
	}
if(document.getElementById("op42").checked==true){
	qans=qans+1;
	}
if(document.getElementById("op53").checked==true){
	qans=qans+1;
	}
	//marking correct answers
	document.getElementById("lop11").style.color = '#2fd677'; 
	document.getElementById("lop22").style.color = '#2fd677'; 
	document.getElementById("lop32").style.color = '#2fd677'; 
	document.getElementById("lop42").style.color = '#2fd677'; 
	document.getElementById("lop53").style.color = '#2fd677'; 

	document.getElementById('score').innerHTML="Your score is "+qans+"/5.";
	document.getElementById("score").style.color = 'black';
	document.getElementById('quizsubmit').disabled= true;
	document.getElementById('quizsubmit').style.backgroundColor='grey';
	}
	else{
		document.getElementById('score').innerHTML="Attempt all questions!";
		document.getElementById("score").style.color = 'red';
	}
}
