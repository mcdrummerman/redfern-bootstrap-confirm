# 



### Options

An object sent to Confirm that will be used to setup the modal dialog.

### <span style="font-size: 16pt; text-indent: 2em;">title - <span style="font-weight: normal;">The title of the modal. </span>Default: <span style="font-weight: normal;">Confirm</span></span>

### <span style="font-size: 16pt; text-indent: 2em;">body <span style="font-weight: normal;">- The modal body. This can be HTML.</span></span>

### <span style="font-size: 16pt; text-indent: 2em;">okText - <span style="font-weight: normal;">The text for the confirm button. </span>Default:<span style="font-weight: normal;"> "Ok"</span></span>

### <span style="font-size: 16pt; text-indent: 2em;">cancelText -&nbsp;<span style="font-weight: normal;">The text for the confirm button. </span>Default: <span style="font-weight: normal;">"Cancel"</span></span>
### <span style="font-size: 16pt; text-indent: 2em;">template - </span> You can send in your own template but it is recommended you stick with the default.<span style="font-size: 16pt; text-indent: 2em;">**modalOptions - **&nbsp;These are the options that are sent to the Bootstrap modal, you can find their documentation here:&nbsp;</span><span style="font-size: 21px;">http://getbootstrap.com/javascript/#modals-usage</span></div><div><span style="font-size: 21px;">
</span></div>

### <span style="font-size: 21px;">Usage</span>

$('#confirm').confirm({

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; callback: function(data){ $('#confirmtext').text('data.text); },

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; data: {text: 'I am confirm 1.'},

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; body: 'Change the label for confirm 1?'

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; });

See the example the basic example (https://github.com/mcdrummerman/redfern-bootstrap-confirm/tree/master/basic%20example) index.html for more examples.
<div>
</div>