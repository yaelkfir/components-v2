import {Injectable} from '@angular/core';
import {KeyModel} from '../../common/table-v1/keyModel';
import {SearchService} from '../../service/movie.service';

@Injectable()
export class MasterTableService {
  keys: KeyModel[] = [];

  constructor(private _api: SearchService ) {
  }

  logThis() {
  }

  handelKeys(keys: string[]) {
    keys.forEach(key => this.setKey(key));
    return this.keys;
  }

  setKey(key: string) {
    const newKey = new KeyModel(key);

    if (key === 'id') {
      newKey['input'] = 'none';
    }
    if (key === 'title' || key === 'original_title' ) {
      newKey['input'] = 'text';
    }
    if (key === 'overview') {
      newKey['input'] = 'textarea';
      newKey['keyClass'] = 'table overview';
    }
    if (key === 'poster_path') {
      newKey['input'] = 'img';
      newKey['keyClass'] = 'table img poster';
    }
    if (key === 'backdrop_path') {
      newKey['input'] = 'img';
      newKey['keyClass'] = 'table img backdrop';
    }
    if (key === 'release_date') {
      newKey['input'] = 'date';
    }
    if (key === 'popularity' || key === 'vote_average' || key === 'vote_count') {
      newKey['input'] = 'number';
    }
    if (key === 'original_language') {
      newKey['input'] = 'select';
    }
    if (key === 'adult' || key === 'video') {
      newKey['input'] = 'boolean';
    }
    this.convertToKey(newKey);
  }

  convertToKey(key: KeyModel) {
    this.keys = [...this.keys, key];
  }
}
