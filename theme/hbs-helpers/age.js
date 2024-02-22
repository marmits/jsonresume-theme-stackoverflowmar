class Age {
    constructor(dateFirst) {
      this.dateNaissance = new Date(this.formatDate(dateFirst));
      this.divBorn = document.getElementById("born");
      this.ageElement = null;
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
      let dt = new Date(that.dateNaissance);
      let ma_diff = Date.now() - dt.getTime();
      let age_dt = new Date(ma_diff);
      let an = age_dt.getUTCFullYear();
      return Math.abs(an - 1970);
    }

    setHtmlAge = function(){
      let that = this;
      let age = document.createElement("span");
      that.divBorn.appendChild(age);
      that.ageElement = that.divBorn.querySelector("span");
      try {
        that.ageElement.innerHTML = that.getAge() + " ans.";
      }
      catch (e){
        that.ageElement.innerHTML = e;
      }
    }
    
}


