Ext.define('DemoApp.main.Main',{
    extend : 'Ext.panel.Panel',
    alias  : 'widget.main',
    controller : 'main',    
    layout : 'border',
    initComponent : function(){
        var me = this;

        me.items = me.buildItems();
        me.callParent(arguments);
    },
    buildItems : function(){
        return  [{
            region : 'north',
            xtype  : 'toolbar',
            cls    : 'main-toolbar',
            items  : [{
                xtype : 'component',
                html  : '<h2>RestMang</h2>'
            },{
                xtype : 'tbfill'
            },{
                text : 'Profile'
            },{
                text : 'Logout'
            }]
        },{
            region : 'west',
            title  : 'West',
            width  : 300,
            collapsible : true,
            split: true,
            xtype: 'treepanel',
            rootVisible: false,
            // Sharing the store synchronizes the views:
            store: this.buildMenuStore(),
            listeners : {
                itemclick : 'onItemClickTreePanel'
            }    
        },{
            region : 'center',
            xtype  : 'tabpanel',
            reference : 'masterTabPanel',
            defaults : {
                closable : true
            },
            items  : [{
                title : 'Tab 1'
            }]
        }];
    },
    buildMenuStore : function(){
        var store = Ext.create('Ext.data.TreeStore', {
            root: {
                text: 'RestMang Menu',
                expanded: true,
                children: [{
                    text : 'Manage Sales',
                    view : 'managesales',
                    leaf : true
                },{
                    text : 'Manage Orders',
                    view : 'manageorders',
                    leaf : true
                },{
                    text : 'Manage Chefs',
                    view : 'managechefs',
                    leaf : true
                },{
                    text : 'Manage Billing',
                    view : 'managebilling',
                    leaf : true
                }]
            }
        });        

        return store;
    }       
});