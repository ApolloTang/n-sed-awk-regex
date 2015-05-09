getDimension: function() {
    var size = this.options.creative.get('size');
    var width = '';
    var height = '';
    var regExp = new RegExp('^(\\d+)x(\\d+)$');
    var result = regExp.exec(size);
    if (result != null) {
        var width = result[1];
        var height = result[2];
    }
    return {
        'width': width,
        'height': height
    };
},
