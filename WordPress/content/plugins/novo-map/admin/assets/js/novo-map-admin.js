jQuery(document).ready( function($){

    //*****************************
    //***** Main admin menu *****//

    var gmap_marker_logo = false;
    var marker_cluster;

    // open the marker logo window
    $('#novo-map-gmap-marker-logo-id-small, #novo-map-gmap-marker-logo-id-medium, #novo-map-gmap-marker-logo-id-big, #novo-map-gmap-additional-marker-logo-id').click(
        function () {
            if (! gmap_marker_logo) {
                gmap_marker_logo_down();
                gmap_marker_logo = true;
                marker_cluster = $(this)
            }
            else {
                gmap_marker_logo_up();
                gmap_marker_logo = false;
            }
        }
    );

    //close marker logo window
    $('#novo-map-gmap-marker-logo-folder-images-close').click(
        function () {
            if (! gmap_marker_logo) {
                gmap_marker_logo_down();
                gmap_marker_logo = true;
            }
            else {
                gmap_marker_logo_up();
                gmap_marker_logo = false;
            }
        }
    );

    // populate form hidden input and img tag with src and src-data value
    $('#novo-map-gmap-marker-logo-folder-images div div img').click(
        function () {
            if (gmap_marker_logo) {
                marker_cluster.parent().find('img').attr('src', $(this).attr('src'));
                marker_cluster.parent().find('img').attr('width', $(this).attr('width'));
                marker_cluster.parent().find('img').attr('height', $(this).attr('height'));
                marker_cluster.parent().find('input[type=hidden]').val($(this).attr('data-src'));
                gmap_marker_logo_up();
                gmap_marker_logo = false;
            }
        }
    );

    function gmap_marker_logo_down() {
        $("#novo-map-gmap-marker-logo-folder-images").animate({top: '0'});
    }
    function gmap_marker_logo_up() {
        $("#novo-map-gmap-marker-logo-folder-images").animate({top: '-200%'});
    }

    // Add Color Picker to all inputs that have 'color-field' class
    $(function() {
        $('.novo-map-color-field').wpColorPicker();
    });

    // disable category or tag select if one is chosen
    $('#novo-map-gmap-category, #novo-map-gmap-tag').change(function(){
        disable_select($(this));
    });

    disable_select($('#novo-map-gmap-category'));
    disable_select($('#novo-map-gmap-tag'));

    function disable_select(select) {
        if(select.val() != "") {
            if(select.attr('id') == 'novo-map-gmap-category') {
                $('#novo-map-gmap-tag').attr('disabled','disabled');
            }
            if(select.attr('id') == 'novo-map-gmap-tag') {
                $('#novo-map-gmap-category').attr('disabled','disabled');
            }
        }
        else {
            if(select.attr('id') == 'novo-map-gmap-category') {
                $('#novo-map-gmap-tag').removeAttr('disabled');
            }
            if(select.attr('id') == 'novo-map-gmap-tag') {
                $('#novo-map-gmap-category').removeAttr('disabled');
            }
        }
    }



    //*****************************
    //***** Post admin menu *****//

    // The "Upload" button for images in infobox
    $('#novo-map-marker-upload-infobox-image').click(function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        var button = $(this);
        wp.media.editor.send.attachment = function(props, attachment) {
            $('.novo-map-marker-upload-infobox-image img').attr('src', attachment.url);
            $('.novo-map-marker-upload-infobox-image input').val(attachment.id);
            wp.media.editor.send.attachment = send_attachment_bkp;
        };
        wp.media.editor.open(button);
        return false;
    });

    // The "Remove" button (remove the value from input type='hidden')
    $('#novo-map-marker-remove-infobox-image').click(function() {
        var answer = confirm(objectL10n.confirm_text);
        if (answer == true) {
            var src = $('.novo-map-marker-upload-infobox-image img').attr('data-src');
            $('.novo-map-marker-upload-infobox-image img').attr('src', src);
            $('.novo-map-marker-upload-infobox-image input').val('');
        }
        return false;
    });

    //toggle markers on the post admin menu

    var post_marker_logo = false;

    // open the marker logo window
    $('#novo-map-marker-marker-logo-id').click(
        function () {
            if (! post_marker_logo) {
                marker_logo_down();
                post_marker_logo = true;
            }
            else {
                marker_logo_up();
                post_marker_logo = false;
            }
        }
    );

    //close marker logo window
    $('#novo-map-marker-marker-logo-folder-images-close').click(
        function () {
            if (! post_marker_logo) {
                marker_logo_down();
                post_marker_logo = true;
            }
            else {
                marker_logo_up();
                post_marker_logo = false;
            }
        }
    );

    $('#novo-map-marker-marker-logo-folder-images div div img').click(
        function () {
            if (post_marker_logo) {
                $('#novo-map-marker-marker-logo-id-image').attr('src', $(this).attr('src'));
                $('#novo-map-marker-marker-logo-id-image').attr('width', $(this).attr('width'));
                $('#novo-map-marker-marker-logo-id-image').attr('height', $(this).attr('height'));
                $('#novo-map-marker-marker-logo-id-input').val($(this).attr('data-src'));
                marker_logo_up();
                post_marker_logo = false;
            }
        }
    );

    function marker_logo_down() {
        $("#novo-map-marker-marker-logo-folder-images").css({opacity: 0, display: 'flex'}).animate({opacity: 1});
    }

    function marker_logo_up() {
        $("#novo-map-marker-marker-logo-folder-images").animate({opacity: 0}).css({display: 'none'});
    }





    //************************************
    //***** Marker logo admin menu *****//

    var marker_logo = false;

    // open the marker logo window
    $('#novo-map-marker-logo-select-folder').click(
        function () {
            if (! marker_logo) {
                marker_down();
                marker_logo = true;
            }
            else {
                marker_up();
                marker_logo = false;
            }
        }
    );

    //close marker logo window
    $('#novo-map-marker-logo-folder-images-close').click(
        function () {
            if (! marker_logo) {
                marker_down();
                marker_logo = true;
            }
            else {
                marker_up();
                marker_logo = false;
            }
        }
    );

    // populate form hidden input and img tag with src value
    $('#novo-map-marker-logo-folder-images div div img').click(
        function () {
            if (marker_logo) {
                $('#novo-map-marker-logo-image').attr('src', $(this).attr('src'));
                $('#novo-map-marker-logo-url').val($(this).attr('src'));
                $('#novo-map-marker-logo-width').val(this.clientWidth);
                $('#novo-map-marker-logo-height').val(this.clientHeight);
                marker_up();
                marker_logo = false;
            }
        }
    );

    function marker_down() {
        $("#novo-map-marker-logo-folder-images").animate({top: '0'});
    }
    function marker_up() {
        $("#novo-map-marker-logo-folder-images").animate({top: '-200%'});
    }

    // open media uploader to chose own pins
    $('#novo-map-marker-logo-media-upload').click(function() {
        var send_attachment_bkp = wp.media.editor.send.attachment;
        var button = $(this);
        wp.media.editor.send.attachment = function(props, attachment) {
            $('#novo-map-marker-logo-image').attr('src', attachment.url);
            $('#novo-map-marker-logo-url').val(attachment.url);
            $('#novo-map-marker-logo-width').val(attachment.width);
            $('#novo-map-marker-logo-height').val(attachment.height);
            wp.media.editor.send.attachment = send_attachment_bkp;
        };
        wp.media.editor.open(button);
        return false;
    });

    //confirm on marker delete
    $('#novo-map-marker-logo-delete').click(function() {
        return confirm(objectL10n.confirm_text);
    });

});
