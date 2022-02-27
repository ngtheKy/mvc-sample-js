let model = {
  data: {
    text: "Hello World",
  },
};

let view = {
  init: function () {
    this.render();
  },

  render: function () {
    console.log(model.data.text);
  },
};

let controller = {
  init: function () {
    view.init();
  },
};

controller.init();
