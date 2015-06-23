 Template.rbd.rendered = function () {
  paramid= Session.get("paramid");
    console.log("testt",paramid);
    
    
     Meteor.call("rbd1",paramid,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manishaaaaa",res);
                 
               }
	       var rbd1=res;
                Session.set('myMethodResult2', rbd1);
	      
	       console.log("res",rbd1);
               
               });


  
//$('.toggle-one').bootstrapToggle();
};

Template.rbd.events({
    'submit #rbd_form' : function(e, t) {  
    e.preventDefault();
   
    var name1 =t.find('#res_name').value.trim();
    var Ans1=$('input[name=ans1]:checked').val();
    var Ans2=$('input[name=ans2]:checked').val();
    var Ans3=$('input[name=ans3]:checked').val();
    var emp_id=t.find('#empid').value.trim();
    //alert("data is successfully updated");
      //alert(emp_id);
      if (name1 == "") {
       $('#login-error2').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});
      
      }else{
      Meteor.call("Insertrbd", name1, Ans1,Ans2,Ans3,emp_id,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manisha111",res);
                  var hrd=res;
               }
               });
      showAndDismissAlert2("my", "Data Successfully Updated");
    }
     
    }
 })


if (Meteor.isClient) {
Template.rbd.helpers({
    employee: function () {
            emp= employee.reactive();
            return emp;
    },employee1: function () {
            emp1= empid.reactive();
            return emp1;
    },rbddocs: function () {
        return Session.get('myMethodResult2');
            return rbds;
          
    },isMyCheckboxChecked: function(value){
            if(value == 'on')
            return 'checked';
        else
            return '';
        
  },isMyoptionSelected: function(op1,op2){
           if(op1 === op2)
              return 'selected';
        else
            return '';     
  }
})
function showAndDismissAlert2(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages2").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages2 .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}
}