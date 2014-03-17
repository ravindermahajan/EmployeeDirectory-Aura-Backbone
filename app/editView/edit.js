define([ 'jquery','underscore','backbone','../Employee/employeeUrl','text!../editView/create-edit-template.html'],function($,_,Backbone,Employee,tpl,Roputer){
    var employee=new Employee();
    return Backbone.View.extend({

    el:'#employeeDiv',
    render:function(options){
        var self=this;
        if(options && options.id){
            var employee=new Employee({id:options.id});
            employee.fetch({
                success:function(data){
                    var editTemplate= _.template((tpl),{user:data});
                    self.$el.html(editTemplate);
                }
            })
        }
        else{
            var editTemplate= _.template((tpl),{user:null});
            self.$el.html(editTemplate);
        }

    },
    events:{
        'click .edit-user-form>.btn':'callSave'

    },
    callSave:function(ev){
        var inputValues=this.$el.find('form input');
        var empDetail={firstname:inputValues[0].value,lastname:inputValues[1].value,age:inputValues[2].value};
        var empDetail=inputValues[3] && inputValues[3].value!=''?   $.extend({},empDetail,{id:inputValues[3].value}):empDetail;
        employee.save(empDetail,{
            success:function(data){
                router.navigate('', {trigger:true});
            }
        })
    }
    })

});