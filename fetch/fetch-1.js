var req = new XMLHttpRequest();

req.open('GET', 'https://reqres.in/api/users', true);
req.send(null);

req.onreadystatechange = function(state) {
  if (req.readyState === 4) {
    var res = req.response;
    var resJson = JSON.parse(res);
    console.log(resJson);
  }
};
