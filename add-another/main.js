$(document).ready(function () {
  let initialValue = "primary";

  // primary secondary functionality
  $(".main").on("change", ".result select", function () {
    const currentValue = $(this).val();

    if (currentValue === "primary" && initialValue === "primary") {
      alert("You have already selected the primary image");
      $(this).val("secondary");
    } else {
      initialValue = currentValue;
    }
  });

  // add functionality
  $(".add-another").click(function () {
    const div = document.createElement("div");
    div.innerHTML = `
      <input type="file">
      <select>
      <option value="secondary">Secondary Image</option>
      <option value="primary">primary Image</option>
      </select>
      <div class="remove">Remove</div>`;

    $(".result").append(div);
  });

  // remove
  $(".result").on("click", ".remove", function () {
    $(this).parent().remove();
  });
});
