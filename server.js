
if (Meteor.isServer) {
  //var mysql = Npm.require('mysql');
  var db;
  var mysqlSettings = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mss-hrm'
  };
  

  Meteor.startup(function () {
    db = mysql.createConnection(mysqlSettings);
    db.connect();
    db.initUpdateTable('updates22');

    Meteor.publish('allemployee', function(){
      db.select(this, {
        query: 'select * from employee',
        triggers: [
          { table: 'employee' }
        ]
      })
    })

      Meteor.publish('oneemploy', function(id){
      db.select(this, {
        query: function(esc, escId){
          return "select * from employee where eid = "+id;
        },
        triggers: [
          {
            table: 'employee',
            condition: function(esc, escId){
              return '$ROW.eid = '+id;
            }
          }
        ]
      });
    });
    //Meteor.publish('hrvalue', function(id){
    //  db.select(this, {
    //    query: function(esc, escId){
    //      return "select * from hr where emp_id = "+id;
    //    },
    //    triggers: [
    //      {
    //        table: 'hr',
    //        condition: function(esc, escId){
    //          return '$ROW.emp_id = '+id;
    //        }
    //      }
    //    ]
    //  });
    //});
    //   Meteor.publish('docvalue', function(id){
    //  db.select(this, {
    //    query: function(esc, escId){
    //      return "select * from Documents where emp_id = "+id;
    //    },
    //    triggers: [
    //      {
    //        table: 'Documents',
    //        condition: function(esc, escId){
    //          return '$ROW.emp_id = '+id;
    //        }
    //      }
    //    ]
    //  });
    //});
       
    //  Meteor.publish('rbdvalue', function(id){
    //  db.select(this, {
    //    query: function(esc, escId){
    //      return "select * from rbd where emp_id = "+id;
    //    },
    //    triggers: [
    //      {
    //        table: 'rbd',
    //        condition: function(esc, escId){
    //          return '$ROW.emp_id = '+id;
    //        }
    //      }
    //    ]
    //  });
    //});
    //      Meteor.publish('networkvalue', function(id){
    //  db.select(this, {
    //    query: function(esc, escId){
    //      return "select * from network where emp_id = "+id;
    //    },
    //    triggers: [
    //      {
    //        table: 'network',
    //        condition: function(esc, escId){
    //          return '$ROW.emp_id = '+id;
    //        }
    //      }
    //    ]
    //  });
    //});
    //  
         Meteor.publish('pendinghr', function(id){
      db.select(this, {
        query: function(esc, escId){
          return "select * from hr where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on'";
        },
        triggers: [
          {
            table: 'hr',
            condition: function(esc, escId){
              return '$ROW.emp_id = '+id;
            }
          }
        ]
      });
    });
    
            Meteor.publish('pendingdoc', function(id){
      db.select(this, {
        query: function(esc, escId){
          return "select * from Documents where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on' and ans4='on' and ans5='on' and ans6='on' and ans7='on' and ans8='on' and ans9='on' and ans10='on' and ans11='on' and ans12='on' and ans13='on' and ans14='on' and ans15='on' and ans16='on'";
        },
        triggers: [
          {
            table: 'doc',
            condition: function(esc, escId){
              return '$ROW.emp_id = '+id;
            }
          }
        ]
      });
    });   
       
               Meteor.publish('pendingrbd', function(id){
      db.select(this, {
        query: function(esc, escId){
          return "select * from rbd where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'";
        },
        triggers: [
          {
            table: 'rbd',
            condition: function(esc, escId){
              return '$ROW.emp_id = '+id;
            }
          }
        ]
      });
    });
    
               Meteor.publish('pendingnet', function(id){
      db.select(this, {
        query: function(esc, escId){
          return "select * from network where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on'and ans5='on'and ans6='on'and ans7='on'and ans8='on'and ans9='on'";
        },
        triggers: [
          {
            table: '',
            condition: function(esc, escId){
              return '$ROW.emp_id = '+id;
            }
          }
        ]
      });
    });
      

  
     }); 
  
    Meteor.methods({ 
    'Inserthr1': function(name,ans1,ans2,ans3,ans4,e_id) {
      query="select * from hr where emp_id ="+e_id;
      i_d=db.queryEx(query);
       length= i_d.length;
      if (length > 0) {
     query1= "Update hr set emp_id='"+e_id + "',res_person='"+name+"',ans1='"+ans1+"',ans2='"+ans2+"',ans3='"+ans3+"',ans4='"+ans4+"'where emp_id ='"+e_id+"'";
      return db.queryEx(query1);
    }else{
        
     query2= "INSERT INTO `hr`(emp_id,res_person,ans1,ans2,ans3,ans4) VALUES ('"+e_id+"','"+name+"','"+ans1+"','"+ans2+"','"+ans3+"','"+ans4+"')";
      return db.queryEx(query2);
    }
 
},'Insertdoc': function(name,ans1,ans2,ans3,ans4,ans6,ans7,ans8,ans9,ans10,ans11,ans12,ans13,ans14,ans15,ans16,e_id){
        query="select * from Documents where emp_id ="+e_id;
        i_d=db.queryEx(query);
        length= i_d.length;
       if (length > 0) {
        query1= "Update Documents set emp_id='"+e_id + "',res_person='"+name+"',ans1='"+ans1+"',ans2='"+ans2+"',ans3='"+ans3+"',ans4='"+ans4+"',ans6='"+ans6+"',ans7='"+ans7+"',ans8='"+ans8+"',ans9='"+ans9+"',ans10='"+ans10+"',ans11='"+ans11+"',ans12='"+ans12+"',ans13='"+ans13+"',ans14='"+ans14+"',ans15='"+ans15+"',ans16='"+ans16+"' where emp_id ='"+e_id+"'";
        db.queryEx(query1);
       }else{
                query2= "INSERT INTO Documents(emp_id,res_person,ans1,ans2,ans3,ans4,ans6,ans7,ans8,ans9,ans10,ans11,ans12,ans13,ans14,ans15,ans16) VALUES ('"+e_id+"','"+name+"','"+ans1+"','"+ans2+"','"+ans3+"','"+ans4+"','"+ans6+"','"+ans7+"','"+ans8+"','"+ans9+"','"+ans10+"','"+ans11+"','"+ans12+"','"+ans13+"','"+ans14+"','"+ans15+"','"+ans16+"')";
                db.queryEx(query2);
     
    }
 
},'Insertrbd': function(name,ans1,ans2,ans3,e_id){
    query="select * from rbd where emp_id ="+e_id;
    i_d=db.queryEx(query);
    length= i_d.length;
    if (length > 0) {
        query1= "Update rbd set emp_id='"+e_id + "',res_person='"+name+"',ans1='"+ans1+"',ans2='"+ans2+"',ans3='"+ans3+"' where emp_id ='"+e_id+"'";
        return db.queryEx(query1);
    }else{
       query2= "INSERT INTO rbd(emp_id,res_person,ans1,ans2,ans3) VALUES ('"+e_id+"','"+name+"','"+ans1+"','"+ans2+"','"+ans3+"')";
      return db.queryEx(query2);   
        
    }
    
},'Insertnetwork':function(name,ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,e_id){
    query="select * from network where emp_id ="+e_id;
    i_d=db.queryEx(query);
    length= i_d.length;
    if (length > 0) {
        query1= "Update network set emp_id='"+e_id + "',res_person='"+name+"',ans1='"+ans1+"',ans2='"+ans2+"',ans3='"+ans3+"',ans4='"+ans4+"',ans5='"+ans5+"',ans6='"+ans6+"',ans7='"+ans7+"',ans8='"+ans8+"',ans9='"+ans9+"' where emp_id ='"+e_id+"'";
        return db.queryEx(query1);
    }else{
       query2= "INSERT INTO network(emp_id,res_person,ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9) VALUES ('"+e_id+"','"+name+"','"+ans1+"','"+ans2+"','"+ans3+"','"+ans4+"','"+ans5+"','"+ans6+"','"+ans7+"','"+ans8+"','"+ans9+"')";
      return db.queryEx(query2);   
        
    }

},
'hrvalue1':function(id){
    query="select * from hr where emp_id = "+id;
    return db.queryEx(query);
     
        
    },
    'doc1':function(id){
    query="select * from Documents where emp_id = "+id;
    return db.queryEx(query);
     
        
    },
    'rbd1':function(id){
    query="select * from rbd where emp_id = "+id;
    return db.queryEx(query);
     
        
    },
     'net1':function(id){
    query="select * from network where emp_id = "+id;
    return db.queryEx(query);
     
        
    },




'pending':function(id){
    query1="select * from hr where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on'";
    result1=db.queryEx(query1);
    length1= result1.length;
    query2="select * from Documents where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on' and ans4='on' and ans6='on' and ans7='on' and ans8='on' and ans9='on' and ans10='on' and ans11='on' and ans12='on' and ans13='on' and ans14='on' and ans15='on' and ans16='on'";
    result2=db.queryEx(query2);
    length2= result2.length;
    query3="select * from rbd where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'";
    result3=db.queryEx(query3);
    length3= result3.length;
    query4="select * from network where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on'and ans5='on'and ans6='on'and ans7='on'and ans8='on'and ans9='on'";
    result4=db.queryEx(query4);
   length4= result4.length;
   length=length1+length2+length3+length4;
       //if (length == '4') {
       //             console.log("complete");
       //             var aa="complete";
       //            
       //           }else{
       //             console.log("pending");
       //           var aa="pending";
       //
       //           }
    return length;
},


'doc_pending':function(id){
    query1="select * from hr where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on'";
    result1=db.queryEx(query1);
    if (result1.length) {
        var a=" ";
      }
    
       else{
        var a="hr_document ";
       }
      
    
    //length1= result1.length;
    query2="select * from Documents where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on' and ans4='on' and ans6='on' and ans7='on' and ans8='on' and ans9='on' and ans10='on' and ans11='on' and ans12='on' and ans13='on' and ans14='on' and ans15='on' and ans16='on'";
    result2=db.queryEx(query2);
    if (result2.length) {
        var b=" ";
      }
    
       else{
        var b="document ";
       }
    //length2= result2.length;
    query3="select * from rbd where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'";
    result3=db.queryEx(query3);
    if (result3.length) {
        var c=" ";
      }
    
       else{
        var c = "rbd ";
       }
      
    
    //length3= result3.length;
    query4="select * from network where emp_id = "+id+" and ans1='on' and ans2='on'and ans3='on'and ans4='on'and ans5='on'and ans6='on'and ans7='on'and ans8='on'and ans9='on'";
    result4=db.queryEx(query4);
    if (result4.length) {
        var d=" ";
      }
    
       else{
        var d="network ";
       }
        var e=" ";
        if (a==e && b==e && c==e && d==e) {
        return "All done";
       }else{
       
      var string=a.concat(b, c,d);
      return string ;
       }
    
   
}

  });

}
