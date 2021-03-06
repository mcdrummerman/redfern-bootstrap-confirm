redfern-bootstrap-confirm
=========

A confirm window based on Twitter's Bootstrap that will fire a custom callback. Use in place of the javascript confirm window.


Version
----

1.2.5

Options
-------------

| Option     	| Description                                                                                                                                               	| Default                    	|
|------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------	|----------------------------	|
| title      	| The title that will be used for the modal dialog.                                                                                                         	| 'Confirm'                  	|
| body       	| The contents of the body of the modal. This can be HTML.                                                                                                  	| 'Do you wish to continue?' 	|
| okText     	| The text of the primary (confirmation) button.                                                                                                            	| 'Ok'                       	|
| cancelText 	| The text of the cancel button.                                                                                                                            	| 'Cancel'                   	|
| template   	| You can pass in a template to be used for the modal. See the  ([GitHub Page](http://mcdrummerman.github.io/redfern-bootstrap-confirm)) for an example of how to do this.                                              	| see below                  	|
| callback   	| The function that will be called after the confirmation button has been pressed                                                                           	| Empty function --> function(){} |
| cancelCallback       	| Callback to be fired when the cancel button is clicked.                                                                                                  	| Empty function --> function(){} 	|
| data       	| The data that is passed to the callback function. Make sure your callback accepts a parameter in order for it to receive the data and act on it properly. 	|    Empty object --> {}   |
| cancelData       	| The data that is passed to the cancelCallback function. Make sure your callback accepts a parameter in order for it to receive the data and act on it properly. 	|    Empty object --> {}   |
| hideCancel	| Determines whether or not to hide the cancel button 	| false	|        |            	|   	|              	|
| hideClose	| Determines whether or not to hide the close button 	| true	|        |            	|   	|              	|
| modalOptions	| Plain object passed to the bootstrap modal that represents its options 	| modalOptions: { keyboard: false, show: true, backdrop: 'static'}	|        |            	|   	|              	|


Default Template
----------------

```html
<div class="modal fade in" role="dialog" aria-hidden="false">
  <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                	<button type="button" class="close" data-dismiss="modal">×</button>
                	<h4 class="modal-title"></h4>
                  </div>
                  <div class="modal-body"></div>
                  <div class="modal-footer">
                	<button type="button" class="btn btn-primary"></button>
                	<button type="button" class="btn btn-default" data-dismiss="modal"></button>
                  </div>
                </div>
  </div>
</div>
```


Usage
--------------

```javascript
// setup
$('#confirm').confirm({
                callback: function(args){ $('#confirmtext').hide().text(args.text).fadeIn(args.fade); },
                data: {text: 'I am confirm 2.', fade: 2500 },
                body: 'Change the label?'
            });
            
$('#some-button').click(function(){
    $('#confirm').confirm('show');            
});         
```

The [GitHub Page](http://mcdrummerman.github.io/redfern-bootstrap-confirm) has more examples.

License
----

MIT
