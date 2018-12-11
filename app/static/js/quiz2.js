var problem_set = [];
var answer_set = [];
var questions_array = [];

new Vue({
    el: '#app',
    delimiters: ['[|[', ']|]'],
    data: {
        start_index: 1,
        end_index: 1900,
        selected: 0,
        options: [
            { text: '10問', value: 10 },
            { text: '20問', value: 20 },
            { text: '50問', value: 50 },
            { text: '100問', value: 100 },
          ],
        init: false,
        answers: [],
        questionIndex: 0,
        correctCount: 0,
        num_questions: 0,
        questions: questions_array,
    },

    methods: {
        start: function() {
            this.init = true;
            console.log(this.init);
        },

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
        },

        make_question_array: function() {
            var span = this.end_index - this.start_index + 1;

            var id = new Array(span);

            for (var i=1; i<span+1; i++) {
              id[i-1] = i;
            }

            shuffle_array(id);

            id.splice(0, span-this.selected);

            for (var i=0; i<id.length; i++){
                new_id_array = id.filter(n => n !== id[i]);
                new_4_id = random_extract(new_id_array, 3);
                new_4_id.push(id[i]);
                shuffle_array(new_4_id);
                problem_set[i] = new_4_id;
            }

            for (var i=0; i<id.length; i++){
                for (var j=0; j<4; j++){
                    if ( problem_set[i][j] == id[i] ){
                        answer_set[i] = j;
                    }
                }
            }

            for (var i=0; i<id.length; i++){
                questions_array[questions_array.length] = {
                    question: words_array[id[i]].en,
                    answers: [words_array[problem_set[i][0]].jp,
                              words_array[problem_set[i][1]].jp, 
                              words_array[problem_set[i][2]].jp, 
                              words_array[problem_set[i][3]].jp],
                    answer: answer_set[i]
                }
            }
            console.log(questions_array);
        }
    },

    computed: {
        currentQuestion: function() {
            return this.questions[this.questionIndex];
        },

        completed: function() {
            if (this.answers.length == 0){
                return false;
            }
            else {
                return (this.questions.length == this.answers.length);
            }
        },

        init_or_not: function(){
            return this.init;
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
}

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
}



