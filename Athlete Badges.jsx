var doc = app.activeDocument;

function setData(pFirst, pLast, pSchool, gFirst, gLast, gTFirst, GTLast) {
	//layers
	
	cardOneFirst = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("1").artLayers.getByName("first");
	cardOneLast = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("1").artLayers.getByName("last");
	cardOneSchool = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("1").artLayers.getByName("school");
	
	cardTwoFirst = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("2").artLayers.getByName("first");
	cardTwoLast = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("2").artLayers.getByName("last");
	cardTwoAcc = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("2").artLayers.getByName("accomp");
	
	cardThreeFirst = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("3").artLayers.getByName("first");
	cardThreeLast = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("3").artLayers.getByName("last");
	cardThreeAcc = doc.layerSets.getByName("front").layerSets.getByName("names").layerSets.getByName("3").artLayers.getByName("accomp");
	
	backCardOneFirst = doc.layerSets.getByName("back").layerSets.getByName("names").layerSets.getByName("1").artLayers.getByName("first");
	backCardOneLast = doc.layerSets.getByName("back").layerSets.getByName("names").layerSets.getByName("1").artLayers.getByName("last");
	
	backCardTwoFirst = doc.layerSets.getByName("back").layerSets.getByName("names").layerSets.getByName("2").artLayers.getByName("first");
	backCardTwoLast = doc.layerSets.getByName("back").layerSets.getByName("names").layerSets.getByName("2").artLayers.getByName("last");
	
	backCardThreeFirst = doc.layerSets.getByName("back").layerSets.getByName("names").layerSets.getByName("3").artLayers.getByName("first");
	backCardThreeLast = doc.layerSets.getByName("back").layerSets.getByName("names").layerSets.getByName("3").artLayers.getByName("last");
	
	//First Names
	cardOneFirst.textItem.contents = pFirst;
	backCardOneFirst.textItem.contents = pFirst;
	cardTwoFirst.textItem.contents = gFirst;
	backCardTwoFirst.textItem.contents = gFirst;
	cardThreeFirst.textItem.contents = gTFirst;
	backCardThreeFirst.textItem.contents = gTFirst;
	//Last Names
	cardOneLast.textItem.contents = pLast;
	backCardOneLast.textItem.contents = pLast;
	cardTwoLast.textItem.contents = gLast;
	backCardTwoLast.textItem.contents = gLast;
	cardThreeLast.textItem.contents = GTLast;
	backCardThreeLast.textItem.contents = GTLast;
	//Additional
	cardOneSchool.textItem.contents = pSchool; 
	cardTwoAcc.textItem.contents = "Accompanying " + pFirst;
	cardThreeAcc.textItem.contents = "Accompanying " + pFirst;
}


var myName = myInput ();
// rest of the script
function myInput () {
var myWindow = new Window ("dialog", "Badge Info");
//Player Header	
	var myInputGroupZero = myWindow.add ("group");
	myInputGroupZero.add ("statictext", undefined, "Player");
	
//Player FirstName	
	var myInputGroupOne = myWindow.add ("group");
	myInputGroupOne.add ("statictext", undefined, "First:");
	var playerFirst = myInputGroupOne.add ("edittext", undefined, "");
	playerFirst.characters = 20;
	playerFirst.active = true;
//Player LastName		
	var myInputGroupTwo = myWindow.add ("group");
	myInputGroupTwo.add ("statictext", undefined, "Last:");
	var playerLast = myInputGroupTwo.add ("edittext", undefined, "");
	playerLast.characters = 20;
	playerLast.active = true;
//Player School		
	var myInputGroupThree = myWindow.add ("group");
	myInputGroupThree.add ("statictext", undefined, "School:");
	var playerSchool = myInputGroupThree.add ("edittext", undefined, "");
	playerSchool.characters = 20;
	playerSchool.active = true;
	
//Guest One Header	
	var guestGroupZero = myWindow.add ("group");
	guestGroupZero.add ("statictext", undefined, "Guest One");
	
//Guest FirstName	
	var guestGroupOne = myWindow.add ("group");
	guestGroupOne.add ("statictext", undefined, "First:");
	var guestFirst = guestGroupOne.add ("edittext", undefined, "");
	guestFirst.characters = 20;
	guestFirst.active = true;

//Guest LastName	
	var guestGroupTwo = myWindow.add ("group");
	guestGroupTwo.add ("statictext", undefined, "Last:");
	var guestLast = guestGroupTwo.add ("edittext", undefined, "");
	guestLast.characters = 20;
	guestLast.active = true;
	
//Same Lastname
	var guestGroupThree = myWindow.add ("group");
	var checkOne = guestGroupThree.add ("checkbox", undefined, "Same Lastname as Athlete");

//Guest Two Header	
	var guestTwoGroupZero = myWindow.add ("group");
	guestTwoGroupZero.add ("statictext", undefined, "Guest Two");

//Guest Two FirstName	
	var guestTwoGroupOne = myWindow.add ("group");
	guestTwoGroupOne.add ("statictext", undefined, "First:");
	var guestTwoFirst = guestTwoGroupOne.add ("edittext", undefined, "");
	guestTwoFirst.characters = 20;
	guestTwoFirst.active = true;
	
//Guest Two LastName	
	var guestTwoGroupTwo = myWindow.add ("group");
	guestTwoGroupTwo.add ("statictext", undefined, "Last:");
	var guestTwoLast = guestTwoGroupTwo.add ("edittext", undefined, "");
	guestTwoLast.characters = 20;
	guestTwoLast.active = true;

//Same Lastname Guest Two
	var guestTwoGroupThree = myWindow.add ("group");
	var checkTwo = guestTwoGroupThree.add ("checkbox", undefined, "Same Lastname as Athlete");	

//Buttons
var myButtonGroup = myWindow.add ("group");
 myButtonGroup.alignment = "right";
 myButtonGroup.add ("button", undefined, "OK");
 myButtonGroup.add ("button", undefined, "Cancel");
	
	
if (myWindow.show () == 1) {
		if (checkOne.value == true) {
			guestLast.text = playerLast.text;
		}
		if (checkTwo.value == true) {
			guestTwoLast.text = playerLast.text;
		}
	
	setData(playerFirst.text.toUpperCase(), playerLast.text.toUpperCase(), playerSchool.text.toUpperCase(), guestFirst.text.toUpperCase(), guestLast.text.toUpperCase(), guestTwoFirst.text.toUpperCase(), guestTwoLast.text.toUpperCase());
// return myText.text;
}

}