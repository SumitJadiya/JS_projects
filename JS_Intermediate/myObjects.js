let myYoutubeVideoOne = {
    title : 'Loops in JS',
    videoLength : '15',
    videoDescription : 'This is Video Description and a long one',
    videoCreator : 'Sumit Jadiya'
}

let myYoutubeVideoTwo = {
    title : 'Infinite Loops in JS',
    videoLength : '10',
    videoDescription : 'This is Video Description and a long one',
    videoCreator : 'Sumit Jadiya'
}

console.log(`New Video on ${myYoutubeVideoOne.title} by author ${myYoutubeVideoOne.videoCreator}`);

// change object values
let changeVideoLength = function (myObject) {
    return {
        formatOne : `Time of this video is : ${myObject.videoLength}`,
        formatTwo : `Time of this video is : ${myObject.videoLength + 1}`
    }    
}

console.log(changeVideoLength (myYoutubeVideoOne).formatOne );