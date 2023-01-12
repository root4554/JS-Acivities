const GetData = () => {
  let date = document.querySelector("#date").value;
  let parseDate = date.replace(/-/g, "/");
  let time = document.querySelector("#time").value;
  let hour = time.split(":")[0];

  const data = null;
  const xhr = new XMLHttpRequest();

  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open(
    "GET",
    `https://api.euskadi.eus/euskalmet/readings/forStation/C071/R0BU/measures/measuresForAir/temperature/at/${parseDate}/${hour}`
  );
  xhr.setRequestHeader(
    "Authorization",
    "Bearer eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtZXQwMS5hcGlrZXkiLCJpc3MiOiJJRVMgUExBSUFVTkRJIEJISSBJUlVOIiwiZXhwIjoyMjM4MTMxMDAyLCJ2ZXJzaW9uIjoiMS4wLjAiLCJpYXQiOjE2Mzk3NDc5MDcsImVtYWlsIjoidGljc0BwbGFpYXVuZGkuY29tIn0.PejDLd3Rebw21RCkO3gw2Sz2SGyTW1FNIRBDzllfkPU5pEyaRhKlzMZAMolirsViiwbuMKU4WL8nuX9-CWBQgO75urgz1WZGw_5YgKCiBHe0eT77Lzr0fXdDcyhWgle9QxtUmjZ2WKTvnRgv3vHZuoMf7sRi0E9f8XGHljAopmHz1R5TQN_QXKKkNzCX6kWRR81VbcVzBHj6Gw_c-4UMh-TIZoZbv9aU5uDw7ECWngmvEpfAryM_KQE2IhGRDqcrqVXa3-iDVVKEgIxVqH-plxL1T-eBm9jO7id8oSsnpdiYSmMz_EVYJD4f4nGeZGXvTjzGJwM1jhimLiDoE9-m_A"
  );
  xhr.send(data);
  console.log(parseDate, hour);
};

const btn = document.querySelector("#btn");
btn.addEventListener("click", GetData);

// (LA MANERA CORRECTA) manera mas corta de hacerlo

// fetch(
//   `https://api.euskadi.eus/euskalmet/readings/forStation/C071/R0BU/measures/measuresForAir/temperature/at/${parseDate}/${hour}`,
//   {
//     headers: {
//       Authorization:
//         "Bearer eyJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJtZXQwMS5hcGlrZXkiLCJpc3MiOiJJRVMgUExBSUFVTkRJIEJISSBJUlVOIiwiZXhwIjoyMjM4MTMxMDAyLCJ2ZXJzaW9uIjoiMS4wLjAiLCJpYXQiOjE2Mzk3NDc5MDcsImVtYWlsIjoidGljc0BwbGFpYXVuZGkuY29tIn0.PejDLd3Rebw21RCkO3gw2Sz2SGyTW1FNIRBDzllfkPU5pEyaRhKlzMZAMolirsViiwbuMKU4WL8nuX9-CWBQgO75urgz1WZGw_5YgKCiBHe0eT77Lzr0fXdDcyhWgle9QxtUmjZ2WKTvnRgv3vHZuoMf7sRi0E9f8XGHljAopmHz1R5TQN_QXKKkNzCX6kWRR81VbcVzBHj6Gw_c-4UMh-TIZoZbv9aU5uDw7ECWngmvEpfAryM_KQE2IhGRDqcrqVXa3-iDVVKEgIxVqH-plxL1T-eBm9jO7id8oSsnpdiYSmMz_EVYJD4f4nGeZGXvTjzGJwM1jhimLiDoE9-m_A ",
//     },
//   }
// )
//   .then((res) => res.json())
//   .then(console.log)
//   .catch(console.warn);
// };
