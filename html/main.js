"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var indata = {
    "progress": 0,
    "score": 0,
    "blocks": [{
        "nodes": [{
            "type": "TInput",
            "points": 2,
            "correct": "ipsum",
            "answer": "ipsum",
            "score": 2
        }, {
            "type": "TInput",
            "points": 2,
            "correct": "consectetur",
            "answer": "[nevyplněno]",
            "score": 0
        }, {
            "type": "TInput",
            "points": 2,
            "correct": "nihil",
            "answer": "nihil",
            "score": 2
        }, {
            "type": "TInput",
            "points": 3,
            "correct": "animi",
            "answer": "[nevyplněno]",
            "score": 0
        }, {
            "type": "TSelect",
            "points": 0.5,
            "correct": "ipsum",
            "answer": "ipsum",
            "score": 0.5
        }, {
            "type": "TSelect",
            "points": 1,
            "correct": "consectetur",
            "answer": "consectetur",
            "score": 1
        }, {
            "type": "TSelect",
            "points": 1,
            "correct": "nihil",
            "answer": "nihil",
            "score": 1
        }, {
            "type": "TSort",
            "points": 6,
            "correct": ["cosi10", "cosi20", "cosi30", "cosi40", "cosi50", "cosi60"],
            "answer": ["cosi10", "cosi20", "cosi30", "cosi40", "cosi60", "cosi50"],
            "score": 4
        }, {
            "type": "TSort",
            "points": 4,
            "correct": ["<img src=\"tile-wide.png\" style=\"width:100%\">", "Cell2", "<img src=\"obr1.png\" style=\"width:100%\">", "Cell4"],
            "answer": ["<img src=\"obr1.png\" style=\"width:100%\">", "Cell2", "<img src=\"tile-wide.png\" style=\"width:100%\">", "Cell4"],
            "score": 2
        }, {
            "type": "TSort",
            "points": 4,
            "correct": ["Cell5", "Cell6", "Cell7", "Cell8"],
            "answer": ["Cell5", "Cell6", "Cell7", "Cell8"],
            "score": 4
        }, {
            "type": "TSort",
            "points": 4,
            "correct": ["Cell9", "Cell10", "Cell11", "Cell12"],
            "answer": ["Cell9", "Cell11", "Cell10", "Cell12"],
            "score": 2
        }, {
            "type": "TSort",
            "points": 4,
            "correct": ["Cell13", "Cell14", "Cell15", "Cell16"],
            "answer": ["Cell13", "Cell16", "Cell15", "Cell14"],
            "score": 2
        }, {
            "type": "TCheck",
            "points": 3,
            "correct": [1, 2, 3],
            "answer": [1, 3, 5, 6],
            "score": 1
        }, {
            "type": "TCheck",
            "points": 1,
            "correct": [2],
            "answer": [0, 3],
            "score": 0
        }, {
            "type": "TCheck",
            "points": 1,
            "correct": [2],
            "answer": [0, 1, 2],
            "score": 1
        }, {
            "type": "TCrosswords",
            "points": 7,
            "correct": ["LA|P|TOP", "W|O|RD", "|Č|IP", "S|Í|Ť", "MONI|T|OR", "|A|NALOG", "PŘEKLADA|Č|"],
            "answer": ["LA|P|TOP", "W|O|RD", "|4|IP", "S|I|T", "----|-|--", "|A|NALG-", "--------|-|"],
            "score": 3
        }, {
            "type": "TCrosswords",
            "points": 4,
            "correct": ["W|W|W", "PASSW|O|RD", "P|R|INCIPLE", "|D|NS"],
            "answer": ["W|W|W", "PAS--|W|--", "-|-|-------", "|D|NS"],
            "score": 2
        }],
        "score": "27.5",
        "time": 87000.27500000001
    }, {
        "nodes": [{
            "type": "TSelect",
            "points": 2,
            "correct": "ipsum",
            "answer": "ipsum",
            "score": 2
        }, {
            "type": "TInput",
            "points": 2,
            "correct": "consectetur",
            "answer": "[nevyplněno]",
            "score": 0
        }, {
            "type": "TSelect",
            "points": 1,
            "correct": "nihil",
            "answer": "nihil",
            "score": 1
        }, {
            "type": "TSelect",
            "points": 3,
            "correct": "labore",
            "answer": "consectetur",
            "score": 0
        }, {
            "type": "TInput",
            "points": 2,
            "correct": "ipsum",
            "answer": "ipsum",
            "score": 2
        }, {
            "type": "TSelect",
            "points": 1,
            "correct": "consectetur",
            "answer": "consectetur",
            "score": 1
        }, {
            "type": "TInput",
            "points": 2,
            "correct": "nihil",
            "answer": "[nevyplněno]",
            "score": 0
        }, {
            "type": "TInput",
            "points": 3,
            "correct": "animi",
            "answer": "[nevyplněno]",
            "score": 0
        }],
        "score": "6.0",
        "time": 16000.23000000001
    }]
};

var result = {
    progress: 0,
    score: 0,
    blocks: []
};

function gauge(id, data) {
    data = parseFloat(data);
    console.log(data);
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.4, // The line thickness
        radiusScale: 0.9, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.04, // The thickness
            color: '#666' // Fill color
        },
        /*@brand-primary:         #003d56;
        @brand-success:         #bbd860;
        @brand-info:            #34c0dd;
        @brand-warning:         #eaa09e;
        @brand-danger:          #c22b92;*/
        percentColors: [[0.0, "#eaa09e"], [0.35, "#eaa09e"], [0.5, "#c22b92"], [0.65, "#003d56"], [0.8, "#34c0dd"], [0.95, "#bbd860"]],
        staticLabels: {
            font: "11px sans-serif", // Specifies font
            labels: [40, 55, 70, 85], // Print labels at these values
            color: "#666", // Optional: Label text color
            fractionDigits: 0 // Optional: Numerical precision. 0=round off.
        },
        limitMax: false, // If false, max value increases automatically if value > maxValue
        limitMin: false, // If true, the min value of the gauge will be fixed
        colorStart: '#c22b92', // Colors
        colorStop: '#bbd860', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true // High resolution support
    };
    var target = document.getElementById(id); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 100; // set max gauge value
    gauge.setMinValue(0); // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 20; // set animation speed (32 is default value)
    gauge.set(data); // set actual value        
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function getMark(percent) {
    if (percent >= 85) return 1;
    if (percent >= 70) return 2;
    if (percent >= 55) return 3;
    if (percent >= 40) return 4;
    return 5;
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

$(function () {
    var time = 0,
        startTime = 0;

    var TBlock = function () {
        function TBlock(obj, options) {
            _classCallCheck(this, TBlock);

            this.obj = obj;
            this.options = options;
            this.nodes = new Map();
            this.id = $(obj).attr('id');
            this.time = 0;
            result.blocks.push({});
        }

        _createClass(TBlock, [{
            key: "init",
            value: function init() {
                var nodes = this.nodes;
                var selectlist = [];
                $(this.obj).find(".tnode.tselect").each(function (key, element) {
                    selectlist.push($(element).text());
                });
                $(this.obj).find(".tnode").each(function (key, element) {
                    if ($(element).hasClass('tinput')) nodes.set(key, new TInput($(element)));
                    if ($(element).hasClass('tselect')) nodes.set(key, new TSelect($(element), shuffle(selectlist.slice())));
                    if ($(element).hasClass('tsort')) nodes.set(key, new TSort($(element)));
                    if ($(element).hasClass('tgroups')) nodes.set(key, new TGroups($(element)));
                    if ($(element).hasClass('tcheck')) nodes.set(key, new TCheck($(element)));
                    if ($(element).hasClass('tcrosswords')) nodes.set(key, new TCrosswords($(element)));
                    if ($(element).hasClass('tdropper')) nodes.set(key, new TDropper($(element)));
                });
                this.nodes = nodes;

                var dashboard = "<div class=\"dashboard\">\n                                <div class=\"jumbotroni\">\n                                    <div class=\"container-fluid\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-2 time-panel text-center\"></div>\n                                            <div class=\"col-sm-2 score-panel text-center\"></div>\n                                            <div class=\"col-sm-2 percent-panel text-center\"></div>\n                                            <div class=\"col-sm-2 gauge-panel\"></div>\n                                            <div class=\"col-sm-2 mark-panel text-center\"></div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>";
                $(this.obj).find("footer").append(dashboard);
            }
        }, {
            key: "activate",
            value: function activate() {
                var maxscore = 0;
                this.nodes.forEach(function (node) {
                    node.activate();
                    maxscore += node.getPoints();
                });
                this.maxscore = maxscore;
                startTime = performance.now();
                var obj = this.obj;
                this.timer = setInterval(function () {
                    time = performance.now() - startTime;
                    //$(obj).find(".dashboard").find(".time-panel").html(`<p class="label"><span class="glyphicon glyphicon-time"></span> Time</p><h5>${moment(new Date(time)).format('mm:ss')}</h5>`)
                }, 1000);
            }
        }, {
            key: "validate",
            value: function validate() {
                var block = { nodes: [] };
                var score = 0;
                var nodeRes = void 0;
                this.nodes.forEach(function (node) {
                    nodeRes = node.validate();
                    block.nodes.push(nodeRes);
                    //node.showResult(nodeRes); 
                    score += node.getScore();
                });
                var percent = (score / this.maxscore * 100).toFixed(1);
                var id = this.id;
                clearInterval(this.timer);
                this.time = time;
                this.score = score.toFixed(1);
                block.score = this.score;
                block.time = this.time;

                return block;
            }
        }, {
            key: "showResult",
            value: function showResult(dataBlocks) {
                $(this.obj).find(".tvalidate").remove();
                var maxscore = 0;
                var score = 0;
                console.log(dataBlocks);
                this.nodes.forEach(function (node, key) {
                    node.showResult(dataBlocks.nodes[key]);
                    maxscore += node.getPoints();
                    score += node.getScore();
                });
                var percent = (score / maxscore * 100).toFixed(1);
                var id = this.id;
                this.time = dataBlocks.time;
                $(this.obj).find(".dashboard").find(".time-panel").html("<p class=\"label\"><span class=\"glyphicon glyphicon-time\"></span> Time</p><h5>" + moment(new Date(this.time)).format('mm:ss') + "</h5>");
                $(this.obj).find(".dashboard").find(".score-panel").append("<p class=\"label\"><span class=\"glyphicon glyphicon-equalizer\"></span> Points</p><h5><span class=\"badge\">" + score + "</span></h5>");
                this.score = score;
                $(this.obj).find(".dashboard").find(".percent-panel").append("<p class=\"label\"><span class=\"glyphicon glyphicon-scale\"></span> Score</p><h5>" + percent + " %</h5>");
                $(this.obj).find(".dashboard").find(".gauge-panel").append("<canvas id=\"gg" + id + "\"></canvas><h5 class=\"label\">" + percent + " %</h5>");
                gauge('gg' + this.id, percent);
                var mark = getMark(percent);
                $(this.obj).find(".dashboard").find(".mark-panel").append("<p class=\"label\"><span class=\"glyphicon glyphicon-scale\"></span> Mark</p><h3>" + mark + "</h3>");
            }
        }, {
            key: "toString",
            value: function toString() {
                return this.id;
            }
        }]);

        return TBlock;
    }();

    var TNode = function () {
        function TNode(obj) {
            _classCallCheck(this, TNode);

            this.obj = obj;
            this.score = 0;
            this.points = 1;
        }

        _createClass(TNode, [{
            key: "activate",
            value: function activate() {}
        }, {
            key: "validate",
            value: function validate() {}
        }, {
            key: "showResult",
            value: function showResult() {}
        }, {
            key: "getPoints",
            value: function getPoints() {
                return this.points;
            }
        }, {
            key: "getScore",
            value: function getScore() {
                return this.score;
            }
        }, {
            key: "setStartTime",
            value: function setStartTime(time) {
                this.startTime = time;
            }
        }]);

        return TNode;
    }();

    var TInput = function (_TNode) {
        _inherits(TInput, _TNode);

        function TInput(obj) {
            _classCallCheck(this, TInput);

            var _this = _possibleConstructorReturn(this, (TInput.__proto__ || Object.getPrototypeOf(TInput)).call(this, obj));

            _this.points = $(obj).data('points') ? $(obj).data('points') : 1;
            return _this;
        }

        _createClass(TInput, [{
            key: "activate",
            value: function activate() {
                this.value = $(this.obj).text();
                var replaceText = "<input type=\"text\">";
                $(this.obj).html(replaceText);
            }
        }, {
            key: "validate",
            value: function validate() {
                var nodeResult = {};
                nodeResult.type = "TInput";
                nodeResult.points = this.points;
                nodeResult.correct = this.value;
                nodeResult.answer = $(this.obj).children("input").val();
                var value = this.value;
                var score = this.points;
                if ($(this.obj).children("input").val() !== this.value) {
                    score = 0;
                }
                this.score = score;
                nodeResult.score = this.score;
                return nodeResult;
            }
        }, {
            key: "showResult",
            value: function showResult(nodeData) {
                if (nodeData.correct === nodeData.answer) {
                    $(this.obj).html("<ins>" + nodeData.correct + "</ins> <sup class=\"badge\">" + nodeData.score + "</sup>");
                } else {
                    nodeData.answer = nodeData.answer.length === 0 ? "[nevyplněno]" : nodeData.answer;
                    $(this.obj).html("<del data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + nodeData.correct + "\">" + nodeData.answer + "</del> <sup class=\"badge\">" + nodeData.score + "</sup>");
                }
            }
        }]);

        return TInput;
    }(TNode);

    var TSelect = function (_TNode2) {
        _inherits(TSelect, _TNode2);

        function TSelect(obj, list) {
            _classCallCheck(this, TSelect);

            var _this2 = _possibleConstructorReturn(this, (TSelect.__proto__ || Object.getPrototypeOf(TSelect)).call(this, obj));

            _this2.list = list;
            _this2.points = $(obj).data('points') ? $(obj).data('points') : 1;
            return _this2;
        }

        _createClass(TSelect, [{
            key: "activate",
            value: function activate() {
                this.value = $(this.obj).text();
                var options = "";
                this.list.forEach(function (v) {
                    options += "<option>" + v + "</option>";
                });
                var replaceText = "<select>" + options + "<select>";
                $(this.obj).html(replaceText);
            }
        }, {
            key: "validate",
            value: function validate() {
                var nodeResult = {};
                nodeResult.type = "TSelect";
                nodeResult.points = this.points;
                nodeResult.correct = this.value;
                nodeResult.answer = $(this.obj).children("select").val();
                var value = this.value;
                var score = this.points;
                if ($(this.obj).children("select").val() !== this.value) {
                    score = 0;
                }
                this.score = score;
                nodeResult.score = this.score;
                return nodeResult;
            }
        }, {
            key: "showResult",
            value: function showResult(nodeData) {
                if (nodeData.correct === nodeData.answer) {
                    $(this.obj).html("<ins>" + nodeData.correct + "</ins> <sup class=\"badge\">" + nodeData.score + "</sup>");
                } else {
                    $(this.obj).html("<del data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + nodeData.correct + "\">" + nodeData.answer + "</del> <sup class=\"badge\">" + nodeData.score + "</sup>");
                }
            }
        }]);

        return TSelect;
    }(TNode);

    var TSort = function (_TNode3) {
        _inherits(TSort, _TNode3);

        function TSort(obj) {
            _classCallCheck(this, TSort);

            var _this3 = _possibleConstructorReturn(this, (TSort.__proto__ || Object.getPrototypeOf(TSort)).call(this, obj));

            var list = [];
            $(obj).find('.ui-state-default').each(function (key, element) {
                list.push($(element));
            });
            _this3.list = list;
            _this3.randlist = shuffle(list.slice());
            _this3.points = $(obj).data('points') ? $(obj).data('points') : list.length;
            return _this3;
        }

        _createClass(TSort, [{
            key: "activate",
            value: function activate() {
                $(this.obj).find('.ui-state-default').remove();
                $(this.obj).append(this.randlist);
                $(this.obj).sortable({
                    placeholder: "ui-state-highlight"
                });
                $(this.obj).disableSelection();
            }
        }, {
            key: "validate",
            value: function validate() {
                var correct = 0;
                var wrong = 0;
                var list = this.list;
                var nodeResult = {};
                nodeResult.type = "TSort";
                nodeResult.points = this.points;
                nodeResult.correct = [];
                nodeResult.answer = [];

                $(this.obj).find('.ui-state-default').each(function (key, element) {
                    nodeResult.correct.push($(list[key]).html());
                    nodeResult.answer.push($(element).html());
                    if ($(element).html() === $(list[key]).html()) {
                        correct++;
                    } else {
                        wrong++;
                    }
                });

                this.score = Math.floor(correct / (wrong + correct) * this.points);
                nodeResult.score = this.score;
                return nodeResult;
            }
        }, {
            key: "showResult",
            value: function showResult(nodeData) {
                $(this.obj).sortable({
                    disabled: true
                });
                $(this.obj).find('.ui-state-default').each(function (key, element) {
                    if (nodeData.answer[key] === nodeData.correct[key]) {
                        $(element).addClass("correct");
                    } else {
                        $(element).addClass("wrong");
                    }
                    $(element).removeClass('ui-state-default').removeClass('ui-sortable-handle');
                });
                $(this.obj).append("<div><span class=\"badge\">" + this.score + "</span></div>");
            }
        }]);

        return TSort;
    }(TNode);

    var TGroups = function (_TNode4) {
        _inherits(TGroups, _TNode4);

        function TGroups(obj) {
            _classCallCheck(this, TGroups);

            var _this4 = _possibleConstructorReturn(this, (TGroups.__proto__ || Object.getPrototypeOf(TGroups)).call(this, obj));

            var groups = [];
            var list = [];
            $(obj).find('.tgroup').each(function (key, element) {
                var l = [];
                $(element).find('.ui-state-default').each(function (k, el) {
                    list.push($(el));
                    l.push($(el).html());
                });
                groups.push(l);
            });
            _this4.groups = groups;
            _this4.randlist = shuffle(list.slice());
            _this4.points = $(obj).data('points') ? $(obj).data('points') : list.length;
            return _this4;
        }

        _createClass(TGroups, [{
            key: "activate",
            value: function activate() {
                $(this.obj).find('.ui-state-default').remove();
                var obj = $(this.obj);
                var countGroups = this.groups.length;
                this.randlist.forEach(function (element, key) {
                    $(obj).find('.tgroup:eq(' + Math.floor(Math.random() * countGroups) + ')').append(element);
                });
                $(this.obj).find('.tgroup').sortable({
                    connectWith: ".connectedSortable",
                    placeholder: "ui-state-highlight",
                    forcePlaceholderSize: true,
                    dropOnEmpty: true,
                    tolerance: "pointer",
                    distance: 0.5
                });
                $(this.obj).find('.tgroup').disableSelection();
            }
        }, {
            key: "validate",
            value: function validate() {
                var correct = 0;
                var wrong = 0;
                var nodeResult = {};
                nodeResult.type = "TGroups";
                nodeResult.points = this.points;
                nodeResult.correct = this.groups;
                nodeResult.answer = [];

                $(this.obj).find('.tgroup').each(function (key, element) {
                    var list = [];
                    $(element).find('.ui-state-default').each(function (k, el) {
                        list.push($(el).html());
                        if ($.inArray($(el).html(), nodeResult.correct[key]) > -1) {
                            correct++;
                        } else {
                            wrong++;
                        }
                    });
                    nodeResult.answer.push(list);
                });

                this.score = Math.floor(correct / (wrong + correct) * this.points);
                nodeResult.score = this.score;
                return nodeResult;
            }
        }, {
            key: "showResult",
            value: function showResult(nodeData) {
                $(this.obj).find('.tgroup').sortable({
                    disabled: true
                });
                $(this.obj).find('.tgroup').each(function (key, element) {
                    $(element).find('.ui-state-default').each(function (k, el) {
                        if ($.inArray($(el).html(), nodeData.correct[key]) > -1) {
                            $(el).addClass("correct");
                        } else {
                            $(el).addClass("wrong");
                        }
                    });
                });
                $(this.obj).append("<div><span class=\"badge\">" + this.score + "</span></div>");
            }
        }]);

        return TGroups;
    }(TNode);

    var TCheck = function (_TNode5) {
        _inherits(TCheck, _TNode5);

        function TCheck(obj) {
            _classCallCheck(this, TCheck);

            var _this5 = _possibleConstructorReturn(this, (TCheck.__proto__ || Object.getPrototypeOf(TCheck)).call(this, obj));

            var list = [];
            var points = 0;
            $(obj).find('.item').each(function (key, element) {
                if ($(element).hasClass("check")) {
                    list.push(key);
                    points++;
                }
            });
            _this5.list = list.slice();
            _this5.points = $(obj).data('points') ? $(obj).data('points') : points;
            return _this5;
        }

        _createClass(TCheck, [{
            key: "activate",
            value: function activate() {
                $(this.obj).find('.item').removeClass("check").prepend("<input type=\"checkbox\"> ");
            }
        }, {
            key: "validate",
            value: function validate() {
                var correct = 0;
                var wrong = 0;
                var list = this.list;
                var nodeResult = {};
                nodeResult.type = "TCheck";
                nodeResult.points = this.points;
                nodeResult.correct = this.list;
                nodeResult.answer = [];

                $(this.obj).find('.item').each(function (key, element) {
                    if ($(element).find('[type=checkbox]')['0'].checked) nodeResult.answer.push(key);
                    if (nodeResult.correct.indexOf(key) > -1 && nodeResult.answer.indexOf(key) > -1 || nodeResult.correct.indexOf(key) == -1 && nodeResult.answer.indexOf(key) == -1) {
                        correct++;
                    } else {
                        wrong++;
                    }
                });
                this.score = Math.floor(correct / (wrong + correct) * this.points);
                nodeResult.score = this.score;
                return nodeResult;
            }
        }, {
            key: "showResult",
            value: function showResult(nodeData) {
                console.log(nodeData);
                $(this.obj).find('.item').each(function (key, element) {
                    if ($(element).find('[type=checkbox]')['0'].checked) {
                        $(element).prepend('<span class="glyphicon glyphicon-check"></span>');
                    } else {
                        $(element).prepend('<span class="glyphicon glyphicon-unchecked"></span>');
                    }
                    $(element).find('[type=checkbox]').remove();
                    if (nodeData.correct.indexOf(key) > -1 && nodeData.answer.indexOf(key) > -1 || nodeData.correct.indexOf(key) == -1 && nodeData.answer.indexOf(key) == -1) {
                        $(element).addClass("correct");
                    } else {
                        $(element).addClass("wrong");
                    }
                });
                $(this.obj).append("<div><span class=\"badge\">" + this.score + "</span></div>");
            }
        }]);

        return TCheck;
    }(TNode);

    var TCrosswords = function (_TNode6) {
        _inherits(TCrosswords, _TNode6);

        function TCrosswords(obj) {
            _classCallCheck(this, TCrosswords);

            var _this6 = _possibleConstructorReturn(this, (TCrosswords.__proto__ || Object.getPrototypeOf(TCrosswords)).call(this, obj));

            var points = 0;
            var rows = [];
            var words = [];
            var prefix = 0;
            var sufix = 0;
            $(_this6.obj).find("li").each(function (key, element) {
                points++;
                rows.push($(element).find("mark").text());
                words.push($(element).find("mark").text().split('|'));
                if (words[key][0].length > prefix) prefix = words[key][0].length;
                if (words[key][2].length > sufix) sufix = words[key][2].length;
            });
            _this6.rows = rows;
            _this6.points = points;
            _this6.words = words;
            _this6.prefix = prefix;
            _this6.sufix = sufix;
            $(_this6.obj).find("mark").remove();
            return _this6;
        }

        _createClass(TCrosswords, [{
            key: "activate",
            value: function activate() {
                $(this.obj).find("ol").hide();
                var rows = "<table class=\"table table-bordered\">";
                var prefix = this.prefix;
                var sufix = this.sufix;
                var questions = [];
                $(this.obj).find("li").each(function (key, element) {
                    questions.push($(element).html());
                });
                this.words.forEach(function (word, index) {
                    var w = word.toString();
                    rows += "<tr><th>" + (index + 1 + '. ' + questions[index]) + "</th>";
                    if (prefix - word[0].length > 0) rows += "<td colspan=\"" + (prefix - word[0].length) + "\" class=\"empty-cell\"></td>";
                    for (var i = 0; i < w.length; i++) {
                        var cl = i == word[0].length + 1 ? 'class="keyletter-cell"' : 'class="letter-cell"';
                        if (w.charAt(i) !== ",") rows += "<td " + cl + "><input type=\"text\" size=\"1\" maxlength=\"1\"></td>";
                    }
                    if (sufix - word[2].length > 0) rows += "<td colspan=\"" + (sufix - word[2].length) + "\" class=\"empty-cell\"></td></tr>";
                });
                rows += "</table>";
                $(this.obj).append(rows);
            }
        }, {
            key: "validate",
            value: function validate() {
                var correct = 0;
                var wrong = 0;

                var nodeResult = {};
                nodeResult.type = "TCrosswords";
                nodeResult.points = this.points;
                nodeResult.correct = this.rows.toString().toLocaleUpperCase();
                nodeResult.answer = this.rows.toString().toLocaleUpperCase();

                var i = 0;
                $(this.obj).find("input").each(function (key, element) {
                    while (nodeResult.correct.charAt(i) == '|' || nodeResult.correct.charAt(i) == ',') {
                        i++;
                    } /*if (nodeResult.correct.charAt(i)=='|') i++;
                      if (nodeResult.correct.charAt(i) == ',') i++;
                      if (nodeResult.correct.charAt(i)=='|') i++;
                      console.log(nodeResult.answer.charAt(i) + '/' + key);*/
                    if ($(element).val().toLocaleUpperCase() == "") nodeResult.answer = nodeResult.answer.replaceAt(i, "-");else nodeResult.answer = nodeResult.answer.replaceAt(i, $(element).val().toLocaleUpperCase());
                    if (nodeResult.answer.charAt(i) === nodeResult.correct.charAt(i)) {
                        correct++;
                    } else {
                        wrong++;
                    }
                    i++;
                });
                this.wrong = wrong;
                this.correct = correct;
                this.score = Math.round(correct / (wrong + correct) * this.points);
                nodeResult.answer = nodeResult.answer.split(",");
                nodeResult.correct = nodeResult.correct.split(",");
                nodeResult.score = this.score;
                return nodeResult;
            }
        }, {
            key: "showResult",
            value: function showResult(nodeData) {
                $(this.obj).find("ol").hide();
                $(this.obj).find("table").remove();
                var rows = "<table class=\"table table-bordered\">";
                var prefix = this.prefix;
                var sufix = this.sufix;
                var questions = [];
                $(this.obj).find("li").each(function (key, element) {
                    questions.push($(element).html());
                });
                this.words.forEach(function (word, index) {
                    var w = word.toString();
                    rows += "<tr><th>" + (index + 1 + '. ' + questions[index]) + "</th>";
                    if (prefix - word[0].length > 0) rows += "<td colspan=\"" + (prefix - word[0].length) + "\" class=\"empty-cell\"></td>";
                    for (var i = 0; i < w.length; i++) {
                        var cl = i == word[0].length + 1 ? 'class="keyletter-cell"' : 'class="letter-cell"';
                        if (w.charAt(i) !== ",") {
                            if (nodeData.answer[index].charAt(i) === w.charAt(i).toLocaleUpperCase()) {
                                cl = cl.replaceAt(cl.length - 1, ' correct-cell"');
                                rows += "<td " + cl + ">" + nodeData.answer[index].charAt(i) + "</td>";
                            } else {
                                cl = cl.replaceAt(cl.length - 1, ' wrong-cell"');
                                rows += "<td " + cl + ">" + nodeData.answer[index].charAt(i) + "</td>";
                            }
                        }
                    }
                    if (sufix - word[2].length > 0) rows += "<td colspan=\"" + (sufix - word[2].length) + "\" class=\"empty-cell\"></td></tr>";
                });
                rows += "</table>";
                $(this.obj).find("ol").remove();
                $(this.obj).append(rows);
                $(this.obj).append("<div><span class=\"badge\">" + this.score + "</span></div>");
            }
        }]);

        return TCrosswords;
    }(TNode);

    var TDropper = function (_TNode7) {
        _inherits(TDropper, _TNode7);

        function TDropper(obj) {
            _classCallCheck(this, TDropper);

            var _this7 = _possibleConstructorReturn(this, (TDropper.__proto__ || Object.getPrototypeOf(TDropper)).call(this, obj));

            var list = [];
            $(obj).find('.tdrop').each(function (key, element) {
                list.push($(element).html());
            });
            _this7.list = list;
            _this7.randlist = shuffle(list.slice());
            _this7.points = $(obj).data('points') ? $(obj).data('points') : list.length;
            return _this7;
        }

        _createClass(TDropper, [{
            key: "activate",
            value: function activate() {
                $(this.obj).find('.tdrop').each(function (key, element) {
                    var replace = $(element).data('replace') !== undefined ? $(element).data('replace') : "<h3>?</h3>";
                    $(element).html(replace).removeClass('ui-state-highlight');
                });
                var rows = '';
                this.randlist.forEach(function (html, index) {
                    rows += "<div class=\"tdrop-option\">" + html + "</div>";
                });
                $(this.obj).append("<div class=\"tdropper-reset\"><span class=\"glyphicon glyphicon-repeat\"></span> RESET</div>");
                $(this.obj).append("<div class=\"tdropper-list\">" + rows + "</div>");
                var object = this;
                $(this.obj).find(".tdropper-reset").on("click", function () {
                    $(this).siblings(".tdropper-list").remove();
                    $(this).remove();
                    object.activate();
                });
                $(this.obj).find(".tdrop-option").draggable();
                //$(this.obj).find(".tdrop-option").width($(this.obj).find(".tdrop").width());
                $(this.obj).find(".tdrop").droppable({
                    tolerance: "pointer",
                    classes: {
                        "ui-droppable-active": "ui-state-active",
                        "ui-droppable-hover": "ui-state-hover"
                    },
                    drop: function drop(event, ui) {
                        $(this).addClass("ui-state-highlight").html(ui.draggable[0].innerHTML);
                        ui.draggable[0].remove();
                    }
                });
            }
        }, {
            key: "validate",
            value: function validate() {
                var correct = 0;
                var wrong = 0;
                var list = this.list;
                var nodeResult = {};
                nodeResult.type = "TDropper";
                nodeResult.points = this.points;
                nodeResult.correct = [];
                nodeResult.answer = [];

                $(this.obj).find('.tdrop').each(function (key, element) {
                    nodeResult.correct.push(list[key]);
                    nodeResult.answer.push($(element).html());
                    console.log(nodeResult.correct);
                    console.log(nodeResult.answer);
                    if ($(element).html() === list[key]) {
                        correct++;
                    } else {
                        wrong++;
                    }
                });

                this.score = Math.floor(correct / (wrong + correct) * this.points);
                nodeResult.score = this.score;
                return nodeResult;
            }
        }, {
            key: "showResult",
            value: function showResult(nodeData) {
                $(this.obj).find('.tdropper-reset').remove();
                $(this.obj).find('.tdropper-list').remove();
                $(this.obj).find('.tdrop').removeClass('ui-state-highlight');
                $(this.obj).find('.tdrop').each(function (key, element) {
                    if (nodeData.answer[key] === nodeData.correct[key]) {
                        $(element).addClass("correct");
                    } else {
                        $(element).addClass("wrong");
                    }
                });
                $(this.obj).append("<div><span class=\"badge\">" + this.score + "</span></div>");
            }
        }]);

        return TDropper;
    }(TNode);

    var Tester = function Tester(data, config) {
        _classCallCheck(this, Tester);

        this.data = data;
        this.config = config;

        var options = new Set();
        var blocks = new Map();

        $(".tblock").each(function (key, element) {
            blocks.set(key, new TBlock($(element), options));
            $(element).children("article").hide();
            blocks.get(key).init();
            //blocks.get(key).showResult(inputdata.blocks[key]);                
            //$(element).find("article").show(500);
        });

        $(".tactivate").on("click", function () {
            var key = $(this).parentsUntil(".tblock").parent().data("key");
            $(this).parentsUntil(".tblock").nextAll("article").show(500);
            $(this).parentsUntil(".tblock").find(".tvalidate").show();
            blocks.get(key).activate();
            $(this).remove();
        });

        $(".treset").on("click", function () {
            var nodes = $(this).parentsUntil("article").parent().find(".tnode");
            console.log(nodes);
        });

        $(".tvalidate").on("click", function () {
            var key = $(this).parentsUntil(".tblock").parent().data("key");
            result.blocks[key] = blocks.get(key).validate();
            blocks.get(key).showResult(result.blocks[key]);
            //                console.log(JSON.stringify(result));
            $('[data-toggle="tooltip"]').tooltip();
        });
    };

    new Tester({}, {});
});