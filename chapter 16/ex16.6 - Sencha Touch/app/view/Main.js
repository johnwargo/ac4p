/*jslint browser:true*/
/*global Ext*/

Ext.define('Ex166.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'main',
  requires: [
        'Ext.TitleBar', 'Ex166.view.DeviceInfoList'
    ],
  config: {
    tabBarPosition: 'bottom',

    items: [
      {
        title: 'Welcome',
        iconCls: 'home',

        styleHtmlContent: true,
        scrollable: true,

        items: [{
          docked: 'top',
          xtype: 'titlebar',
          title: 'Hello World #5'
        }, {
          xtype: 'deviceInfoList',
        }],

        html: ["<p>This is a Cordova application that makes calls to the Cordova Device API.</p>"].join("")
      },
      {
        title: 'About',
        iconCls: 'action',

        items: [
          {
            docked: 'top',
            xtype: 'titlebar',
            title: 'About'
          }
        ],
        html: ["<p>This is a sample application from Chapter 16 of Apache Cordova 4 Programming.</p>"].join("")
      }
    ]
  }
});