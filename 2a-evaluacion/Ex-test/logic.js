let controller;
const importUsers = (response) => {
  $("table").empty();
  $("#name").empty();
  $("table").append("<tr><th>Name</th><th>Status</th></tr>");
  response.forEach((user) => {
    $("table").append(
      "<tr><td>" + user.name + "</td><td>" + user.state + "</td></tr>"
    );
    $("#name").append(
      "<option value='" + user.name + "'>" + user.name + "</option>"
    );
  });
  console.log(response);
};

$("#abort").click(() => {
  if (xhr) {
    xhr.abort();
    console.log("Download aborted");
  }
});

const getUsers = () => {
  controller = new AbortController();
  xhr = $.ajax({
    type: "GET",
    url: "https://ex2-test.anasskbir.repl.co/users",
    success: importUsers,
  });
};
document.onload = getUsers();
setInterval(getUsers, 4000);
