var Mocha = require("mocha");
var assert = require("assert");
const { Agent } = require("http");
var mocha = new Mocha();

mocha.suite.emit("pre-require", this, "solution", mocha);

const people = [
  {
    name: "Bob",
    age: 31,
    interests: ["skiing", "running"],
  },
  {
    name: "Alice",
    age: 33,
    interests: ["movies", "swimming"],
  },
  {
    name: "Carol",
    age: 28,
    interests: ["running", "gaming", "swimming"],
  },
];

describe("getNamesOfPeopleOver", () => {
  const getNamesOfPeopleOver = (limit) => {
    let returendVal = people.filter(ele=> ele.age>limit)
    return returendVal.map(ele => {return ele.name})
     
    // Implement me
  };

  it("returns an array of the names of all people over the given limit", () => {
    assert.deepStrictEqual(getNamesOfPeopleOver(30), ["Bob", "Alice"]);
  });
});

describe("getSumOfAllAges()", () => {
  const getSumOfAllAges = () => {
    let x = 0 
      for(let ele in people) {
        x += people[ele].age
      }

      return x
  };

  it("calculates the sum of all ages", () => {
    assert.strictEqual(getSumOfAllAges(), 92);
  });
});

describe("getInterests", () => {
  const getInterests = () => {
    // Implement me'
    let interestsArr = []
    for (let interest in people ) {
      let x = people[interest].interests
      interestsArr.push(...x)
    }
    return [...new Set(interestsArr)].sort()
  };

  it("returns all unique interests, sorted incrementally", () => {
    assert.deepStrictEqual(getInterests(), [
      "gaming",
      "movies",
      "running",
      "skiing",
      "swimming",
    ]);
  });
});

describe("zipNamesAndInterests", () => {
  const zipNamesAndInterests = () => {
    return Object.fromEntries(people.map(p => [p.name, p.interests]))

  };

  it("returns and object with names as keys and interests as values", () => {
    var expected = {
      Bob: ["skiing", "running"],
      Alice: ["movies", "swimming"],
      Carol: ["running", "gaming", "swimming"],
    };

    assert.deepStrictEqual(zipNamesAndInterests(), expected);
  });
});


const graph = {
  a: [
    {
      b: 1,
      c: 2,
    },
    3,
    4,
  ],
  d: {
    e: [
      5,
      6,
      {
        f: 7,
      },
    ],
  },
};


const sumNumbers = (obj) => {
  let sum = 0;
  const string = JSON.stringify(obj).replace(/\D/g,'')
  return [...string].reduce((currSum, a) => currSum + parseInt(a), 0)  
};


describe("sumNumbers", () => {
  it("returns the sum of all numbers found in the object", () => {

    const sum = sumNumbers(graph);

    assert.equal(sum, 28);
  });
});

mocha.run();
