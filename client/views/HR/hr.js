Template.hr.events({
    'submit #hr_form' : function(e, t) {
        
      e.preventDefault();
      var name1 =t.find('#res_name').value.trim();
      var Answer1=$('input[name=Answer1]:checked').val();
      var Answer2=$('input[name=Answer2]:checked').val();
      var Answer3=$('input[name=Answer3]:checked').val();
      var Answer4=$('input[name=Answer4]:checked').val();
     
      var emp_id=t.find('#empid').value.trim();
       var selectedPostId = Session.get(emp_id);
      //alert(name1);
      if (name1 == "") {
       $('#login-error').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});
      
      }else{
      Meteor.call("Inserthr1", name1, Answer1, Answer2,Answer3,Answer4,emp_id,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("res",res);
                  var hrd=res;
               }
               });
      showAndDismissAlert("my", "Data Successfully Updated");
      
      }
      
      }
 })

 Template.hr.rendered = function () {
     paramid= Session.get("paramid");
    console.log("testt",paramid);
     Meteor.call("hrvalue1",paramid,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manishaaaaa",res);
                 
               }
	       var hr_value1=res;
                Session.set('myMethodResult5', hr_value1);
	      
	       console.log("res11",hr_value1);
               
               });
     
   

   
};


employee = new MysqlSubscription('allemployee');

  
if (Meteor.isClient) {
    
Template.hr.helpers({
    
  
    employee: function () {
            emp= employee.reactive();
            return emp;
    },employee1: function () {
            emp1= empid.reactive();
            return emp1;
    },hrdocs: function () {
        return Session.get('myMethodResult5');
          
    },isMyCheckboxChecked: function(value){
        //console.log("value",value);
        if(value == 'on')
            return 'checked';
        else
            return '';
        
  },isMyoptionSelected: function(op1,op2){
     console.log("op1",op1);
     console.log("op2",op2);
        if(op1 === op2)
              return 'selected';
        else
            return '';     
  }
 
})
function showAndDismissAlert(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}

//function showAndDismissAlert6(type, message) {
//    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';
//
//    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
//    $(".alert-messages").prepend(htmlAlert);
//
//    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
//    // Note: if we were appending, then should use last() instead of first()
//    $(".alert-messages .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
//}
//    



}



