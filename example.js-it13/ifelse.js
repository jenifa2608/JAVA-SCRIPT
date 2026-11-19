const hour = new Date().getHours();
let greeting;
if (hour >= 5 && hour < 12) {
  greeting = "Good morning!";
} else if (hour >= 12 && hour < 17) {
  greeting = "Good afternoon!";
} else if (hour >= 17 && hour < 21) {
  greeting = "Good evening!";
} else {
  greeting = "Good night!"; // Covers 9:00 PM (21) to 4:59 AM (4)
}

console.log(greeting);