$(function () {
  $(".notify-basic").on("click", function () {
    $.notify({
      title: "<strong>Title</strong>",
      message: "Yeah, it's working!",
    });
  });
});

$(function () {
  $(".notify-primary").on("click", function () {
    $.notify(
      {
        title: "<strong>Title</strong>",
        message: "Yeah, it's working!",
      },
      {
        type: "primary",
      }
    );
  });
});

$(function () {
  $(".notify-danger").on("click", function () {
    $.notify(
      {
        title: "<strong>Title</strong>",
        message: "Yeah, it's working!",
      },
      {
        type: "danger",
      }
    );
  });
});

$(function () {
  $(".notify-warning").on("click", function () {
    $.notify(
      {
        title: "<strong>Title</strong>",
        message: "Yeah, it's working!",
      },
      {
        type: "warning",
      }
    );
  });
});

$(function () {
  $(".notify-success").on("click", function () {
    $.notify(
      {
        title: "<strong>Title</strong>",
        message: "Yeah, it's working!",
      },
      {
        type: "success",
      }
    );
  });
});

$(function () {
  $(".top-right").on("click", function () {
    $.notify(
      {
        title: "<strong>Title</strong>",
        message: "Yeah, it's working!",
      },
      {
        type: "primary",
        animate: {
          enter: "animated fadeInUp",
          exit: "animated fadeOutRight",
        },
        placement: {
          from: "top",
          align: "right",
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
      }
    );
  });
});

$(function () {
  $(".bottom-left").on("click", function () {
    $.notify(
      {
        title: "<strong>Title</strong>",
        message: "Yeah, it's working!",
      },
      {
        type: "warning",
        animate: {
          enter: "animated fadeInUp",
          exit: "animated fadeOutRight",
        },
        placement: {
          from: "bottom",
          align: "left",
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
      }
    );
  });
});

$(function () {
  $(".top-left").on("click", function () {
    $.notify(
      {
        title: "<strong>Title</strong>",
        message: "Yeah, it's working!",
      },
      {
        type: "danger",
        animate: {
          enter: "animated fadeInUp",
          exit: "animated fadeOutRight",
        },
        placement: {
          from: "top",
          align: "left",
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
      }
    );
  });
});

$(function () {
  $(".bottom-right").on("click", function () {
    $.notify(
      {
        title: "<strong>Title</strong>",
        message: "Yeah, it's working!",
      },
      {
        type: "success",
        animate: {
          enter: "animated fadeInUp",
          exit: "animated fadeOutRight",
        },
        placement: {
          from: "bottom",
          align: "right",
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
      }
    );
  });
});

$(function () {
  $(".btn-notify").on("click", function () {
    $.notify({
      icon: ".icon-dashboard",
      message: "Everyone loves icons! Use them in your notification!",
    });
  });
});

$(function () {
  $(".btn-outline").on("click", function () {
    $.notify(
      {
        icon: "https://support.altizure.com/assets/uploads/system/og-image.png",
        message: " I am using an image.",
      },
      {
        icon_type: "image",
      }
    );
  });
});
