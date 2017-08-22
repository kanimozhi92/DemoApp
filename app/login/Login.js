Ext.define('DemoApp.login.Login',{
    extend : 'Ext.Window',
    alias  : 'widget.login',
    controller : 'login',
    title  : 'Login Dialog',
    autoShow : true,
    width    : 400,
    height   : 250,
    bodyPadding: 20,
    closable   : false,
    draggable  : false,
    resizable  : false,
    items    : [{
        xtype      : 'textfield',
        fieldLabel : 'Username',
        name       : 'username',
        reference  : 'username',
        value      : 'admin',
        allowBlank : false
    },{
        xtype      : 'textfield',
        inputType  : 'password',
        fieldLabel : 'Password',
        name       : 'password',
        reference  : 'password',
        value      : 'admin',        
        allowBlank : false
    }],
    buttons : [{
        text      : 'Submit',
        listeners : {
            click : 'onClickSubmit'
        }
    },{
        text : 'Reset'
    }]
});