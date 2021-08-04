import { Controller } from "stimulus"

export default class extends Controller {
    static targets = [ "completed" ]
    static values = { updateUrl: String }

    toggle(event) {
        let formData = new FormData()
        formData.append("todo[completed]", this.completedTarget.checked)
    }

    fetch(this.updateUrlValue, {
      body: formData,
      method: "PATCH",
      credentials: "include",
      dataType: "script",
      headers: {
        "X-CSRF-Token": token,
      },
    }).then(function (response) {
      if (response.status != 204) {
        event.target.checked = !event.target.checked;
      }
    });

    const token = document.getElementsByName(
      "csrf-token"
    )[0].content;

    // CSRF token header
    // getMetaValue("csrf-token")

    // function getMetaValue(name) {
    //   const element = document.head.querySelector(`meta[name="${name}"]`);
    //   return element.getAttribute("content");
    // }
}
