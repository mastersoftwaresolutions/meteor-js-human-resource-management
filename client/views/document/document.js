 Template.document.rendered = function () {
    paramid= Session.get("paramid");
    console.log("testt",paramid);
    
    
     Meteor.call("doc1",paramid,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  console.log("manishaaaaa",res);
                 
               }
	       var doc1=res;
                Session.set('myMethodResult4', doc1);
	      
	       console.log("res",doc1);
               
               });


   console.log("data2",empid);
//$('.toggle-one').bootstrapToggle();
};

Template.document.events({
    'submit #document_form' : function(e, t) {
    e.preventDefault();
    
    var name1 =t.find('#res_name').value.trim();
    var Answer1=$('input[name=Answ1]:checked').val();
    var Answer2=$('input[name=Answ2]:checked').val();
    var Answer3=$('input[name=Answ3]:checked').val();
    var Answer4=$('input[name=Answ4]:checked').val();
    //var Answer5=$('input[name=Answ5]:checked').val();
    var Answer6=$('input[name=Answ6]:checked').val();
    var Answer7=$('input[name=Answ7]:checked').val();
    var Answer8=$('input[name=Answ8]:checked').val();
    var Answer9=$('input[name=Answ9]:checked').val();
    var Answer10=$('input[name=Answ10]:checked').val();
    var Answer11=$('input[name=Answ11]:checked').val();
    var Answer12=$('input[name=Answ12]:checked').val();
    var Answer13=$('input[name=Answ13]:checked').val();
    var Answer14=$('input[name=Answ14]:checked').val();
    var Answer15=$('input[name=Answ15]:checked').val();
    var Answer16=$('input[name=Answ16]:checked').val();
    var emp_id=t.find('#empid').value.trim();
     if (name1 == "") {
       
             $('#login-error1').show();
       $('.alert .close').on('click', function(e) {
    $(this).parent().hide();
});
    }
    else{
     
      Meteor.call("Insertdoc", name1, Answer1, Answer2,Answer3,Answer4,Answer6,Answer7,Answer8,Answer9,Answer10,Answer11,Answer12,Answer13,Answer14,Answer15,Answer16,emp_id,
            function(err,res){
               if (err) {
                  alert(err);
               }
               else{
                  //console.log(res);
               }
               });
      showAndDismissAlert1("my", "Data Successfully Updated");
      }
}
 })


if (Meteor.isClient) {
Template.document.helpers({
    employee: function () {
            emp= employee.reactive();
            return emp;
    },
       employee1: function () {
            emp1= empid.reactive();
            return emp1;
    },documentdocs: function () {
        return Session.get('myMethodResult4')
          
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
function showAndDismissAlert1(type, message) {
    var htmlAlert = '<div class="alert alert-' + type + '">' + message + '</div>';

    // Prepend so that alert is on top, could also append if we want new alerts to show below instead of on top.
    $(".alert-messages1").prepend(htmlAlert);

    // Since we are prepending, take the first alert and tell it to fade in and then fade out.
    // Note: if we were appending, then should use last() instead of first()
    $(".alert-messages1 .alert").first().hide().fadeIn(200).delay(2000).fadeOut(1000, function () { $(this).remove(); });
}
}
