## Directive APIs and “&”
### Step 1: Define Method in Controller
```
function Controller(){
    this.method = function(arg1){
        this.prop = "Hi" + arg1;
    };
}
```
`this.method` - 'this' refers to parent controller instance

`arg1` - 'arg1' needs to come from child directive

### Step 2: Declare Method Reference in Directive
```
function MyDirective(){
    var ddo = {
        scope:{
            myMethod: '&method'
        },
        ...
        temolateUrl: 'template.html'
    };
    return ddo;
}
```
`myMethod` - property name to reference parent method in directive

`'&method'` - attribute name to use in parent temolate on this directive

### Step 3: Declare In Parent's Template
```
<div ng-controller="Controller as ctrl">
    <my-directive method="ctrl.method(myArg)">
    </my-directive>
</div>
```
`.method` - reference to method in controller

`(myArg)` - placeholder label for value to be passed in from directive

### Step 4: Map Method & Args in Directive's Template
```
<button ng-click="dirCtrl.myMethod({myArg : 'v1'})">
    Remove Item
</button>
```
`.myMethod` - method name from isolate scope mapping

`{myArg : 'v1'}` - map of parent template declared arg name to value from directive