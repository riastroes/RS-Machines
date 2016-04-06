function UserRecord(){
  this.visited = [];
  
  if(typeof(Storage) !== "undefined"){
    if(localStorage.getItem("visited riastroes.nl") == "true"){
      
      //localStorage.removeItem("RSProjects");
      
      var visiting = localStorage.getItem("RSProjects");
      if( visiting == null){
        visiting = "";
      }
      else{
        var allvisited = visiting.split(",");
        
        for(var v in allvisited){
          if(!contains(this.visited, allvisited[v])){
            append( this.visited, int(allvisited[v]));
          }
        }
      }
      
    }
    else{
      localStorage.setItem("visited riastroes.nl", "true");
      
    }
    localStorage.setItem("RSProject visitingdate", year() + "-" + month() + "-" + day());
  }  
  else{
    // no local storage
  }
  
}
UserRecord.prototype.message = function(){
  var msg = "";
  if(this.visited.length == 0){
    msg = "Welcome to my site! Start exploring! Click on the spots (circles).";
  }
  else{
    if(frameCount < 500){
     msg = "Welcome back to my site! ";
    }
    var count = menu.totprojects - this.visited.length;
    if(count == 0){
      msg += "There is no new spot for you to explore.";
    }
    else if(count == 1){
      msg += "There is a new spot for you to explore. Just click on the spot with a star.";
    }
    else if(count >= 1){
      msg += "There are " + count + " new spots for you to explore. Just click on the spots with a star. ";
    }
  }
  return msg;
};
UserRecord.prototype.clear = function(){
  localStorage.removeItem("RSProjects");
  this.visited = [];

};
UserRecord.prototype.show = function(){
  if(localStorage.getItem("visited riastroes.nl") == "true"){
    println("visited riastroes.nl");
  }
  println(localStorage.getItem("RSProjects"));

}
UserRecord.prototype.visit = function(nr){
  if(!contains(this.visited, nr)){
    append(this.visited, nr);
    localStorage.setItem("RSProjects", this.visited);
  }
 
}