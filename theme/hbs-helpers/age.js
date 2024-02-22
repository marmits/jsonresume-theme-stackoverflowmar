class Age {
    constructor(date) {
      this.date = new Date(this.formatDate(date));
      this.divBorn = document.getElementById("born");
      this.divResume = document.getElementById("resume");
    }

    //YYYY-MM-DD
    formatDate(dateToFormat){
      let dateArray = dateToFormat.split('-');
      let yeah = dateArray[0];
      let month = dateArray[1];
      let day = dateArray[2];
      return month+'/'+day+'/'+yeah;
    }


    getAge(){
      let that = this;
      let dt = new Date(that.date);
      let ma_diff = Date.now() - dt.getTime();
      let age_dt = new Date(ma_diff);
      let an = age_dt.getUTCFullYear();
      return Math.abs(an - 1970);
    }

    setHtmlAgeMe = function(){
      let that = this;
      let age = document.createElement("span");
      that.divBorn.appendChild(age);
      that.ageElement = this.divBorn.querySelector("span");
      try {
        that.ageElement.innerHTML = ", " + that.getAge() + " ans.";
      }
      catch (e){
        that.ageElement.innerHTML = e;
      }
    }

    setHtmlAgeDev = function(){
      let that = this;
      let age = document.createElement("span");
      that.ageElementSection = that.divResume.querySelector("section.agedev");
      that.ageElementSection.appendChild(age);
      that.ageElement = that.ageElementSection.querySelector("span");
      try {
        document.title = document.title + " depuis " + that.getAge() + " ans.";
        that.ageElement.innerHTML = "Dev depuis " + that.getAge() + " ans.";

      }
      catch (e){
        throw e;
      }
    }
    
}


