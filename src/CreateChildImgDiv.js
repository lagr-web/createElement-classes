export default class CreateChildImgDiv {

  constructor() {

    this.randomArray = [-1, 3, -2, 2, 1, -4, 4, 0.5,-0.5,-3,2.5,-2.5];

  }


  addChild(items) {

    items.array.forEach((item, index) => {

      //const rnd = this.randomArray[Math.floor(Math.random() * this.randomArray.length)];
       
        console.log(this.shuffleArray(this.randomArray) + 'deg');


      this.section = document.createElement('div');
      this.section.style.transform = `rotate(${this.shuffleArray(this.randomArray[index]) + 'deg'})`;
      let img = document.createElement('img');
      img.src = item;
      this.section.appendChild(img);
      document.querySelector(items.addTo).appendChild(this.section);

    });

  }

  shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

}//END CLASS
