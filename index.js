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
  
  approve()
returns "You can do that!" ‣
TypeError: polishedBoardMember.approve is not a function
    at Context.<anonymous> (test/indexTest.js:35:34)expect(polishedBoardMember.approve()).to.equal("You can do that!")
}