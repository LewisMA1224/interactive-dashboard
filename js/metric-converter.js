// Start of Metric Converter

const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", function(event) {

    event.preventDefault();

    let input_value = document.getElementById("number-input").value;

    // Convert input to numeric value
    input_value = parseFloat(input_value);

    const selectList = document.getElementsByTagName("select")[0];
    const conversionChoice =
        selectList.options[selectList.selectedIndex].value;

    let result;
    let message;

    if (conversionChoice == "inch to centimeter") {
        result = input_value * 2.54;
        message = input_value + " inches is " + result.toFixed(2) + " centimeters";

    } else if (conversionChoice == "foot to centimeter") {
        result = input_value * 30.48;
        message = input_value + " feet is " + result.toFixed(2) + " centimeters";

    } else if (conversionChoice == "yard to meter") {
        result = input_value * 0.91;
        message = input_value + " yards is " + result.toFixed(2) + " meters";

    } else if (conversionChoice == "mile to kilometer") {
        result = input_value * 1.61;
        message = input_value + " miles is " + result.toFixed(2) + " kilometers";

    } else if (conversionChoice == "centimeter to inch") {
        result = input_value * 0.39;
        message = input_value + " centimeters is " + result.toFixed(2) + " inches";

    } else if (conversionChoice == "centimeter to foot") {
        result = input_value * 0.0328;
        message = input_value + " centimeters is " + result.toFixed(2) + " feet";

    } else if (conversionChoice == "meter to yard") {
        result = input_value * 1.09;
        message = input_value + " meters is " + result.toFixed(2) + " yards";

    } else if (conversionChoice == "kilometer to mile") {
        result = input_value * 0.62;
        message = input_value + " kilometers is " + result.toFixed(2) + " miles";
    }

    document.getElementById("result").innerHTML = message;

});

// End of Metric Converter