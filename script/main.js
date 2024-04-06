function resizeContent()
{
	// GETTING THE WINDOW WIDTH
	var w = window.innerWidth;

	// GETTING THE WINDOW HEIGHT
	var h = window.innerHeight;

	// CHECKING IF THE CURRENT DEVICE IS A MOBILE DEVICE
	if(window.innerHeight > window.innerWidth)
	{
		// RESIZING THE CONTAINER FOR MOBILE DEVICES
		document.getElementById("content").style.width = h + "px";
		document.getElementById("content").style.height = w + "px";
	}
	else
	{
		// RESIZING THE CONTAINER FOR DESKTOP DEVICES
		document.getElementById("content").style.width = w + "px";
		document.getElementById("content").style.height = h + "px";
	}
}

window.addEventListener("load", function()
{
	// CHECKING IF EMULATRIX IS NOT RUNNING WITHIN AN IFRAME
	if (window.top == window.self)
	{
		// RESIZING THE IFRAME
		resizeContent();

		// CREATING A 250 MS INTERVAL
		setInterval(function()
		{
			// FOCUSING THE CONTAINER
			document.getElementById("content").focus();
		}, 250);

		// LOADING THE EMULATRIX MENU
		document.getElementById("content").src = "Emulatrix.htm";

		// SHOWING THE IFRAME
		document.getElementById("content").style.display = "block";
	}
});

window.addEventListener("resize", function()
{
	// RESIZING THE IFRAME WHEN THE SCREEN SIZE CHANGES
	resizeContent();
});

var supportsOrientationChange = "onorientationchange" in window, orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
window.addEventListener(orientationEvent, function()
{
	// RESIZING THE IFRAME WHEN THE SCREEN ORIENTATION CHANGES
	resizeContent();
}, false);

function updateTitle()
{
	document.title = "Emulatrix";
}

if ("serviceWorker" in navigator)
{
	navigator.serviceWorker.register("worker.js").then(function(registration)
	{
		// Registration successful
		//console.log("ServiceWorker registration successful with scope: " + registration.scope);
	}).catch(function(err)
	{
		// Registration failed
		//console.log("ServiceWorker registration failed: " + err);
	});
}