redfern-bootstrap-confirm
=========

A confirm window that will fire a custom callback. Use in place of the javascript confirm window.


Version
----

1.1

Options
-------------

| Option     	| Description                                                                                                                                               	| Default                    	|
|------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------	|----------------------------	|
| title      	| The title that will be used for the modal dialog.                                                                                                         	| 'Confirm'                  	|
| body       	| The contents of the body of the modal. This can be HTML.                                                                                                  	| 'Do you wish to continue?' 	|
| okText     	| The text of the primary (confirmation) button.                                                                                                            	| 'Ok'                       	|
| cancelText 	| The text of the cancel button.                                                                                                                            	| 'Cancel'                   	|
| template   	| You can pass in a template to be used for the modal. See the  ([basic example](https://github.com/mcdrummerman/redfern-bootstrap-confirm/tree/master/basic%20example)) for an example of how to do this.                                              	| see below                  	|
| callback   	| The function that will be called after the confirmation button has been pressed                                                                           	| null                       	|
| data       	| The data that is passed to the callback function. Make sure your callback accepts a parameter in order for it to recieve the data and act on it properly. 	|     Empty function --> function(){}                     |
| hideCancel	| Determines whether or not to hide the cancel button 	| false	|        |            	|   	|              	|


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
                callback: function(){ $('#confirmtext').hide().text(data.text).fadeIn(data.fade); },
                data: {text: 'I am confirm 2.', fade: 2500 },
                body: 'Change the label?'
            });
            
$('#some-button').click(function(){
    $('#confirm').confirm('show');            
});         
```

The [basic example](https://github.com/mcdrummerman/redfern-bootstrap-confirm/tree/master/basic%20example) has a few more examples of how to accomplish this.

License
----

MIT
