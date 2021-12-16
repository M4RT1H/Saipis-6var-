var btn = document.getElementById('add');

btn.addEventListener('click', () => {
    let MainDiv = document.getElementById('MainDiv');
    let Img = MainDiv.querySelectorAll('img');
    console.log(Img);

    for (let i = 0; i < Img.length; i++) {
        if (i % 2 != 0) {

            Img[i].setAttribute('class', 'democlass')
        }
    }
})
