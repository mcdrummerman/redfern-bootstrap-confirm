; (function ($, window, document, undefined) {

    // default template 
    var defaultTemplate = '<div class="modal fade" role="dialog">' +
       '<div class="modal-dialog">' +
       '<div class="modal-content">' +
       '<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title"></h4></div>' +
       '<div class="modal-body">' +
       '</div>' +
       '<div class="modal-footer">' +
       '<button type="button" class="btn btn-primary"></button>' +
       '<button type="button" class="btn btn-default" data-dismiss="modal"></button>' +
       '</div>' +
       '</div>' +
       '</div>' +
       '</div>';

    // defaults
    var defaults = {
        template: defaultTemplate,
        title: 'Confirm',
        body: 'Do you wish to continue?',
        okText: 'Ok',
        cancelText: 'Cancel',
		modalOptions: 	{
							keyboard: true,
							show: true
						}
    };

    // constructor
    var Confirm = function (options, $element) {
        this.setup(options, $element);
    };

    Confirm.prototype.setup = function (options, $element) {
        this.options = $.extend(true, {}, defaults, options);
		this.$element = $element;
        this.init();
    };

    Confirm.prototype.init = function () {
        var $bsmodal = this.$element.find('.modal.fade');

        if (!$bsmodal.length) {
            $bsmodal = $(this.options.template);
			$bsmodal.appendTo(this.$element);
        }

        var cb = function (c, d) {
            return function () {
                var _innerCb = c;
                var _data = d;
                if (_innerCb) {
                    _innerCb(_data);
                }
                $bsmodal.modal('hide');
			};
        }(this.options.callback, this.options.data);

        $bsmodal.find('.modal-title').text(this.options.title);
        $bsmodal.find('.modal-body').html(this.options.body);
        $bsmodal.find('.btn-primary')
			.text(this.options.okText)
			.off('click').on('click', cb);
        $bsmodal.find('.btn-default').text(this.options.cancelText);
        
		// clear out the data so that new options are applied
		if($bsmodal.data()['bs.modal']){
			$bsmodal.data()['bs.modal'] = undefined;
		}
        $bsmodal.modal(this.options.modalOptions);
       
    };

    $.fn.confirm = function (options) {
        return this.each(function () {
            var _this = $(this);

            if (!_this.data('confirm')) {
                _this.data('confirm', new Confirm(options, $(this)));
            } else {
                _this.data('confirm').setup(options, $(this));
            }
        });
    };
})(jQuery, window, document);