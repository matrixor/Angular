"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./components/pages/about.component");
var home_component_1 = require("./components/pages/home.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about2',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map