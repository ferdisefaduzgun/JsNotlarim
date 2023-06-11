//örnek
const bilgiler = {
    'ad': 'sefa',
    'soyad': 'düzgün',
    'yas': '21',
    'isMarried': false,
    'skills': [
        'Html',
        'Css',
        'Js'
    ],
    'siblings': [
        {
            'name':'Ece'
        }
    ],
    getFullName: function(){
        return `${this['ad']} ${this['soyad']}`
    }
}

console.log(bilgiler.isMarried ? 'Evli' : 'Bekar');
console.log(bilgiler['siblings']);

console.log(bilgiler.getFullName());


//objeyi kopyalama
const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)

//keyleri çekme 
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']


//values/değerleri kopyalama çekme
const values = Object.values(copyPerson)
console.log(values)

//hem key hemde değeleri çekme kopyalama
const entries = Object.entries(copyPerson)
console.log(entries)


//bir objede var mı yokmu kontrol etme
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))