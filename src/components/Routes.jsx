var Routes = require('react-router').Routes;
var DefaultRoute = require('react-router').DefaultRoute;
var Route = require('react-router').Route;
var NotFoundRoute = require('react-router').NotFoundRoute;

var Application = require('./Application.jsx');
var FanfictionInput = require('./FanfictionInput.jsx');
var Config = require('./Config.jsx');

var routes = (
<Routes>
    <Route path="/" handler={Application}>
        <DefaultRoute name="application" handler={FanfictionInput}/>
        <Route name="config" handler={Config}/>
        <NotFoundRoute handler={FanfictionInput}/>
    </Route>
</Routes>
);

module.exports = routes;
