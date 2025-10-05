export class Weight {
    //construtor
    constructor(
        private _scores:Array<number>
    ) {
        this._scores = _scores;
    }

    //getters
    get scores():Array<number> {
        return this._scores;
    }
};

export class Answer {
    //construtor
    constructor(
        private _name:string,
        private _answers:Array<string>
    ) {
        this._name = _name,
        this._answers = _answers
    }

    //getters
    get name():string {
        return this._name;
    }

    get answers():Array<string>{
        return this._answers;
    }
};

export class Exam {
    //construtor
    constructor(
        private _weight:Weight,
        private _answer:Answer,
        private _answers:Array<Answer> = []
    ) {
        this._weight = _weight,
        this._answer = _answer
    }

    public add(exam:Answer) {
        this._answers.push(exam);
    }

    //método privado para calcular a nota de uma prova
    private calculateGrade(exam: Answer): number {
        let grade = 0;

        exam.answers.forEach((question, index) => {
            if (question === this._answer.answers[index]) {
                const score = this._weight.scores[index];
                if (score !== undefined) {
                    grade += score;
                }
            }
        });

        return parseFloat(grade.toFixed(1));
    }

    public avg():number {
        let avg = 0;

        this._answers.forEach( (studentAnswer) => {
            avg += this.calculateGrade(studentAnswer);
        });

        return parseFloat( (avg/this._answers.length).toFixed(1) );
    }

    public min():number {
        let min = 9999999999999999999999999999;

        this._answers.forEach( (studentAnswer) => {
            if( this.calculateGrade(studentAnswer) < min ) {
                min = this.calculateGrade(studentAnswer);
            }
        });
        
        return min;
    }

    public max():number {
        let min = 0;

        this._answers.forEach( (studentAnswer) => {
            if( this.calculateGrade(studentAnswer) > min ) {
                min = this.calculateGrade(studentAnswer);
            }
        });
        
        return min;
    }

    public lt(num:number):number {
        let cont = 0;
        
        this._answers.forEach( (studentAnswer) => {
            if( this.calculateGrade(studentAnswer) < num ) {
                cont += 1;
            }
        });
        
        return cont;
    }

    public gt(num:number):number {
        let cont = 0;
        
        this._answers.forEach( (studentAnswer) => {
            if( this.calculateGrade(studentAnswer) > num ) {
                cont += 1;
            }
        });
        
        return cont;
    }
};