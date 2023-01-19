/*Write a JavaScript program to display a random image (clicking on a button) from the following list (Or use your own list (I would prefer memes as most of you did in the first assignment ). 
 */

function showImage(){
    const x = Math.floor(Math.random() * (+5 - +1)) + +1;
    console.log("Random number: "+x);
    switch (x){
        case 1:
            images.innerHTML = '<img src="https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/states-of-a-programmer.png"></img>';
            break;
        case 2:
            images.innerHTML = '<img src="https://tse4.mm.bing.net/th/id/OIP.KcQUEkOQ1LoMDHkMZ-YymwHaHV?pid=ImgDet&rs=1"></img>';
            break;
        case 3:
            images.innerHTML = '<img src="https://th.bing.com/th/id/R.a90de35e794287feda567641d6748768?rik=nLBvBnG%2bbVvpBw&riu=http%3a%2f%2fwww.quickmeme.com%2fimg%2f32%2f32bef8528478f5a7535f14038a0b9e73ab43b9d2cb0d0084b51e7b6266e99dbf.jpg&ehk=ia2Bt7w8DDt6ZA6MNIci2nM%2bipeplhZXhQ5fI2vUb8A%3d&risl=&pid=ImgRaw&r=0"></img>';
            break;
        case 4:
            images.innerHTML = '<img src="https://tse3.mm.bing.net/th/id/OIP.CoaVTi0BtFbzLbSWckc4WwHaJe?pid=ImgDet&rs=1"></img>';
            break;

    }
}