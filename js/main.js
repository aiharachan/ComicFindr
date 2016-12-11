// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button')
var homeDropdown = $('#home select')
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var resultsOL = $('#results ol');
var detailsInfo = $('#details #info')
var detailsSection = $('#details')
var detailsBackButton = $('#details .back')
var homeButton = $('#results .home')

// tell the go button to do hide home and show results when we click it
homeGoButton.click( function(){
    
    // capture user chosen option
    var chosenOption = homeDropdown.val()
    console.log("You picked " + chosenOption)
    
    homeSection.hide()
    resultsSection.show()
    
    // filter+sort people by user selection
    var resultsList = filterAndSortList(storesList, 'area', chosenOption);
    console.log(resultsList);
    
    // show the results in the #results section
    showList(resultsList, resultsOL);
    
    $('#results li').click( function() {
        // grab the id from the clicked item
        var resultId = $(this).attr('id')
        // use the id to get the right data
        var resultData = resultsList[resultId]
        console.log(resultData)
        // call the function showDetails()
        showDetails(resultData, detailsInfo)
    // show the details!
    resultsSection.hide()
    detailsSection.show()
    
    function showDetails (data, interfaceElement) 
{
  var detailsHTML = makeDetailsHTML(data)
  interfaceElement.html(detailsHTML)
}
})
    
})

// tell the back button to go back to home when we click it
resultsBackButton.click( function(){
    resultsSection.hide()
    homeSection.show()
})

// tell the button to go to home when we click it
homeButton.click( function(){
    resultsSection.hide()
    homeSection.show()
})

// tell the back button to go back to results when we click it
detailsBackButton.click( function(){
    detailsSection.hide()
    resultsSection.show()
})