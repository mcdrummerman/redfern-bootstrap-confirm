
;
(function ($, window, document, undefined) {

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
        okText: 'OK',
        cancelText: 'Cancel',
        hideCancel: false,
        cancelSelector: '[data-dismiss=modal]',
        callback: function () { },
        data: {},
        modalOptions: {
            keyboard: true,
            show: true
        }
    };

    // constructor
    var Confirm = function (options, $element) {
        var t = this;

        // public functions
        t.setTitle = setTitle;
        t.setBody = setBody;
        t.showCancelButton = showCancelButton;
        t.hideCancelButton = hideCancelButton;
        t.show = show;
        t.destroy = destroy;
        t.reInitialize = reInitialize;

        setup(t, options, $element);

        // hoisted functions
        function setup(confirm, opt, $el) {
            confirm._options = $.extend(true, {}, defaults, opt);
            confirm._element = $el;
            confirm._result = false;

            init(confirm);
        };

        function reInitialize(opt, $el) {
            setup(this, opt, $el);
        };

        function init(confirm) {

            var $bsmodal = confirm._element.find('.modal.fade');

            $bsmodal.remove();
            $bsmodal = $(confirm._options.template);
            $bsmodal.appendTo(confirm._element);


            // optionally hide the cancel button 
            if (confirm._options.hideCancel) {
                confirm.hideCancelButton();
            } else {
                confirm.showCancelButton();
            }


            var cb = function (c, d) {
                return function () {
                    var innerCb = c;
                    var data = d;
                    if (innerCb) {
                        innerCb(data);
                    }
                    $bsmodal.modal('hide');
                };
            }(confirm._options.callback, confirm._options.data);

            confirm.setTitle(confirm._options.title);
            confirm.setBody(confirm._options.body);

            $bsmodal.find('.btn-primary')
                .text(confirm._options.okText)
                .off('click').on('click', function () {
                    cb();
                    confirm._result = true;
                });

            $bsmodal.find('.btn-default')
                .text(confirm._options.cancelText)
                .off('click')
                .on('click', function () {
                    confirm._result = false;
                });

            // clear out the data so that new options are applied
            if ($bsmodal.data()['bs.modal']) {
                $bsmodal.data()['bs.modal'] = undefined;
            }
        };

        function setTitle(title) {
            this._element.find('.modal-title').text(title);
        };

        function show() {
            var $bsmodal = this._element.find('.modal.fade');
            $bsmodal.modal(this._options.modalOptions);
        };

        function destroy() {
            this._element.removeData('confirm');
            this._element.find('.modal.fade').remove();
        };

        function setBody(bodyText) {
            this._element.find('.modal-body').html(bodyText);
        };

        function showCancelButton() {
            this._element.find('.btn-default').show();
        };

        function hideCancelButton() {
            this._element.find('.btn-default').hide();
        };

    };

    $.fn.confirm = function (options) {
        var args = Array.prototype.slice.call(arguments, 1); // for a possible method call

        return this.each(function () {
            var $el = $(this);
            var confirm = $el.data('confirm');

            var isStringParam = typeof options === 'string';

            // Confirm has been initialized and a method call is being attempted
            if (confirm && isStringParam) {
                if ($.isFunction(confirm[options])) {
                    confirm[options].apply(confirm, args);
                }
            } else if (confirm) { // confirm has been initialized and we are setting it up again
                confirm.reInitialize(options, $el);
            } else { // Confirm has not been initialized
                if (!isStringParam) { // check to make sure they are not attempting a method call for an un-initialized Confirm
                    $el.data('confirm', new Confirm(options, $el));
                }
            }

        });
    };
})(jQuery, window, document);