'use strict';

angular.
module('pageList').
component('pageList', {
    templateURL: 'page-list/page-list.template.html',
    controllerAs: '$pageListCtrl',
    controller: function pageListController() {
        this.pages = [
           {
                id: 'section0',
                content: 'fullPage.js'
           },
           {
               id: 'section1',
               content: 'Simple Demo'
           },
           {
               id: 'section2',
               content: 'No wraps, no extra markup'
           },
           {
               id: 'section3',
               content: 'Just the simplest demo ever'
           }
       ]
   }
});