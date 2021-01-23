//source URL: https://github.com/jahid-ictian/Test/blob/main/assignment3.js

// kilometerToMeter Calculation


function kilometerToMeter(kilometer) 
{
    var meter = 1000;
    
    if(kilometer < 0 ) { 
        return "Invalid input";
    } 
    else {
        meter *= kilometer;
        return meter;
    }
}

// 02 - budgetCalculator function
//

function budgetCalculator(watch, mobile, laptop) 
{
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + mobilePrice + laptopPrice;
    if (watch <=0 || mobile <= 0 || laptop <= 0) {
        return "Invalid";
    }
    else {
        return totalPrice; 
    }
}

// 03 -  hotelCost 

function hotelCost(dayReserved) {
    var totalPrice = 0;
  if(dayReserved< 0)
    {
      return "Please Input Correct Value";
    }
   else if (dayReserved <= 10) {
        totalPrice = dayReserved * 100;
    } else if (dayReserved <= 20) {
        var first10DayReservePrice = 10 * 100;
        var second10DayStay = dayReserved - 10;
        var second10DayReservePrice = second10DayStay * 80;
        var totalPrice = first10DayReservePrice + second10DayReservePrice;
    } else {
        var first10DayReservePrice = 10 * 100;
        var second10DayReservePrice = 10 * 80;
        var third10DayStay = dayReserved - 20;
        var third10DayReservePrice = third10DayStay * 50;
        var totalPrice = first10DayReservePrice + second10DayReservePrice + third10DayReservePrice;
    }
    return totalPrice;
}

// 04 - megaFriend

function megaFriend(friendsName){
    var largeName = [];

    if (friendsName == null) {
        return "Ops! Input friends' names correctly";
    }
    else {
        for (var i = 0; i < friendsName.length; i++) {
        
            var friendsElement = friendsName[i];
           
            if (friendsElement.length > largeName.length) {
                largeName = friendsElement;
            }
        }
        return largeName;
    }
    
}
