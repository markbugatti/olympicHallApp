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
                        label: 'Home'
                    },
                    {
                        href: '#secondPage',
                        label: '2ndPage'
                    },
                    {
                        href: '#3rdPage',
                        label: '3rdPage'
                    },
                    {
                        href: '#4thPage',
                        label: '4thPage'
                    }
                ]
            }
});