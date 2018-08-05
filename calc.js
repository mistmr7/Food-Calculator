$(document).ready(function() {

    // Make our variables global to the runtime of our application
    var firstNumber = 0;
    var ingredient = 0;
    var operator = "";
    var result = 0;
    var measuringUnits = 0;
    var isMeasuringUnitChosen = false;
    var isCalculated = false;

    // Use a function to initialize our calculator.
    // This way when the user hits clear, we can guarantee a reset of the app.
    function initializeCalculator() {
    firstNumber = "";
    ingredient = "";
    measuringUnits = ''
    isMeasuringUnitChosen = false;
    isCalculated = false;

    $("#first-number, #ingredient, #measuring-units, #result").empty();
    }

    $(".number").on("click", function() {

    // Check if we've already run a calculation, if so... we'll just.
    if (isCalculated) {
        return false;
    }

    // If measuring unit is chosen, we should be writing the secondNumber, otherwise, the firstNumber
    if (isMeasuringUnitChosen) {
        ingredient += $(this).val();
        $("#ingredient").text(ingredient);

    }
    else {
        firstNumber += $(this).val();
        $("#first-number").text(firstNumber);
    }

    });
    $(".measurement").on("click", function() {

    // Check if a first number has already been selected
    // Or we've already run a calculation, if so we just exit.
    if (!firstNumber || isCalculated) {
        return false;
    }

    // Set isOperatorChosen to true so we start writing to secondNumber
    isMeasuringUnitChosen = true;

    // Store off the operator
    measuringUnits = $(this).val();

    // Set the HTML of the #operator to the text of what was clicked
    $("#measuring-units").text($(this).text());

    });

    $(".ingredient").on("click", function() {

    // Check if a first number has already been selected
    // Or we've already run a calculation, if so we just exit.
    if (!firstNumber || isCalculated) {
    return false;
    }

    // Set isOperatorChosen to true so we start writing to secondNumber
    if (!isMeasuringUnitChosen || isCalculated){
    return false
    }

    // Store off the operator
    ingredient = $(this).val();

    // Set the HTML of the #operator to the text of what was clicked
    $("#ingredient").text($(this).text());

    });

    $(".equal").on("click", function() {

    // If we already clicked equal, don't do the calculation again
    if (isCalculated) {
        return false;
    }

    // Set isCalculated to true so that we don't get in a weird UI state by clicking buttons again
    isCalculated = true;

    // Use parseInt to convert our string representation of numbers into actual integers
    firstNumber = parseFloat(firstNumber);
    ingredient = parseFloat(ingredient);
    measuringUnits = parseFloat(measuringUnits)

    // Based on the operator that was chosen.
    // Then run the operation and set the HTML of the result of that operation
    result = firstNumber * ingredient / measuringUnits

    $("#result").text(result + " g");

    });
    $(".clear").on("click", function() {

    // Call initializeCalculater so we can reset the state of our app
    initializeCalculator();

    });

    // Call initializeCalculater so we can set the state of our app
    initializeCalculator();
});

