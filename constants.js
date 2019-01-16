exports.REGEX_VALID_URL = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i');

exports.REGEX_CONTENT_TYPE_IMAGE = new RegExp("image\/.*", "i");

exports.REGEX_CONTENT_TYPE_AUDIO = new RegExp("audio\/.*", "i");

exports.REGEX_CONTENT_TYPE_VIDEO = new RegExp("video\/.*", "i");

exports.REGEX_CONTENT_TYPE_TEXT = new RegExp("text\/.*", "i");

exports.REGEX_CONTENT_TYPE_APPLICATION = new RegExp("application\/.*", "i");
