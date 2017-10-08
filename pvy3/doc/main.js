var result = {
    progress: 0,
    score: 0,
    blocks: []
}

$(function() {
    var main = $("main").clone();
    console.log(main);
    var time = 0 , startTime = 0;

    function carouselNormal(obj) {
        $(obj).slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
        });        
    }
    
    function gauge(id, data) {
        var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.4, // The line thickness
        radiusScale: 0.9, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.04, // The thickness
            color: '#666' // Fill color
        },
        percentColors: [[0.0, "#ff0000"], [0.39, "#ff0000"], [0.4, "#f9c802"], [0.54, "#f9c802"],[0.55, "#02c8f9"], [0.69, "#02c8f9"], [0.9, "#a9d70b"]],
        staticLabels: {
            font: "11px sans-serif",  // Specifies font
            labels: [40, 55, 70, 85],  // Print labels at these values
            color: "#666",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        },        
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true     // High resolution support
        };
        var target = document.getElementById(id); // your canvas element
        var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
        gauge.maxValue = 100; // set max gauge value
        gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
        gauge.animationSpeed = 20; // set animation speed (32 is default value)
        gauge.set(data); // set actual value        
    }
    
    function generateGauge(id, data){
        console.log(id);   
        c3.generate({
            bindto: id,
            data: {
                    columns: [
                        ['score', data]
                    ],
                    type: 'gauge',
                    color: function (color, d) {return d.index === 0 ? "#fff" : "#f000";},                    
                },
                gauge: {
                    label: {
                        format: function(value, ratio) {
                            value += ' %'; 
                            return value;
                        },
                        show: false // to turn off the min/max labels.
                    },
            //    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
            //    max: 100, // 100 is default
                    units: ' %',
                    width: 50 // for adjusting arc thickness                    
                },
                color: {
                    pattern: ['#FF0000', '#00C6F6', '#60B044'], // the three color levels for the percentage values.
                    threshold: {
            //            unit: 'value', // percentage is default
            //            max: 200, // 100 is default
                        values: [40, 55, 70, 85]
                    }
                },
                size: {
                    height: 100,
                    width: 200
                }
        });
    }

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    
    class TBlock {
        constructor (obj, options) {
            this.obj = obj;
            this.options = options;
            this.nodes = new Map();
            this.id = $(obj).attr('id');
            this.time = 0;
        }        

        init() {
            let nodes = this.nodes;
            let selectlist = [];
            $(this.obj).find(".tnode.tselect").each(function(key, element){
                selectlist.push($(element).text());
            });
            $(this.obj).find(".tnode").each(function(key, element){
                if ($(element).hasClass('tinput'))
                    nodes.set(key, new TInput($(element)));
                if ($(element).hasClass('tselect'))
                    nodes.set(key, new TSelect($(element), shuffle(selectlist.slice())));                
                if ($(element).hasClass('tsort'))
                    nodes.set(key, new TSort($(element)));                
                if ($(element).hasClass('tcheck'))
                    nodes.set(key, new TCheck($(element)));                
                if ($(element).hasClass('tcarousel'))
                    nodes.set(key, new TCarousel($(element)));                
                if ($(element).hasClass('tcrosswords'))
                    nodes.set(key, new TCrosswords($(element)));                
            });
            this.nodes = nodes;

            let dashboard = `<div class="dashboard">
                            <div class="roll text-center"><span class="glyphicon glyphicon-option-horizontal"></span></div>
                            <div class="jumbotron">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-4 col-sm-6 control-panel"><button class="btn btn-primary tvalidate">Validate</button></div>
                                        <div class="col-lg-1 col-md-2 col-sm-3 time-panel"></div>
                                        <div class="col-lg-1 col-md-2 col-sm-3 score-panel"></div>
                                        <div class="col-lg-2 col-md-2 col-sm-3 gauge-panel"></div>
                                        <div class="col-lg-1 col-md-2 col-sm-3 percent-panel"></div>
                                    </div>
                                </div>
                             </div>
                            </div>`;
            $(this.obj).find("footer").append(dashboard);
        }

        activate () {
            let maxscore = 0;
            this.nodes.forEach(function(node){
                node.activate();
                maxscore += node.getPoints();
            });
            this.maxscore = maxscore;
            startTime = performance.now();
            let obj = this.obj;
            this.timer = setInterval(function() {
                time = performance.now() - startTime;
                $(obj).find(".dashboard").find(".time-panel").html(`<p class="label"><span class="glyphicon glyphicon-time"></span> Time</p><h3>${moment(new Date(time)).format('mm:ss')}</h3>`)
            }, 1000);
        }

        validate () {
            let block = {nodes:[]};
            let score = 0;
            let nodeRes;
            this.nodes.forEach(function(node){
                nodeRes = node.validate();
                block.nodes.push(nodeRes);
                node.showResult(nodeRes); 
                score += node.getScore();
            });
            let percent = (score / this.maxscore * 100).toFixed(1);
            let id = this.id;
            clearInterval(this.timer);
            this.time = time;
            //$(this.obj).find(".time-panel").append(`<svg id="fgtime${id}" width="100%"></svg>`);
            $(this.obj).find(".dashboard").find(".score-panel").append(`<p class="label"><span class="glyphicon glyphicon-equalizer"></span> Points</p><h3>${score}</h3>`);
            /*$(this.obj).find(".percent-panel").append(`<p class="label">Score</p><svg id="fg${id}" width="100%" height="100%"></svg>`);
            let config1 = liquidFillGaugeDefaultSettings();
                config1.circleColor = "#FF7777";
                config1.textColor = "#FF4444";
                config1.waveTextColor = "#f66";
                config1.waveColor = "#FFDDDD";
                config1.circleThickness = 0.1;
                config1.textVertPosition = 0.5;
                config1.waveAnimateTime = 1000;
            loadLiquidFillGauge("fg"+id, percent, config1);*/
           // loadLiquidFillGauge("fgtime"+id, this.time.toLocaleString(), config1);
            this.score = score.toFixed(1);
            console.log(moment(new Date(this.time)).format('mm:ss'));
            //$(this.obj).find(".percent-panel").append(`<p class="label">Score</p><div id="gg${id}"></div>`);
            //generateGauge('#gg'+this.id,percent);
            $(this.obj).find(".dashboard").find(".percent-panel").append(`<p class="label"><span class="glyphicon glyphicon-scale"></span> Score</p><h3>${percent} %</h3>`);
            $(this.obj).find(".dashboard").find(".gauge-panel").append(`<canvas id="gg${id}"></canvas><h3 class="label">${percent} %</h3>`);
            gauge('gg'+this.id,percent);
            block.score = this.score;
            block.time = this.time;
            result.blocks.push(block);
            console.log(result);
        }

        toString() {
            return this.id;
        }
    }

    class TNode {
        constructor (obj) {
            this.obj = obj;
            this.score = 0;
            this.points = 1;
        }

        activate() {

        }

        validate() {

        }

        showResult() {

        }
        
        getPoints() {
            return this.points;
        }
        
        getScore() {
            return this.score;
        }

        setStartTime(time) {
            this.startTime = time;
        }
    }

    class TInput extends TNode {
        constructor (obj) {
            super(obj);
            this.points = $(obj).data('points') ? $(obj).data('points') : 2;
        }

        activate() {
            this.value = $(this.obj).text();
            let replaceText = `<input type="text">`;
            $(this.obj).html(replaceText);
        }

        validate() {
            let nodeResult = {};
            nodeResult.type = "TInput";
            nodeResult.points = this.points;
            nodeResult.correct = this.value;
            nodeResult.answer = $(this.obj).children("input").val();
            let value = this.value;
            let score = this.points;
            if ($(this.obj).children("input").val() === this.value) {
               // $(this.obj).html(`<ins>${value}</ins><sup>${score}</sup>`);
            } else {
               // let inputvalue = $(this.obj).children("input").val().length === 0 ? "[nevyplněno]" : $(this.obj).children("input").val();
                score = 0;
                //$(this.obj).html(`<del data-toggle="tooltip" data-placement="top" title="${value}">${inputvalue}</del><sup>${score}</sup>`);
            }
            this.score = score;
            nodeResult.score = this.score;
            return nodeResult;
        }        

        showResult(nodeData) {
            if (nodeData.correct === nodeData.answer) {
                $(this.obj).html(`<ins>${nodeData.correct}</ins><sup>${nodeData.score}</sup>`);
            } else {
                nodeData.answer = nodeData.answer.length === 0 ? "[nevyplněno]" : nodeData.answer;
                $(this.obj).html(`<del data-toggle="tooltip" data-placement="top" title="${nodeData.correct}">${nodeData.answer}</del><sup>${nodeData.score}</sup>`);
            }
        }        
    }

    class TSelect extends TNode {
        constructor (obj, list) {
            super(obj);
            this.list = list;
            this.points = $(obj).data('points') ? $(obj).data('points') : 1;
        }

        activate() {
            this.value = $(this.obj).text();
            let options = "";
            this.list.forEach(v => {options += `<option>${v}</option>`});
            let replaceText = `<select>${options}<select>`;
            $(this.obj).html(replaceText);            
        }

        validate() {
            let nodeResult = {};
            nodeResult.type = "TSelect";
            nodeResult.points = this.points;
            nodeResult.correct = this.value;
            nodeResult.answer = $(this.obj).children("select").val()
            let value = this.value;
            let score = this.points;
            if ($(this.obj).children("select").val() === this.value) {
//                $(this.obj).html(`<ins>${value}</ins><sup>${score}</sup>`);
            } else {
                score = 0;
//                $(this.obj).html(`<del>${$(this.obj).children("select").val()}</del> <ins>${value}</ins><sup>${score}</sup>`);
            }
            this.score = score;
            nodeResult.score = this.score;
            return nodeResult;
        }

        showResult(nodeData) {
            if (nodeData.correct === nodeData.answer) {
                $(this.obj).html(`<ins>${nodeData.correct}</ins><sup>${nodeData.score}</sup>`);
            } else {
                $(this.obj).html(`<del data-toggle="tooltip" data-placement="top" title="${nodeData.correct}">${nodeData.answer}</del><sup>${nodeData.score}</sup>`);
            }
        }                
    }


    class TSort extends TNode {
        constructor (obj) {
            super(obj);
            let list = [];
            $(obj).find('.ui-state-default').each(function(key,element) {
                list.push($(element));
            });
            this.list = list;            
            this.randlist = shuffle(list.slice());
            this.points = $(obj).data('points') ? $(obj).data('points') : list.length;
        }

        activate() {
            $(this.obj).find('.ui-state-default').remove();            
            $(this.obj).append(this.randlist);
            $(this.obj).sortable({
                placeholder: "ui-state-highlight"
            });
            $(this.obj).disableSelection();            
        }

        validate() {
            let correct = 0;
            let wrong = 0;
            let list = this.list;
            let nodeResult = {};
            nodeResult.type = "TSort";
            nodeResult.points = this.points;
            nodeResult.correct = [];
            nodeResult.answer = [];
            
            $(this.obj).find('.ui-state-default').each(function(key,element) {
                nodeResult.correct.push($(list[key]).html());
                nodeResult.answer.push($(element).html());
                if ($(element).html() === $(list[key]).html()) {
//                    $(element).css({"background-color":"green"});
                    correct++;
                } else {
//                    $(element).css({"background-color":"red"});
                    wrong++;
                }
            }); 

            this.score = Math.floor((correct / (wrong + correct)) * this.points);  
            $(this.obj).append(`<div>Points: ${this.score}</div>`);
            nodeResult.score = this.score;                      
            return nodeResult;
        }

        showResult(nodeData) {
            $(this.obj).find('.ui-state-default').each(function(key,element) {
                
                if (nodeData.answer[key] === nodeData.correct[key]) {
                    $(element).html(`<ins>${nodeData.correct[key]}</ins>`);
                    $(element).css({"background-color":"green"});
                } else {
                    $(element).html(`<del data-toggle="tooltip" data-placement="top" title="${nodeData.correct[key]}">${nodeData.answer[key]}</del>`);
                    $(element).css({"background-color":"red"});
                }
            }); 
        }                        
    }
    
    class TCheck extends TNode {
        constructor (obj) {
            super(obj);
            let list = [];
            let points = 0;
            $(obj).find('.item').each(function(key,element) {
                if ($(element).hasClass("check")) {
                    list.push(key);
                    points++;                    
                }    
            });
            this.list = list.slice();          
            this.points = $(obj).data('points') ? $(obj).data('points') : points;
        }

        activate() {
            $(this.obj).find('.item').removeClass("check").prepend(`<input type="checkbox"> `);            
        }

        validate() {
            let correct = 0;
            let wrong = 0;
            let list = this.list;
            let nodeResult = {};
            nodeResult.type = "TCheck";
            nodeResult.points = this.points;
            nodeResult.correct = this.list;
            nodeResult.answer = [];
            
            $(this.obj).find('.item').each(function(key,element) {
                if ((list.indexOf(key)>-1 && $(element).find('[type=checkbox]')['0'].checked) || (list.indexOf(key)<0 && !$(element).find('[type=checkbox]')['0'].checked)) {
                    $(element).css({"background-color":"green"});
                    correct++;
                    nodeResult.answer.push(key);
                } else {
                    $(element).css({"background-color":"red"});
                    wrong++;
                }
            });
            this.score = Math.floor((correct / (wrong + correct)) * this.points);
            $(this.obj).append(`<div>Points: ${this.score}</div>`);
            nodeResult.score = this.score;                      
            return nodeResult;
        }
    }

    class TCarousel extends TNode {
        constructor (obj) {
            super(obj);
            let check = 0;
            let points = 1;
            $(obj).children().each(function(key,element) {
                if ($(element).hasClass("check")) {
                    check = key;
                }    
            });
            this.check = check;          
            console.log($(this.check));
            this.points = $(obj).data('points') ? $(obj).data('points') : points;
        }

        activate() {
            console.log($(this.obj));
            $(this.obj).children().removeClass("check");
            carouselNormal($(this.obj));
        }

        validate() {
            console.log($(this.obj).find('.slick-active').data('slick-index'));
            if ($(this.obj).find('.slick-active').data('slick-index') == this.check) {
                $(this.obj).css({"background-color":"green"});
                this.score = this.points;
            } else {
                $(this.obj).css({"background-color":"red"});
                this.score = 0;
            }
            $(this.obj).append(`<div>Points: ${this.score}</div>`);
        }
    }

    
    class TCrosswords extends TNode {
        constructor (obj) {
            super(obj);
            let points = 0;
            let words = [];
            let prefix = 0;
            let sufix = 0;
            $(this.obj).find("li").each(function(key,element){
                points++;
                words.push($(element).find("mark").text().split('|'));
                if (words[key][0].length > prefix) prefix = words[key][0].length;
                if (words[key][2].length > sufix) sufix = words[key][2].length;
            });
            this.points = points;
            this.words = words;
            this.prefix = prefix;
            this.sufix = sufix;
            $(this.obj).find("mark").remove();
        }

        activate() {
            $(this.obj).find("ol").hide();
            let rows = `<table class="table table-bordered">`;
            let prefix = this.prefix;
            let sufix = this.sufix;
            let questions = [];
            $(this.obj).find("li").each(function(key,element){
                questions.push($(element).html());
            });
            this.words.forEach(function(word,index){
                let w = word.toString();
                rows += `<tr><th>${(index + 1) + '. ' + questions[index]}</th>`
                if (prefix-word[0].length > 0)
                    rows += `<td colspan="${prefix-word[0].length}" class="empty-cell"></td>`;
                for (let i = 0; i < w.length; i++) {
                    let cl = (i == word[0].length+1) ? 'class="keyletter-cell"' : 'class="letter-cell"';
                    if (w.charAt(i) !== ",")
                        rows += `<td ${cl}><input type="text" size="1" maxlength="1"></td>`;
                }
                if (sufix-word[2].length > 0)
                    rows += `<td colspan="${sufix-word[2].length}" class="empty-cell"></td></tr>`;
            });
            rows += `</table>`;
            $(this.obj).append(rows);
        }

        validate() {
            let word = this.words.toString();
            word = word.replace(/[,]/g,"");
            let correct = 0;
            let wrong = 0;

            let nodeResult = {};
            nodeResult.type = "TCrosswords";
            nodeResult.points = this.points;
            let keys = [];
            let k = -1;
            nodeResult.correct = [];
            this.words.forEach(function(element,key){
                nodeResult.correct.push(element.toString().replace(/[,]/g,""));
                k += nodeResult.correct[key].length;
                keys.push(k);
            });
            keys.pop();
            nodeResult.answer = "";
            
            $(this.obj).find("input").each(function(key,element){                
                let answer = $(element).val().toLocaleUpperCase();
                if (answer === word[key]) {
                    $(element).parent().addClass("correct-cell").html(`<ins>${answer}</ins>`);
                    correct++;
                } else {
                    $(element).parent().addClass("wrong-cell").html(`<del>${answer}</del> <ins>${word[key]}</ins>`);
                    wrong++;
                }
                if (answer.length === 0) answer = " ";
                nodeResult.answer += answer;
                if (keys.indexOf(key) != -1) nodeResult.answer += ",";
            });
            this.wrong = wrong;
            this.correct = correct;
            this.score = Math.round((correct / (wrong + correct)) * this.points);
            $(this.obj).append(`<div>Points: ${this.score}</div>`);
            nodeResult.answer = nodeResult.answer.split(",");
            nodeResult.score = this.score;                      
            return nodeResult;            
        }
    }
    

    let options = new Set();
    let blocks = new Map();

    function testInit() {
        options = new Set();
        blocks = new Map();
        $(".tblock").each(function(key,element){
            blocks.set(key,new TBlock($(element), options));
            $(element).children("article").hide();
            blocks.get(key).init();
            //blocks.get(key).activate();
        });

        $(".tactivate").on("click",function(){
            let key = $(this).parentsUntil(".tblock").parent().data("key");
            //console.log(key);
            $(this).parentsUntil(".tblock").nextAll("article").show(500);
    //        blocks.get(key).init();
            blocks.get(key).activate();
        });
    
        $(".tvalidate").on("click",function(){
            let key = $(this).parentsUntil(".tblock").parent().data("key");
            console.log(key);
            blocks.get(key).validate();
            $('[data-toggle="tooltip"]').tooltip();
        })

        $(".roll").on("click", function() {
            $(this).next().toggle(500);
        })

        $("#reset").on("click", function(){
            console.log(main);
            $("main").replaceWith(main.clone());
            testInit();        
        })
    }

    testInit();


    console.log(blocks); 
    

})
