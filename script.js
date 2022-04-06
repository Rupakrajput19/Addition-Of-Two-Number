function myFunction()
{
  // Get the value of the input fieldd with id ="number"

  let x = parseInt(document.getElementById("number1").value);

  let y = parseInt(document.getElementById("number2").value);

  // If x is Not a Number or less one or greater than 10

  let text;

  let z = x + y;

  document.getElementById("demo").innerHTML = "Sum of two numbers = " +z;
}