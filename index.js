function BoardMember (name, state, training) {
  this.name = name;
  this.homeState = state;
  this.training = training;
  
  this.veto = function () {
    return "No, I must disagree";
  };

  
}