'use strict';

describe('pageList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('pageList'));

    // Test the controller
    describe('pageListController', function() {

        it('should create a `pages` model with 4 pages', inject(function($componentController) {
            var ctrl = $componentController('pageList');

            expect(ctrl.pages.length).toBe(4);
        }));

    });

});