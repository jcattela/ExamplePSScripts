var doc = activeDocument;
var curLayer

var indexThing = ["66","67","68"]
var firstNames = ["Michael","Brandon","Tabo"]
var lastNames = ["Wooten","Rose","Tabarraci"]
var playerNumbers = ["66","16","2"]



function goThroughLayers(parentLayer, k){
    for(var i=0;i<parentLayer.layers.length;i++){
        curLayer = parentLayer.layers[i];
        doc.activeLayer = curLayer;
        if(curLayer.typename =='LayerSet'){goThroughLayers (curLayer, k)}
        else{
            if(curLayer.name=='#lastName'){
                curLayer.textItem.contents = lastNames[k];
                }//end if
			if(curLayer.name=='#jNumber'){
				curLayer.textItem.contents = playerNumbers[k];
			}
            }//end else
        }//end loop	
    }//end function


function runFunction(i) {
	
	goThroughLayers(doc, i);
	
	var saveFile = File("E:/Utah Work/NFL Draft Recruit Graphics 2021/NFL Jersey Templates/Recuit Jerseys 2021/" + indexThing[i] + "_" + firstNames[i] + "_" + lastNames[i] + ".png");
						
	function savePNG(saveFile) {
	var pngSaveOptions = new PNGSaveOptions();
	pngSaveOptions.compression = 0;
	pngSaveOptions.interlaced = false;
	activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE);
	
	}

	savePNG(saveFile);
}

for (var i=0; i<lastNames.length; i++) {
	runFunction(i)
}


