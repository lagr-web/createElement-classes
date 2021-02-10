export default class CreateDiv {

  constructor (main, mainDivNames) {

    for (let i = 0; i < mainDivNames.id.length; i++) {
      this.subs = document.createElement ('div');
      this.subs.id = mainDivNames.id[i];
      this.subs.className = mainDivNames.class[i];
      main.appendChild (this.subs);

      if (mainDivNames.text[i] != '') {
        let text = document.createTextNode (mainDivNames.text[i]);
        document.querySelector ('#' + mainDivNames.id[i]).appendChild (text);
      }

    }
    
  }
}
