Ext.define('DemoApp.login.LoginController',{
    extend : 'Ext.app.ViewController',
    alias  : 'controller.login',
    onClickSubmit : function(){
        var me        = this,
            view      = me.getView(),
            ref       = me.getReferences();

        if(ref.username.value=="admin" && ref.password.value=="admin"){
            view.close();
            Ext.widget('viewport',{
                layout : 'fit',
                items  : [{
                    xtype : 'main'
                }]
            });
        }
    }
});
