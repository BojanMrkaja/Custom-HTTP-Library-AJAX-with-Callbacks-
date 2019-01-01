const http = new easyHTTP;

// GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {

//     if (err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

//Create Deta

const data = {
    title: 'Custom post',
    body: 'This is coustom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
        if (err) {
                console.log(err);
            } else {
                console.log(post);
            }
});