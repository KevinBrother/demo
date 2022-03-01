interface ICat {
    name: string
    mimi:() => string
  }
  
  interface IDog {
    name: string
    wang: () => string
  }
  
type TAnimal = ICat | IDog;

function isCat(cat: TAnimal): cat is ICat {
  return (<ICat>cat).mimi !== undefined;
}

function abc(obj:TAnimal) {
  if(isCat(obj)) {
    console.log(obj.mimi());
  }else {
    obj.wang();
  }
}

const obj1: ICat = {
  name: '11',
  mimi: () => {
    return 'mimi';
  }
} 

abc(obj1);