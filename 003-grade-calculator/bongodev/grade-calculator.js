function loginUser(email, password){
    return new Promise((resolve, reject)=>{
        resolve({email})
    })
}

function getUserVideos(email){
    return new Promise((resolve, reject)=>{
        resolve(['video 1', "video 2"])
    })
}

function getVideosTitles(videos){
    return new Promise((resolve, reject)=>{
        resolve(['title 1', "title 2"])
    })
}


// loginUser("win.com", "than")
// .then(result => getUserVideos(result))
// .then(result => getVideosTitles(result))
// .then(result => console.log(result))

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p1 process")
    }, 1000)
})
const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("p1 failed")
    }, 500)
})
const p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("p1 process")
    }, 3000)
})

Promise.race([p1, p2, p3])
.then(result => console.log(result))
