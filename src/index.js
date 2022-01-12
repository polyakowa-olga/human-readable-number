module.exports = function toReadable (number) {
    let arrResult = [];
    let strNum;
    let type;
    let arr = [...number.toString()];

    if (arr.length == 1) {
      type = 1;
    }
    if (arr.length == 2) {
      type = 2;
    }
    if (arr.length == 3) {
      type = 3;
    }

    function useConverter(type) {
      let num;

      if (type == 1) {
        num = arr[0];
        convertInd(num);
      } else if (type == 2) {
          if (arr[0] == "1") {
                num = arr[1];
              if(arr['1'] =='0') {
                convertInd(num);
              }
            convertTeen(num);
          } else {
            num = arr[0];
            convertDoz(num);
            if(arr['1'] !== '0') {
            arrResult.push(strNum);
            num = arr[1];
            convertInd(num);
            }

          }
       }  else if (type == 3) {
        num = arr[0];
        convertHundred(num);

        if (arr[1] !== "0" || arr[2] !== "0") {
          arrResult.push(strNum);

          if (arr[1] == "0") {
            num = arr[2];
            convertInd(num);
          } else if (arr[1] == "1") {
              if(arr[2] == '0') {
                  num = arr['2']
                convertInd(num);
                 }
               else {num = arr[2];
               convertTeen(num);}
          } else {
            num = arr[1];
            convertDoz(num);
            if(arr[2] !== '0') {
            arrResult.push(strNum);

                num = arr[2];
            convertInd(num);

            }

          }
        }
      }

      arrResult.push(strNum);
    }

    useConverter(type);

    function convertInd(num) {
      switch (num) {
        case "1":
          strNum = "one";
          break;
        case "2":
          strNum = "two";
          break;
        case "3":
          strNum = "three";
          break;
        case "4":
          strNum = "four";
          break;
        case "5":
          strNum = "five";
          break;
        case "6":
          strNum = "six";
          break;
        case "7":
          strNum = "seven";
          break;
        case "8":
          strNum = "eight";
          break;
        case "9":
          strNum = "nine";
          break;
        case "0":
          strNum = arr.length == 1 ? "zero" : "ten";
          break;
      }
    }

    function convertTeen(num) {
      switch (num) {
        case "1":
          strNum = "eleven";
          break;
        case "2":
          strNum = "twelve";
          break;
        case "3":
          strNum = "thirteen";
          break;
        case "4":
          strNum = "fourteen";
          break;
        case "5":
          strNum = "fifteen";
          break;
        case "6":
          strNum = "sixteen";
          break;
        case "7":
          strNum = "seventeen";
          break;
        case "8":
          strNum = "eighteen";
          break;
        case "9":
          strNum = "nineteen";
          break;
      }
    }

    function convertDoz(num) {
      switch (num) {
        case "2":
          strNum = "twenty";
          break;
        case "3":
          strNum = "thirty";
          break;
        case "4":
          strNum = "forty";
          break;
        case "5":
          strNum = "fifty";
          break;
        case "6":
          strNum = "sixty";
          break;
        case "7":
          strNum = "seventy";
          break;
        case "8":
          strNum = "eighty";
          break;
        case "9":
          strNum = "ninety";
          break;
      }
    }

    function convertHundred(num) {
      switch (num) {
        case "1":
          strNum = "one hundred";
          break;
        case "2":
          strNum = "two hundred";
          break;
        case "3":
          strNum = "three hundred";
          break;
        case "4":
          strNum = "four hundred";
          break;
        case "5":
          strNum = "five hundred";
          break;
        case "6":
          strNum = "six hundred";
          break;
        case "7":
          strNum = "seven hundred";
          break;
        case "8":
          strNum = "eight hundred";
          break;
        case "9":
          strNum = "nine hundred";
          break;
      }
    }

    let strNumberResult = arrResult.join(" ");

    return strNumberResult;
}
