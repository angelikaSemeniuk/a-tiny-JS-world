/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: _put repo URL here_
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here

const dog = {
    species: "dog",
    name: "Rex",
    gender: "male",
    legs: 4,
    hands: 0,
    saying: "woof-woof!",
    func1: printObjectData,
    friends: ["Jenny","John"]
};

const cat = {
    species: "cat",
    name: "Tom",
    gender: "male",
    legs: 4,
    hands: 0,
    saying: "mmaayy-mmaayy!",
    func2: printObjectData,
    friends: ["Jenny","John", "Rex"]
};

const woman = {
    species: "woman",
    name: "Jenny",
    gender: "female",
    legs: 2,
    hands: 2,
    saying: "Hello, world!",
    func3: printObjectData,
    friends: ["John", "Tom", "Rex"]
};

const man = {
    species: "man",
    name: "John",
    gender: "male",
    legs: 2,
    hands: 2,
    saying: "Hello, world!",
    func4: printObjectData,
    friends:[]
};

const womanCat = cat;
console.log("Woman-cat saying: " + womanCat.saying);




// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */
function printObjectData () {
    print(this.species + "; " + this.name + "; " + this.gender + "; " + this.legs + "; " + this.hands + "; " + this.saying + this.friends);
}

dog.func1();
cat.func2();
woman.func3();
man.func4();
/*
print(dog.species + "; " + dog.name + "; " + dog.gender + "; " + dog.legs + "; " + dog.hands + "; " + dog.saying);
print(cat.species + "; " + cat.name + "; " + cat.gender + "; " + cat.legs + "; " + cat.hands + "; " + cat.saying);
print(woman.species + "; " + woman.name + "; " + woman.gender + "; " + woman.legs + "; " + woman.hands + "; " + woman.saying);
print(man.species + "; " + man.name + "; " + man.gender + "; " + man.legs + "; " + man.hands + "; " + man.saying);*/





/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */


