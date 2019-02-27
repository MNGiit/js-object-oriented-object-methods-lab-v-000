function BoardMember (name, state, training) {
  this.name = name;
  this.homeState = state;
  this.training = training;
  
  function veto() {
    return "No, I must disagree";
  }
  
}