'use strict';

angular.
    module('menuList').
        component('menuList', {
            templateUrl: 'menu-list/menu-list.template.html',
            controllerAs: '$menuListCtrl',
            controller: function MenuListController() {
                this.menus = [
                    {
                        href: '#firstPage',
                        label: 'Home',
                        id: 'id1'
                    },
                    {
                        href: '#secondPage',
                        label: '2ndPage',
                        id: 'id2'
                    },
                    {
                        href: '#3rdPage',
                        label: '3rdPage',
                        id: 'id3'
                    },
                    {
                        href: '#4thPage',
                        label: '4thPage',
                        id: 'id4'
                    }
                ]
            }
});