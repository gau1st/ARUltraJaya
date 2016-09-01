var pos = "cover";

function _GET( key )
{
  var getParameterString = window.location.search.substring(1);
  var getParameters = getParameterString.split('&');
  for (var i in getParameters)
  {
    var keyValuePair = getParameters[i].split('=');
    if( keyValuePair[0] == key)
    {
      return keyValuePair[1];
    }
  }
  return undefined;
}
isAndroid = _GET('device') == 'android';
function openYouTubeVideo( youTubeLink )
{
  var isUIWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
  arel.Media.openWebsite( youTubeLink, !isUIWebView);
}
arel.sceneReady(function()
{
  arel.Scene.startCamera(0, 320, 240, 2, 1);
  arel.Events.setListener(arel.Scene, function(type, param){trackingHandler(type, param);});
  var sceneObjects = arel.Scene.getObjects();
  for ( var i in sceneObjects )
  {
    arel.Events.setListener( sceneObjects[i], handleObjectCallbacks );
  }
  
  arel.Scene.getObject('3af3754bcaf1ab2002506b41da314a04_1').setScreenAnchor(arel.Constants.ANCHOR_BR);
  var translation = new arel.Vector3D(-1.74478,-10.1304, 0);
  arel.Scene.getObject('3af3754bcaf1ab2002506b41da314a04_1').setTranslation(translation);
  
  arel.Scene.getObject('4a40d9e4d82a67bbf3264ef7a15f1ee2_1').setScreenAnchor(arel.Constants.ANCHOR_BL);
  var translation2 = new arel.Vector3D(3.89536,-17.2276, 0);
  arel.Scene.getObject('4a40d9e4d82a67bbf3264ef7a15f1ee2_1').setTranslation(translation2);
  
  arel.Scene.getObject("bookpage1").setVisibility(true);
  arel.Scene.getObject("bookpage2").setVisibility(false);
  arel.Scene.getObject("bookpage3").setVisibility(false);
  arel.Scene.getObject("bookpage4").setVisibility(false);
  arel.Scene.getObject("kcijopage4").setVisibility(false);
  arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  arel.Scene.getObject("mimipage4").setVisibility(false);
  arel.Scene.getObject("bluemilkpage4").setVisibility(false);
  arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  arel.Scene.getObject("bookpage5").setVisibility(false);

});

function trackingHandler(type, param)
{
  try
  {
    if ( !type || !param[0]) return;
    var cosId = param[0].getCoordinateSystemID();
    var state = param[0].getState();
    var trackingMethod  = param[0].getType();
  }
  catch(e)
  {
    alert(e.message);
  }
}
function handleObjectCallbacks(obj, type, params)
{
  try
  {
    var objectId = obj.getID();
    /* handle click object events */
    if ( 'b93e4932f9cd4a27954f2a4b14476e5e_1' === objectId
    && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
      //arel.Scene.getObject('2b1fcc5e684bde2289819c4ae3a77bd4_1').startAnimation('Take 002')
    }
    
    if ( '3af3754bcaf1ab2002506b41da314a04_1' === objectId
    && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
    	if (pos === 'cover') {
    		arel.Scene.getObject("bookpage1").setVisibility(true);
  			arel.Scene.getObject("bookpage2").setVisibility(false);
  			arel.Scene.getObject("bookpage3").setVisibility(false);
  			arel.Scene.getObject("bookpage4").setVisibility(false);
  			arel.Scene.getObject("kcijopage4").setVisibility(false);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  			arel.Scene.getObject("mimipage4").setVisibility(false);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  			arel.Scene.getObject("bookpage5").setVisibility(false);
    		arel.Scene.getObject('bookpage1').startAnimation('OpenPage1');
    		arel.Scene.getObject('facebook').startAnimation('FBOpen');
    		arel.Scene.getObject('twitter').startAnimation('TwitterOpen');
    	} else if (pos === 'page1') {
    		arel.Scene.getObject("bookpage1").setVisibility(false);
  			arel.Scene.getObject("bookpage2").setVisibility(true);
  			arel.Scene.getObject("bookpage3").setVisibility(false);
  			arel.Scene.getObject("bookpage4").setVisibility(false);
  			arel.Scene.getObject("kcijopage4").setVisibility(false);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  			arel.Scene.getObject("mimipage4").setVisibility(false);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  			arel.Scene.getObject("bookpage5").setVisibility(false);
		 	arel.Scene.getObject('bookpage2').startAnimation('OpenPage2');
    	} else if (pos === 'page2') {
    		arel.Scene.getObject("bookpage1").setVisibility(false);
  			arel.Scene.getObject("bookpage2").setVisibility(false);
  			arel.Scene.getObject("bookpage3").setVisibility(true);
  			arel.Scene.getObject("bookpage4").setVisibility(false);
  			arel.Scene.getObject("kcijopage4").setVisibility(false);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  			arel.Scene.getObject("mimipage4").setVisibility(false);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  			arel.Scene.getObject("bookpage5").setVisibility(false);
		 	arel.Scene.getObject('bookpage3').startAnimation('OpenPage3');
    	} else if (pos === 'page3') {
    		arel.Scene.getObject("bookpage1").setVisibility(false);
  			arel.Scene.getObject("bookpage2").setVisibility(false);
  			arel.Scene.getObject("bookpage3").setVisibility(false);
  			arel.Scene.getObject("bookpage4").setVisibility(true);
  			arel.Scene.getObject("kcijopage4").setVisibility(true);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(true);
  			arel.Scene.getObject("mimipage4").setVisibility(true);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(true);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(true);
  			arel.Scene.getObject("bookpage5").setVisibility(false);
		 	arel.Scene.getObject('bookpage4').startAnimation('OpenPage4');
		 	arel.Scene.getObject('kcijopage4').startAnimation('KCIJOOpen');
		 	arel.Scene.getObject('tehkotakpage4').startAnimation('TEHKOTAKOpen');
		 	arel.Scene.getObject('mimipage4').startAnimation('MIMIOpen');
		 	arel.Scene.getObject('bluemilkpage4').startAnimation('BLUEMILKOpen');
		 	arel.Scene.getObject('chocmilkpage4').startAnimation('CHOCMILKOpen');
    	} else if (pos === 'page4') {
    		arel.Scene.getObject("bookpage1").setVisibility(false);
  			arel.Scene.getObject("bookpage2").setVisibility(false);
  			arel.Scene.getObject("bookpage3").setVisibility(false);
  			arel.Scene.getObject("bookpage4").setVisibility(false);
  			arel.Scene.getObject("kcijopage4").setVisibility(false);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  			arel.Scene.getObject("mimipage4").setVisibility(false);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  			arel.Scene.getObject("bookpage5").setVisibility(true);
		 	arel.Scene.getObject('bookpage5').startAnimation('OpenPage5');
    	}			
    }
 
    if ( '4a40d9e4d82a67bbf3264ef7a15f1ee2_1' === objectId
    && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
    	
    	if (pos === 'page1') {
    		arel.Scene.getObject("bookpage1").setVisibility(true);
  			arel.Scene.getObject("bookpage2").setVisibility(false);
  			arel.Scene.getObject("bookpage3").setVisibility(false);
  			arel.Scene.getObject("bookpage4").setVisibility(false);
  			arel.Scene.getObject("kcijopage4").setVisibility(false);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  			arel.Scene.getObject("mimipage4").setVisibility(false);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  			arel.Scene.getObject("bookpage5").setVisibility(false);
    		arel.Scene.getObject('bookpage1').startAnimation('ClosePage1');
    		arel.Scene.getObject('facebook').startAnimation('FBClose');
    		arel.Scene.getObject('twitter').startAnimation('TwitterClose');
    	} else if (pos === 'page2') {
    		arel.Scene.getObject("bookpage1").setVisibility(false);
  			arel.Scene.getObject("bookpage2").setVisibility(true);
  			arel.Scene.getObject("bookpage3").setVisibility(false);
  			arel.Scene.getObject("bookpage4").setVisibility(false);
  			arel.Scene.getObject("kcijopage4").setVisibility(false);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  			arel.Scene.getObject("mimipage4").setVisibility(false);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  			arel.Scene.getObject("bookpage5").setVisibility(false);
    		arel.Scene.getObject('bookpage2').startAnimation('ClosePage2');
    	} else if (pos === 'page3') {
    		arel.Scene.getObject("bookpage1").setVisibility(false);
  			arel.Scene.getObject("bookpage2").setVisibility(false);
  			arel.Scene.getObject("bookpage3").setVisibility(true);
  			arel.Scene.getObject("bookpage4").setVisibility(false);
  			arel.Scene.getObject("kcijopage4").setVisibility(false);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  			arel.Scene.getObject("mimipage4").setVisibility(false);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  			arel.Scene.getObject("bookpage5").setVisibility(false);
		 	arel.Scene.getObject('bookpage3').startAnimation('ClosePage3');
    	} else if (pos === 'page4') {
    		arel.Scene.getObject("bookpage1").setVisibility(false);
  			arel.Scene.getObject("bookpage2").setVisibility(false);
  			arel.Scene.getObject("bookpage3").setVisibility(false);
  			arel.Scene.getObject("bookpage4").setVisibility(true);
  			arel.Scene.getObject("kcijopage4").setVisibility(true);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(true);
  			arel.Scene.getObject("mimipage4").setVisibility(true);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(true);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(true);
  			arel.Scene.getObject("bookpage5").setVisibility(false);
		 	arel.Scene.getObject('bookpage4').startAnimation('ClosePage4');
		 	arel.Scene.getObject("kcijopage4").startAnimation('KCIJOClose');
		 	arel.Scene.getObject("tehkotakpage4").startAnimation('TEHKOTAKClose');
		 	arel.Scene.getObject("mimipage4").startAnimation('MIMIClose');
		 	arel.Scene.getObject("bluemilkpage4").startAnimation('BLUEMILKClose');
		 	arel.Scene.getObject("chocmilkpage4").startAnimation('CHOCMILKClose');
    	} else if (pos === 'page5') {
    		arel.Scene.getObject("bookpage1").setVisibility(false);
  			arel.Scene.getObject("bookpage2").setVisibility(false);
  			arel.Scene.getObject("bookpage3").setVisibility(false);
  			arel.Scene.getObject("bookpage4").setVisibility(false);
  			arel.Scene.getObject("kcijopage4").setVisibility(false);
  			arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  			arel.Scene.getObject("mimipage4").setVisibility(false);
		  	arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		  	arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  			arel.Scene.getObject("bookpage5").setVisibility(true);
		 	arel.Scene.getObject('bookpage5').startAnimation('ClosePage5');
    	}
    }
    
    
    if ( 'bookpage5' === objectId && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
    	if (pos === 'page5') {
			arel.Media.openWebsite('http://www.ultrajaya.co.id', false);
      		arel.Events.setListener('http://www.ultrajaya.co.id', handleMediaCallbacks);
    	}	
    }
    
    if ( 'facebook' === objectId && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
		arel.Media.openWebsite('http://facebook.com/ultrajaya', false);
      	arel.Events.setListener('http://facebook.com/ultrajaya', handleMediaCallbacks);
    }
    
    if ( 'twitter' === objectId && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
		arel.Media.openWebsite('http://twitter.com/ultrajaya', false);
      	arel.Events.setListener('http://twitter.com/ultrajaya', handleMediaCallbacks);
    }
    
    if ( 'kcijopage4' === objectId && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
		arel.Media.openWebsite('http://www.ultrajaya.co.id/uhthealthdrink/sarikacangijo/', false);
      	arel.Events.setListener('http://www.ultrajaya.co.id/uhthealthdrink/sarikacangijo/', handleMediaCallbacks);
    }
    
    if ( 'tehkotakpage4' === objectId && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
		arel.Media.openWebsite('http://www.ultrajaya.co.id/uhtteadrink/tehkotakjasminetea/', false);
      	arel.Events.setListener('http://www.ultrajaya.co.id/uhtteadrink/tehkotakjasminetea/', handleMediaCallbacks);
    }
    
    if ( 'mimipage4' === objectId && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
		arel.Media.openWebsite('http://www.ultrajaya.co.id/uhtfreshmilk/ultramilkmimi/', false);
      	arel.Events.setListener('http://www.ultrajaya.co.id/uhtfreshmilk/ultramilkmimi/', handleMediaCallbacks);
    }
    
    if ( 'bluemilkpage4' === objectId && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
		arel.Media.openWebsite('http://www.ultrajaya.co.id/uhtfreshmilk/ultramilkfullcream/', false);
      	arel.Events.setListener('http://www.ultrajaya.co.id/uhtfreshmilk/ultramilkfullcream/', handleMediaCallbacks);
    }
    
    if ( 'chocmilkpage4' === objectId && arel.Events.Object.ONTOUCHSTARTED ===  type )
    {
		arel.Media.openWebsite('http://www.ultrajaya.co.id/uhtfreshmilk/ultramilkflavour/', false);
      	arel.Events.setListener('http://www.ultrajaya.co.id/uhtfreshmilk/ultramilkflavour/', handleMediaCallbacks);
    }
    
    //Animation handler
	if('bookpage1' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "OpenPage1") {
		arel.Scene.getObject("bookpage1").setVisibility(false);
  		arel.Scene.getObject("bookpage2").setVisibility(true);
  		arel.Scene.getObject("bookpage3").setVisibility(false);
  		arel.Scene.getObject("bookpage4").setVisibility(false);
  		arel.Scene.getObject("kcijopage4").setVisibility(false);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  		arel.Scene.getObject("mimipage4").setVisibility(false);
		arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  		arel.Scene.getObject("bookpage5").setVisibility(false);
		pos = 'page1';
	}
	
	if('bookpage1' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "ClosePage1") {
		arel.Scene.getObject("bookpage1").setVisibility(true);
  		arel.Scene.getObject("bookpage2").setVisibility(false);
  		arel.Scene.getObject("bookpage3").setVisibility(false);
  		arel.Scene.getObject("bookpage4").setVisibility(false);
  		arel.Scene.getObject("kcijopage4").setVisibility(false);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  		arel.Scene.getObject("mimipage4").setVisibility(false);
		arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  		arel.Scene.getObject("bookpage5").setVisibility(false);
		pos = 'cover';
	}
	
	if('bookpage2' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "OpenPage2") {
		arel.Scene.getObject("bookpage1").setVisibility(false);
  		arel.Scene.getObject("bookpage2").setVisibility(false);
  		arel.Scene.getObject("bookpage3").setVisibility(true);
  		arel.Scene.getObject("bookpage4").setVisibility(false);
  		arel.Scene.getObject("kcijopage4").setVisibility(false);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  		arel.Scene.getObject("mimipage4").setVisibility(false);
		arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  		arel.Scene.getObject("bookpage5").setVisibility(false);
		pos = 'page2';
	}
    
    if('bookpage2' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "ClosePage2") {
    	arel.Scene.getObject("bookpage1").setVisibility(false);
  		arel.Scene.getObject("bookpage2").setVisibility(true);
  		arel.Scene.getObject("bookpage3").setVisibility(false);
  		arel.Scene.getObject("bookpage4").setVisibility(false);
  		arel.Scene.getObject("kcijopage4").setVisibility(false);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  		arel.Scene.getObject("mimipage4").setVisibility(false);
		arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  		arel.Scene.getObject("bookpage5").setVisibility(false);
		pos = 'page1';
	}
	
	if('bookpage3' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "OpenPage3") {
		arel.Scene.getObject("bookpage1").setVisibility(false);
  		arel.Scene.getObject("bookpage2").setVisibility(false);
  		arel.Scene.getObject("bookpage3").setVisibility(false);
  		arel.Scene.getObject("bookpage4").setVisibility(true);
  		arel.Scene.getObject("kcijopage4").setVisibility(true);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(true);
  		arel.Scene.getObject("mimipage4").setVisibility(true);
		arel.Scene.getObject("bluemilkpage4").setVisibility(true);
		arel.Scene.getObject("chocmilkpage4").setVisibility(true);
  		arel.Scene.getObject("bookpage5").setVisibility(false);
		pos = 'page3';
	}
    
    if('bookpage3' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "ClosePage3") {
    	arel.Scene.getObject("bookpage1").setVisibility(false);
  		arel.Scene.getObject("bookpage2").setVisibility(false);
  		arel.Scene.getObject("bookpage3").setVisibility(true);
  		arel.Scene.getObject("bookpage4").setVisibility(false);
  		arel.Scene.getObject("kcijopage4").setVisibility(false);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  		arel.Scene.getObject("mimipage4").setVisibility(false);
		arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  		arel.Scene.getObject("bookpage5").setVisibility(false);
		pos = 'page2';
	}
	
	if('bookpage4' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "OpenPage4") {
		pos = 'page4';
	}
    
    if('bookpage4' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "ClosePage4") {
    	arel.Scene.getObject("bookpage1").setVisibility(false);
  		arel.Scene.getObject("bookpage2").setVisibility(false);
  		arel.Scene.getObject("bookpage3").setVisibility(true);
  		arel.Scene.getObject("bookpage4").setVisibility(false);
  		arel.Scene.getObject("kcijopage4").setVisibility(false);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  		arel.Scene.getObject("mimipage4").setVisibility(false);
		arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  		arel.Scene.getObject("bookpage5").setVisibility(false);
		pos = 'page3';
	}
	
	if('bookpage5' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "OpenPage5") {
		arel.Scene.getObject("bookpage1").setVisibility(false);
  		arel.Scene.getObject("bookpage2").setVisibility(false);
  		arel.Scene.getObject("bookpage3").setVisibility(false);
  		arel.Scene.getObject("bookpage4").setVisibility(false);
  		arel.Scene.getObject("kcijopage4").setVisibility(false);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(false);
  		arel.Scene.getObject("mimipage4").setVisibility(false);
		arel.Scene.getObject("bluemilkpage4").setVisibility(false);
		arel.Scene.getObject("chocmilkpage4").setVisibility(false);
  		arel.Scene.getObject("bookpage5").setVisibility(true);
		pos = 'page5';
	}
    
    if('bookpage5' === objectId && type === arel.Events.Object.ONANIMATIONENDED && params.animationname == "ClosePage5") {
    	arel.Scene.getObject("bookpage1").setVisibility(false);
  		arel.Scene.getObject("bookpage2").setVisibility(false);
  		arel.Scene.getObject("bookpage3").setVisibility(false);
  		arel.Scene.getObject("bookpage4").setVisibility(true);
  		arel.Scene.getObject("kcijopage4").setVisibility(true);
  		arel.Scene.getObject("tehkotakpage4").setVisibility(true);
  		arel.Scene.getObject("mimipage4").setVisibility(true);
		arel.Scene.getObject("bluemilkpage4").setVisibility(true);
		arel.Scene.getObject("chocmilkpage4").setVisibility(true);
  		arel.Scene.getObject("bookpage5").setVisibility(false);
		pos = 'page4';
	}
    
  }
  catch(e)
  {
    alert(e.message);
  }
}
function handleMediaCallbacks(eventType, mediaURL)
{
  try
  {
    arel.Events.removeListener(mediaURL);
  }
  catch(e)
  {
    alert(e.message);
  }
}
