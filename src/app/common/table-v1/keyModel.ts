export class KeyModel {

  keyName: string;
  displayName?: string;
  keyClass?: string;
  keyMultiValue?: string[];
  input?: string;
  validators?: any[];
  options?: any[];
  boolean?: boolean;
  unit?: string;

  constructor(keyName: string) {
    this.keyName = keyName;
  }

  empty() {
    const key = {
      keyName: 'none',
      input: 'none'
  };
    return key;
  }

  newKey(obj: Object) {
    const isObject = obj.hasOwnProperty('keyName');
    isObject === true ? Object.assign(this, obj) : Object.assign(this, this.empty());
    return this;
  }

  // getBackgroungImg(){
  //
  // }

}
