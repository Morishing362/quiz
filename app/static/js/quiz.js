var id = [1, 2, 3, 4, 5, 6, 7, 8]; 
var problem_set = [];
var answer_set = [];
var questions_array = [];

shuffle_array(id);

for (var i=0; i<8; i++){
new_7_id = id.filter(n => n !== id[i]);
new_4_id = random_extract(new_7_id, 3);
new_4_id.push(id[i]);
shuffle_array(new_4_id);
problem_set[i] = new_4_id;
}
console.log(problem_set);

make_answer_set(problem_set);

for (var i=0; i<8; i++){
        questions_array[questions_array.length] = {
            question: words_array[id[i]].en,
            answers: [words_array[problem_set[i][0]].jp,
                      words_array[problem_set[i][1]].jp, 
                      words_array[problem_set[i][2]].jp, 
                      words_array[problem_set[i][3]].jp],
            answer: answer_set[i]
        };
    }
console.log(questions_array)

new Vue({
    el: '#app',
    delimiters: ['[|[', ']|]'],
    data: {
        answers: [],
        questionIndex: 0,
        correctCount: 0,
        questions: questions_array,
    },

    methods: {
        addAnswer: function(index) {
            this.answers.push(index);
            if(this.completed){
                for(var i in this.answers) {
                    var answer = this.answers[i];
                    if(answer == this.questions[i].answer) {
                        this.correctCount++;
                    }
                }
                // alert(correctCount +'問正解です！');
            }
            if(!this.completed) {
                this.questionIndex++;
            }
        }
    },

    computed: {
        currentQuestion: function() {
            return this.questions[this.questionIndex];
        },
        completed: function() {
            return (this.questions.length == this.answers.length);
        }
    }
})

function shuffle_array(array){
    for(var i = array.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
    }
};

function random_extract(array, num) {
    var a = array;
    var t = [];
    var r = [];
    var l = a.length;
    var n = num < l ? num : l;
    while (n-- > 0) {
    var i = Math.random() * l | 0;
    r[n] = t[i] || a[i];
    --l;
    t[i] = t[l] || a[l];
    }
    return r;
};

function make_answer_set(problem) {
    for (var i=0; i<8; i++){
        for (var j=0; j<4; j++){
            if ( problem[i][j] == id[i] ){
                answer_set[i] = j;
            }
        }
    }
};


