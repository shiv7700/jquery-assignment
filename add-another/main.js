// add functionality

$(".add-another").click(function () {
  let num = new Date().getTime();
  const div = document.createElement("div");
  div.innerHTML = `        <input type="file">
        <select>
            <option value="">primary</option>
            <option value="">secondary</option>
        </select>
        <div class="remove">Remove</div>`;
  div.className = `${num}`;
  $(".result").append(div);
});

// delete functionality
// $(".remove").click(function () {
//   console.log($(this).parent());
//   $(this).parent().css("display", "none");
//   $(this).parent().hide();
//   console.log("working");
// });

$(".result").on("click", ".remove", function () {
  $(this).parent().remove();
});
