
/**
 * To-do item content type
 */
module.exports = {
  "name": "to-do-item",
  "label": "To-do item",
  "plural": "To-do items",
  "icon": "check-square-o",
  "description": "",
  "timestamps": true,
  "publishable": false,
  "fields": {
    "done": {
      "name": "done",
      "label": "Done",
      "type": "checkbox",
      "placeholder": "Done"
    },
    "title": {
      "name": "title",
      "label": "Title",
      "type": "text",
      "placeholder": "Title"
    },
    "description": {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "placeholder": "Description",
      "editor": "plain"
    },
    "created": {
      "name": "created",
      "label": "Created",
      "type": "datetime",
      "readonly": true
    },
    "updated": {
      "name": "updated",
      "label": "Updated",
      "type": "datetime",
      "readonly": true
    }
  },
  "labelField": "title"
}
