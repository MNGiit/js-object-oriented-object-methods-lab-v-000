function BoardMember (name, state, training) {
  this.name = name;
  this.homeState = state;
  this.training = training;
  
  this.veto = function () {
    return "No, I must disagree";
  };

  this.approve = function(){
    return "You can do that!";
  };
  
  
  
}