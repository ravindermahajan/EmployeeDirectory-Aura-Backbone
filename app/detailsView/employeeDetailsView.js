/**
 * Created by synerzip on 16/3/14.
 */
define([ 'jquery','underscore','backbone','../Collection/employeeCollectionUrl','text!../detailsView/details.html'],function($,_,Backbone,EmployeeList,tpl){

    return Backbone.View.extend({
        el:'#employeeDiv',
        render:function(){
            var self=this;
            var employeeList=new EmployeeList();
            employeeList.fetch({
                success:function(data){
                    var employeeTemplate= _.template(tpl,{users:data.models});
                    self.$el.html(employeeTemplate);
                }
            })
        }
    })

});