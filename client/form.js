//code from client
// let callback = function() {
//   let file = [];
//   const submit = document.querySelector('#sub');
//   //get file
//   document.querySelector('#fileinput').addEventListener('change', function() {
//     console.log(this.files[0]);
//     file = this.files[0];
//   });


//   submit.addEventListener('click', (e) => {
//     e.preventDefault();

//     //create forData object
//     let formData = new FormData();
//     formData.append('file', file);

//     const form = document.querySelector('#form');
//     console.log(file, 'f')
//     fetch("/post", {
//         method: "POST",
//         body: formData,
//       })
//       .then(function(result) {
//         if (result.status === 200) {
//           //redirect to json
//           window.location = result.url;
//         }
//       }).catch(err => {
//         console.log(err);
//       });
//   })
// }

// //check DOM is ready
// if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
//   callback();
// } else {
//   document.addEventListener("DOMContentLoaded", callback);
// }

