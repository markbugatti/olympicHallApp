'use strict';

describe('menuList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('menuList'));

    // Test the controller
    describe('menuListController', function() {

        it('should create a `menus` model with 4 menus', inject(function($componentController) {
            var ctrl = $componentController('manuList');

            expect(ctrl.menus.length).toBe(4);
        }));

    });

});