function handleClick() {
	$('#bottomDiv').foundation('open');
}

$('#bottomDiv').on('click', handleClick);

// TODO: struggling to get swipe to work
// function handleLeftSwipe() {
// 	console.log("swipped left!");
// }

// $('swipeDiv').spotSwipe().on('swipeleft', handleLeftSwipe);