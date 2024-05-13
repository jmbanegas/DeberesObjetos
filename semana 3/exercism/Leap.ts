export function isLeap(year: number) {
    //Chequeo del modulo(%)
    if (year % 4 ==0 && year % 100 !=0){
      return true
    }
    if (year % 100==0 && year % 400==0){
      return true
    }
    else {
      return false
    }   
  }