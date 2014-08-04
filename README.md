redfern-bootstrap-confirm
=========

A confirm window that will fire a custom callback. Use in place of the javascript confirm window.


Version
----

1.0

Options
-------------

| Option     	| Description 	| Default                    	|
|------------	|-------------	|----------------------------	|
| title      	|             	| 'Confirm'                  	|
| body       	|             	| 'Do you wish to continue?' 	|
| okText     	|             	| 'Ok'                       	|
| cancelText 	|             	| 'Cancel'                   	|
| template   	|             	|                            	|
| callback   	|             	|                            	|


Usage
--------------

```sh
// setup
$('#confirm').confirm({
                callback: $('#confirmtext').hide().text(data.text).fadeIn(data.fade);,
                data: {text: 'I am confirm 2.', fade: 2500 },
                body: 'Change the label?'
            });
            
$('#some-button').click(function(){
    $('#confirm').data('confirm').show();            
});         
```

License
----

MIT
