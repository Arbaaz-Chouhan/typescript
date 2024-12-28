"use strict";
// enum Color {
//     Red,
//     Green,
//     Blue,
// }
// console.log(Color.Red);   // Output: 0
// console.log(Color.Green); // Output: 1
// console.log(Color.Blue);  // Output: 2
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 20] = "Green";
    Color[Color["Blue"] = 30] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // Output: 10
console.log(Color.Green); // Output: 20
console.log(Color.Blue); // Output: 30
//   1. User Roles in an Application
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Moderator"] = "MODERATOR";
    UserRole["User"] = "USER";
})(UserRole || (UserRole = {}));
function checkAccess(role) {
    if (role === UserRole.Admin) {
        return "Full Access";
    }
    else if (role === UserRole.Moderator) {
        return "Moderate Access";
    }
    else {
        return "Limited Access";
    }
}
console.log(checkAccess(UserRole.Admin)); // Output: Full Access
console.log(checkAccess(UserRole.Moderator)); // Output: Moderate Access
console.log(checkAccess(UserRole.User)); // Output: Limited Access
//  2 Days of the Week 
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
function isWeekend(day) {
    return day === Days.Saturday || day === Days.Sunday;
}
console.log(isWeekend(Days.Friday)); // Output: false
console.log(isWeekend(Days.Saturday)); // Output: true
// 3  Payment status 
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Pending"] = "PENDING";
    PaymentStatus["Completed"] = "COMPLETED";
    PaymentStatus["Failed"] = "FAILED";
    PaymentStatus["Refunded"] = "REFUNDED";
})(PaymentStatus || (PaymentStatus = {}));
function showPaymentMessage(status) {
    switch (status) {
        case PaymentStatus.Pending:
            return "Your payment is pending.";
        case PaymentStatus.Completed:
            return "Payment completed successfully.";
        case PaymentStatus.Failed:
            return "Payment failed. Please try again.";
        case PaymentStatus.Refunded:
            return "Your payment has been refunded.";
    }
}
console.log(showPaymentMessage(PaymentStatus.Completed)); // Output: Payment completed successfully.
console.log(showPaymentMessage(PaymentStatus.Failed)); // Output: Payment failed. Please try again.
