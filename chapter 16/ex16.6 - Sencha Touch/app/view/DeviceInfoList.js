/*jslint browser:true*/
/*global Ext*/

Ext.define('Ex166.view.DeviceInfoList', {
  extend: 'Ext.List',
  xtype: 'deviceInfoList',
  config: {
    title: 'Device Information',
    store: {
      fields: ['item', 'value'],
      data: []
    },
    itemTpl: ['{item}: ({value})'],
    onItemDisclosure: false,
    grouped: false,
  }
});