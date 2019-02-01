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
                        label: 'Головна',
                        id: 'id1'
                    },
                    {
                        href: '#secondPage',
                        label: 'Послуги',
                        id: 'id2'
                    },
                    {
                        href: '#3rdPage',
                        label: 'Галерея',
                        id: 'id3'
                    },
                    {
                        href: '#4thPage',
                        label: '4thPage',
                        id: 'id4'
                    },
                    {
                        href: '#5thPage',
                        label: '5thPage',
                        id: 'id4'
                    }
                ]
            }
});