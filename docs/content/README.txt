<h1>Welcome to Dot</h1>
<p>Dot is a framewrok born to mitigate the gap between complex or semi-complex modern js frameworks and the native web apis. <strong>Starting up as a personal experiment the framework is not in even in an alpha state right now, so please use it just for testing and helping with the development</strong>.</p>
<h2>APIs</h2>
<p>Dot is basically a collection of classes written by design to emulate some common modern frameworks APIs but using underneth the modern Custom Elements (aka Web Components) API to implement these functionalities, and where not possibile it tries to stay native as much as possible (for example with <code>Proxy</code> for reactivity). The template engine is <a href="https://lit-html.polymer-project.org/">lit-html</a> a wonderfull and blazing fast HTML rendering engine by the <a href="https://www.polymer-project.org/">Polymer</a> team witch gos very well with web componets structure.</p>
<p>The framewrok mainly exposes a DotApp class witch is the entry point of the application, and then the DotComponent class that you need to extend for each component. Once the component is registered and mounted using the <code>app.mount(component : DotComponent, parent : DotComponent | null)</code> method and the app is created with <code>app.create(container : Node)</code> the basic game is done and you will see your component mounted as a Custom Element on the app container node with some useful reactive props and APIs.</p>
<h2>Classes</h2>
<p>Below there is a list of all the exposed classes and their main functionality, for in-depth APIs documentation refer to the class page.</p>
<table>
<thead>
<tr>
<th>Class Name</th>
<th>Usage and Content</th>
</tr>
</thead>
<tbody>
<tr>
<td><router-link to="/classes/DotApp">DotApp</router-link></td>
<td>This is the main class that describes and contains all the core functionality of your app. It is meant to be instanciated, not extended like the <code>DotComponent</code> class, and the using the method <code>create()</code> appended to a pre-created DOM Node</td>
</tr>
<tr>
<td><router-link to="/classes/DotComponent">DotComponent</router-link></td>
<td>This is the basic component class, all of your components will need to extend this class. This parent class provides all the reactive logic implemented into properties and all the necessary method to make the transition to native more friendly</td>
</tr>
<tr>
<td><router-link to="/classes/DotStore">DotStore</router-link></td>
<td>The store used to share the state between all your application components</td>
</tr>
<tr>
<td><router-link to="/classes/DotRouter">DotRouter</router-link></td>
<td>The router that manages your application <code>router-view</code> and handle navigation</td>
</tr>
<tr>
<td><router-link to="/classes/DotRoute">DotRoute</router-link></td>
<td>This is the class you need to extend when defining the a view for the router</td>
</tr>
</tbody>
</table>
