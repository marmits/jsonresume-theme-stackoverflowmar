
class Ryan {
    constructor(options) {
      let divName = options.div;
      this.div = document.getElementById(divName);
      this.ryan = null;
      this.ryanJson = null;
      this.setRyanJson('ryan-reynolds.json');
      this.ryanGet();


    }
    setRyanJson(val){
      this.ryanJson = val;
      return this;
    }
    getRyanJson(){
        return this.ryanJson;
    }
    ryanGet = function(){
      let that = this;
      let label = document.createElement("h2");
      that.div.appendChild(label);
      that.ryan = that.div.querySelector("h2");

      try {
        fetch(that.getRyanJson(),
          {
            method: 'GET'
          })
          .then(
            function(reponse){
              if(reponse.status !== 200) {
                return Promise.reject(reponse.statusText);
              }
              return Promise.resolve(reponse);
            }
          )
          .then(reponse => reponse.json())
          .then(actor => {
            that.ryan.innerHTML = actor.firstname + ' ' + actor.lastname;
          })
          .catch(e => {
            that.ryan.innerHTML = e
          });
      }
      catch (e){
        that.ryan.innerHTML = e
      }
    }



}


