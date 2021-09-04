// let   a=20;

// let promise=new Promise((resolve,reject)=>
// {
//     if(a==20)
//     {
//         resolve("Hello Jspiders")
//     }
//     else
//     {
//         reject("Bye Bye Jspiders")
//     }
// });

// // console.log(promise);

// promise.
// then(response=>
// {
//     // console.log(response);
//     return response+" Rajajinagar"
// }).then(res=>
//     {
//         console.log(res);
//     })
// .catch(err=>
//     {
//         console.log(err);
//     })

let githubusers=fetch("https://api.github.com/users");

let gitUsers=document.getElementById("gitUsers");
// console.log(gitusers);

githubusers.
then((users)=>
{
    // console.log(users);

    return users.json();
}).
then((users)=>
{
    // console.log(users);

    for (const user of users) {
        // let h1=document.createElement("h1");
        // h1.append(user.login);
        // gitUsers.append(h1)

        let img=document.createElement("img");
        img.src=user.avatar_url;
        img.height=200;
        img.width=200;

        gitUsers.append(img)
        // console.log(user);
    }
   
}).
catch(err=>
    {
        console.log(err);
    })