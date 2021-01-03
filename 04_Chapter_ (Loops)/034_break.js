// The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.



const food = "pizza";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}