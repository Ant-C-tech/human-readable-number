module.exports = function toReadable (number) {
      const uniqueNumberToTen = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const uniqueNumberToTwenty = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const uniqueNumberToOneHundred = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const taskArray = number.toString().split("");

    function getUnits() {
        return taskArray[taskArray.length - 1] != 0
            ? " " + uniqueNumberToTen[taskArray[taskArray.length - 1] - 1]
            : "";
    }

    function getTens() {
        if (taskArray[taskArray.length - 2] == 0) {
            return getUnits();
        } else if (taskArray[taskArray.length - 2] == 1) {
            return " " + uniqueNumberToTwenty[taskArray[taskArray.length - 1]];
        } else {
            return (
                " " +
                uniqueNumberToOneHundred[
                    [taskArray[taskArray.length - 2] - 2]
                ] +
                getUnits()
            );
        }
    }

    function getHundreds() {
        return (
            uniqueNumberToTen[taskArray[taskArray.length - 3] - 1] +
            " " +
            "hundred" +
            getTens()
        );
    }

    if (number === 0) {
        return "zero";
    } else if (taskArray.length === 1) {
        return getUnits().trim();
    } else if (taskArray.length === 2) {
        return getTens().trim();
    } else if (taskArray.length === 3) {
        return getHundreds();
    }
}
