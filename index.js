function shout(string) {
    return string.toUpperCase(); // toUpperCase() is an in-bui;t method that makes a string all caps.
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase()){
        return "I can't hear you!";
    }
    else if (string.toUpperCase){
        return "YES INDEED!";
    }

}
sayHiToHeadphonedRoommate(string.toUpperCase());


