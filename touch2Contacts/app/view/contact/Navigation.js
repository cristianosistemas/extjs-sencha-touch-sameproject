/*
 * File: app/view/contact/Navigation.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('ExtMVC.view.contact.Navigation', {
    extend: 'Ext.Container',
    alias: 'widget.contactnavigation',

    requires: [
        'ExtMVC.view.contact.List',
        'ExtMVC.view.contact.Details',
        'Ext.dataview.List',
        'Ext.Panel'
    ],

    config: {
        layout: 'card',
        items: [
            {
                xtype: 'contactlist'
            },
            {
                xtype: 'contactdetails'
            }
        ]
    }

});