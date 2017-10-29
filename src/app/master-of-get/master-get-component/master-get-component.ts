import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Api} from '../../service/api.service';
import {Color} from './color.interface';
// import {ColorfulImgDirective} from "../../colorfull-img.directive";

@Component({
  selector: 'app-full-name-inputs',
  templateUrl: './master-get-component.html',
  styleUrls: ['./master-get-component.scss']
})


export class MasterGetComponent implements OnInit {

  getlist = ['Space',
    'Earth',
    'Sun',
    'moon',
    'Saturn',
    'Mars',
    'Neptune',
    'Space',
    'Space',
    'Earth',
    'Sun',
    'moon',
    'Saturn',
    'Mars',
    'Neptune',
    'Space',
    'Earth',
    'Sun',
    'moon',
    'Saturn',
    'Mars',
    'Neptune',
    'star',
    'gun',
    'fun',
    'number',
    'best',
    'fast',
    'hit',
    'batman',
    'hero',
    'Earth',
    'Sun',
    'moon',
    'Saturn',
    'Mars',
    'Neptune',
    'Space',
    'Space',
    'Earth',
    'Sun',
    'moon',
    'Saturn',
    'Mars',
    'Neptune',
    'Space',
    'Earth',
    'Sun',
    'moon',
    'Saturn',
    'Mars',
    'Neptune',
    'star',
    'gun',
    'fun',
    'number',
    'best',
    'fast',
    'hit',
    'batman',
    'hero'
  ];
  results = [];
  colors: Color[];
  colorI = -1;
  colorIR: number;
  isDone = false;

  constructor(private api: Api) {
  }

  ngOnInit() {
    this.colors = [];
    this.color(0.5, 0.95);
    this.forkJoinGet();
  }

  forkJoinGet() {
    const observableArr = [];
    this.getlist.forEach((q) => {
      console.log('push to forkJoin Observable');
      observableArr.push(this.api.getMovies(q));
    });

    Observable.forkJoin(observableArr).subscribe((data) => {
      data.map(m => this.results = [...m['results'], ...this.results]);
      // console.log(this.results, 'results works!');
      this.colorIR = this.results.length;
      let tempRow: number;

      this.results.forEach((res, i: number) => {
        const temp = this.color(0.5, 0.95);
        const tempI = parseInt((i).toFixed(0), 10);
        // const num = (i / 12 * 100).toFixed(0);
        if (tempI % 12 === 0) {
          tempRow = (tempI / 12) + 1;
        }

        const toPush = {
          color: temp,
          row: tempRow
        };
        // console.log(toPush);
        this.colors.push(toPush);
      });
      //
      setInterval(() => {
        // If you wanted to get between 1 and 6, you would calculate:

      //
      //   const num = Math.floor(Math.random() * (this.results.length));
        // const targetRow = this.colors.log((color) => color.row === num);
        // const color = this.color();
        // targetRow.forEach((target) => {
        //   const index = this.colors.indexOf(target);
        //   this.colors[index].color = this.color();
        // })

        // this.colors[num].color = this.color();

        if (this.colorI === this.results.length - 1) {
          this.colorI = 0;
        }
        if (this.colorIR === 0){
          this.colorIR = this.results.length;
        }
        this.colorI = this.colorI + 1;
        this.colorIR = this.colorIR - 1;

        this.colors[this.colorI].color = this.color(0.7, 0.95);
        this.colors[this.colorIR].color = this.color(0.7, 0.95);
      }, 10);

      this.isDone = true;
    })
  }

  color(s, v) {
    const hue = Math.random();
    const color = this.hsvToRgb(hue, s, v);
    return `rgba(${color[0]},${color[1]},${color[2]}, 0.6)`
  }

  /*
  i want h between 230 - 250
  i want s to be
   */

  hsvToRgb(h, s, v) {

    const hI = Math.floor(h * 6);
    const f = h * 6 - hI;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    let r = 255;
    let g = 255;
    let b = 255;

    switch (hI) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;
      case 1:
        r = q;
        g = v;
        b = p;
        break;
      case 2:
        r = p;
        g = v;
        b = t;
        break;
      case 3:
        r = p;
        g = q;
        b = v;
        break;
      case 4:
        r = t;
        g = p;
        b = v;
        break;
      case 5:
        r = v;
        g = p;
        b = q;
        break;
    }
    return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)];
  };

  handelImg(e) {
    console.log(e, 'e')
  }
}

/*
this, function () {

  var RColor = function () {
      this.hue = Math.random(),
      this.goldenRatio = 0.618033988749895;
      this.hexwidth = 2;
  };


  RColor.prototype.padHex = function (str) {
      if (str.length > this.hexwidth) return str;
      return new Array(this.hexwidth - str.length + 1).join('0') + str;
  };

  RColor.prototype.get = function (hex, saturation, value) {
      this.hue += this.goldenRatio;
      this.hue %= 1;
      if (typeof saturation !== "number") saturation = 0.5;
      if (typeof value !== "number") value = 0.95;
      var rgb = this.hsvToRgb(this.hue, saturation, value);
      if (hex) return "#" + this.padHex(rgb[0].toString(16)) + this.padHex(rgb[1].toString(16)) + this.padHex(rgb[2].toString(16));
      else return rgb;
  };

  return RColor;
 */
/*
# use golden ratio
golden_ratio_conjugate = 0.618033988749895
h = rand # use random start value
gen_html {
h += golden_ratio_conjugate
h %= 1
hsv_to_rgb(h, 0.5, 0.95)
}




    const offset = Math.Random.NextFloat();

  for (int i = 0; i < n; i++)
  color[i] = gradient.GetColor(offset + (0.618033988749895f * i) % 1);


  function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

function setRandomColor() {
$("#colorpad").css("background-color", getRandomColor());
}
 */


/*

const example = Rx.Observable
  .zip(
    sourceOne,
    sourceTwo.delay(1000),
    sourceThree.delay(2000),
    sourceFour.delay(3000)
  );
//output: ["Hello", "World!", "Goodbye", "World!"]
const subscribe = example.subscribe(val => console.log(val));


 buildManyInputs() {
    this.manyInputsArr.forEach(str => this.manyInputsObj[str] = '');
  }

  handelInputs(event, input: string) {
    if (input === 'one') {
      this.inputOne$.next(event);
    } else if (input === 'two') {
      this.inputTwo$.next(event);
    } else {
      this.freeStyleInputs(event['q'], input)
    }
  }

  merageInputs() {
    this.inputOne$.mergeMap((value) => {
      return this.inputTwo$.map((value2) => {
        return `${value['q']} ${value2['q']}`
      })
    }).subscribe((data) => {
      this.twoInputsValue = data;
    })
  }

  freeStyleInputs(event, i: string) {
    this.manyInputsObj[i] = event;
    let value = '';
    for (const k in this.manyInputsObj) {
      if (this.manyInputsObj.hasOwnProperty(k)) {
        value = `${value} ${this.manyInputsObj[k]}`
      }
    }
    this.manyInputsValue = value;
  }

 */

