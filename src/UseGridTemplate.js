import '../css/UseGridTemplate.scss';
//import sanitizeHtml from 'sanitize-html';
import CreateDiv from './CreateDiv'
import CreateChildImgDiv from './CreateChildImgDiv';
import data from './usegrid.json'


export default class Grid {

  constructor () {

     this.data = data;

    this.mainContainer = document.createElement ('div');
    this.mainContainer.id = 'mainContainer';
    this.mainContainer.className = 'mainContainer';
    document.body.appendChild (this.mainContainer);


    let divChild = {
      id: ['header', 'gridContainer', 'subgrid', 'footer'],
      class: ['header', 'grid', 'grid', 'footer'],
      text:['PANDAS AND NINJAS RULES THE WORLD','','','InteGranto De Prevoli Estonomi']
    };

    let creatediv = new CreateDiv(this.mainContainer, divChild);


    let CCID = new CreateChildImgDiv ();

    CCID.addChild ({
      array: this.data.twoArray,
      addTo: '#gridContainer'
    });

    CCID.addChild ({
      array: this.data.fourArray,
      addTo: '#subgrid'
    });

  }
}
