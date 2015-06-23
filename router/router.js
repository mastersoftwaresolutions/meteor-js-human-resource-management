Router.route('/', function () {
  this.render('employee');
  
})

Router.route('tabs', {
    path: '/tabs/:_id',
    
    waitOn: function() {
//        return [Meteor.subscribe('hrvalue', this.params._id),
//               Meteor.subscribe('docvalue', this.params._id),
//							];
      },
    data: function(){
       employ1 =new MysqlSubscription('oneemploy',this.params._id);
        Session.set('paramid', this.params._id);
        return empid=employ1;
         
         
     
    }
});
