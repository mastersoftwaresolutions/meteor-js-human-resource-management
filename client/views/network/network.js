 Template.network.rendered = function () {
    
     paramid= Session.get("paramid");
    console.log("testt",paramid);
    
    
     Meteor.call("net1",paramid,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("network",res);
                 
               }
	       var net1=res;
                Session.set('myMethodResult3', net1);
	      
	       console.log("res",net1);
               
               });


   //console.log("data2",empid);
//$('.toggle-one').bootstrapToggle();
};

Template.network.events({
    'submit #network_form' : function(e, t) {  
    e.preventDefault();
    
    var name1 =t.find('#res_name').value.trim();
    var Ans12=$('input[name=ans1234]:checked').val();
    console.log('Ans1',Ans12);
    var Ans32=$('input[name=Ans32]:checked').val();
    var ans31=$('input[name=ans31]:checked').val();
    var Ans4=$('input[name=ans4]:checked').val();
    var Ans5=$('input[name=ans5]:checked').val();
    var Ans6=$('input[name=ans6]:checked').val();
    var Ans7=$('input[name=ans7]:checked').val();
    var Ans8=$('input[name=ans8]:checked').val();
    var Ans9=$('input[name=ans9]:checked').val();
    var emp_id=t.find('#empid').value.trim();
        if (name1 == "") {
       $('#login-error4').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});
      
      }else{
     
      Meteor.call("Insertnetwork",name1,Ans12,Ans32,ans31,Ans4,Ans5,Ans6,Ans7,Ans8,Ans9,emp_id,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manisha12",res);
            
               }
               });
      showAndDismissAlert4("my", "Data Successfully Updated");
    }
    }
 })

if (Meteor.isClient) {
Template.network.helpers({
    employee: function () {
            emp= employee.reactive();
            return emp;
    },employee1: function () {
            emp1= empid.reactive();
            return emp1;
    },networkdocs: function () {
        return Session.get('myMethodResult3');
          
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
function showAndDismissAlert4(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages4").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages4 .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}
}
