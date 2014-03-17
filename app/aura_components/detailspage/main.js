/**
 * Created by synerzip on 16/3/14.
 */
define(['backbone','text!./Details.html','../../routers/routers'],function(Backbone,tpl,Router){
    window.router = new Router();
    Backbone.history.start();
    return {
        type: "Backbone",
        el:'.container',
        initialize: function() {
            this.render();
        },
        render:function(){
            this.$el.html(_.template(tpl)());
        },
        events: {
            "click #myClick": function() {
                console.log("Clicked zoom in");
                this.sandbox.emit("alert",'this is my custom alert message');

            }
        }
    }
})
