$(document).ready(function () {
  let initialValue = "primary";

  // primary secondary functionality
  $(".main").on("change", ".result select", function () {
    const currentValue = $(this).val();

    if (currentValue === "primary" && initialValue === "primary") {
      $(this).val("secondary");
    } else {
      initialValue = currentValue;
    }
  });

  // add functionality
  $(".add-another").click(function () {
    const div = document.createElement("div");
    div.innerHTML = `
      <input type="file" class="file-input">
      <select>
        <option value="secondary">Secondary Image</option>
        <option value="primary">Primary Image</option>
      </select>
      <div class="remove">Remove</div>`;

    $(".result").append(div);
  });

  // remove
  $(".result").on("click", ".remove", function () {
    $(this).parent().remove();
  });

  // file input change
  $(".result").on("change", ".file-input", function (e) {
    const fileInput = e.target;
    const file = fileInput.files[0];
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageUrl = e.target.result;
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        $(".c-1").append(imgElement);
      };

      reader.readAsDataURL(file);
    }
  });
});
