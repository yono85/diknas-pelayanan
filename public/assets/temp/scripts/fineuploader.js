// <!-- Fine Uploader Java Script -->

var manualUploader = new qq.FineUploader({
    element: document.getElementById('fine-uploader-manual-trigger'),
    template: 'qq-template-manual-trigger',
    request: {
        endpoint: '/server/uploads'
    },
    thumbnails: {
        placeholders: {
            waitingPath: '/source/placeholders/waiting-generic.png',
            notAvailablePath: '/source/placeholders/not_available-generic.png'
        }
    },
    autoUpload: false,
    debug: true
});

qq(document.getElementById("trigger-upload")).attach("click", function () {
    manualUploader.uploadStoredFiles();
});

// <!-- Validation  Fine Uploader Java Script -->
var restrictedUploader = new qq.FineUploader({
    element: document.getElementById("fine-uploader-validation"),
    template: 'qq-template-validation',
    request: {
        endpoint: '/server/uploads'
    },
    thumbnails: {
        placeholders: {
            waitingPath: '/source/placeholders/waiting-generic.png',
            notAvailablePath: '/source/placeholders/not_available-generic.png'
        }
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'txt'],
        itemLimit: 3,
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    }
});
// <!-- S3 Fine Uploader Script -->
var s3Uploader = new qq.s3.FineUploader({
    debug: true,
    element: document.getElementById('fine-uploader-s3'),
    template: 'qq-template-s3',
    request: {
        endpoint: "https://upload.fineuploader.com",
        accessKey: "AKIAJB6BSMFWTAXC5M2Q"
    },
    signature: {
        endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
    },
    uploadSuccess: {
        endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php?success",
        params: {
            isBrowserPreviewCapable: qq.supportedFeatures.imagePreviews
        }
    },
    iframeSupport: {
        localBlankPagePath: "/server/success.html"
    },
    cors: {
        expected: true
    },
    chunking: {
        enabled: true
    },
    resume: {
        enabled: true
    },
    deleteFile: {
        enabled: true,
        method: "POST",
        endpoint: "https://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
    },
    validation: {
        itemLimit: 5,
        sizeLimit: 15000000
    },
    thumbnails: {
        placeholders: {
            notAvailablePath: "/server/not_available-generic.png",
            waitingPath: "/server/waiting-generic.png"
        }
    },
    callbacks: {
        onComplete: function (id, name, response) {
            var previewLink = qq(this.getItemByFileId(id)).getByClass('preview-link')[0];

            if (response.success) {
                previewLink.setAttribute("href", response.tempLink)
            }
        }
    }
});

