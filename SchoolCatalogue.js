class School {
    constructor(name, level, numberOfStrudents) {
      this._name = name;
      this._level = level;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStrudents() {
      return this._numberOfStrudents;
    }
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStrudents}students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const index = Math.floor(substituteTeachers.length * Math.random());
      substituteTeachers[index];
    }
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
         this.numberOfStrudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.') 
      };
    }
  }
  
  class PrimerySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStrudents, sportsTeams) {
      super(name, 'high', numberOfStrudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      console.log(this._sportsTeams)
    }
  }
  
  const lorraineHansbury = new PrimerySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher([
    'Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'
  ]);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  
  alSmith.sportsTeams;
