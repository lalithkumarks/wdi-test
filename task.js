

 // Task 1 - THE AGE CALCULATOR
 
   function caculateAge(birthYear, currentYear) {
       if (birthYear !== "" && currentYear !== "") {
           if (isValid(birthYear) !== false && isValid(currentYear) !== false) {
               if (currentYear > birthYear) {
                   var result = Math.abs(currentYear) - Math.abs(birthYear);
                   alert(" Either " + (result - 1) + " or " + result);
               } else alert("Your Birth Year is higher than current year");
           } else alert("Invalid Information");
       } else alert("Empty Field!!");
   }
 





   // Task 2 - THE LIFETIME SUPPLY CALCULATOR

   function calculateSupply(age, amount) {
       if (age !== "" && amount !== "") {
           if (isValid(age) !== false && isValid(amount) !== false) {
               if (age <= 70) {
                   var maxYear = 70;
                   var totalSupplyAge = maxYear - age;
                   var result = totalSupplyAge * amount;
                   alert("You will need " + result + " to last you until the ripe old age of " + maxYear);
               } else alert("You are dead with respect to database");
           } else alert("Invalid Information");
       } else alert("Empty Field!!");
   }








  // Task 3 - THE GEOMETRIZER
 
   function calcCircumfrence(radius) {
       if (radius !== "") {
           if (isValid(radius) !== false) {
               var pi = 3.142;
               var circumference = 2 * pi * radius;
               alert("The circumference is " + circumference.toFixed(2));
           } else alert("Enter the valid information");
       } else alert("Empty Field !!");
   }
 
   function calcArea(radius) {
       if (radius !== "") {
           if (isValid(radius) !== false) {
               var pi = 3.142;
               var area = pi * radius * radius;
               alert("The area is " + area.toFixed(2));
           } else alert("Enter the valid information");
       } else alert("Empty Field!!");
   }






 // Task 4 - THE TEMPERATURE CONVERTER
 
   function celsiusToFahrenheit(temp) {
       if (temp !== "") {
           if (isValid(temp) !== false) {
               var celsius = temp;
               var fahrenheit = (((celsius * 9) / 5) + 32);
               alert(celsius + " Celsius to  is Fahrenheit " + fahrenheit.toFixed(2) + "Fahrenheit");
           } else alert("Enter the valid information ");
       } else alert("Empty Field !!");
   }
 
   function fahrenheitToCelsius(temp) {
       if (temp !== "") {
           if (isValid(temp) !== false) {
               var fahrenheit = temp;
               var celsius = (((fahrenheit - 32) * 5) / 9);
               alert(fahrenheit + "Fahrenheit to Celsius " + celsius.toFixed(2) + "Celsius");
           } else alert("Enter the valid information ");
       } else alert("Empty Field!!");
   }
 
function isValid(val) {
       return !/[~`!#$%\^&()*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(val);
   }
