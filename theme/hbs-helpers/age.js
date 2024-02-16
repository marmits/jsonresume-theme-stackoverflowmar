
class Age {
    constructor() {

      const date1 = new Date('7/01/2010');
      const date2 = new Date('6/01/2012');
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24) / 360);
      console.log(diffTime + " milliseconds");
      console.log(diffDays + " Years");

    }

    
}


