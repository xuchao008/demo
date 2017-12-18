
const _ = require('lodash')
let base_chart_option_dict = {}
const chart_enum = require('./enym.js');

let toolbox = {
    'show': false,
    'feature': {
        'mark': {'show': true},
        'dataView': {'show': true, 'readOnly': false},
        'restore': {'show': true},
        'saveAsImage': {'show': true},
        'myShowOption': {
            'show': true,
            'title': '编辑',
            'icon': 'image://http://echarts.baidu.com/images/favicon.png',
            'onclick': '$$self.showOption$$',
        },
        'myGoBack': {
            'show': false,
            'title': '返回',
            'icon': 'image://http://echarts.baidu.com/images/favicon.png',
            'onclick': '$$self.goBack$$',
        },
        'myDownloadData': {
            'show': true,
            'title': '下载数据',
            'icon': 'image://http://echarts.baidu.com/images/favicon.png',
            'onclick': '$$self.downloadData$$',
        }
    }
}

let color = ["#577CAD", "#FFA51B", "#EF635C", "#7FBAC4", "#48A47D", "#BCB52B", "#B46A88", "#B29688", "#9FACA4", "#6B6B6B"]

let base_chart_option_bar = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'data': null,
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            'color': '#787878',
            'fontSize': 10
        },
        'axisLabel': {
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            }
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'formatter': null,
        'axisPointer': {
            'type': 'shadow'
        },
        'formatter': function (param) {
          console.log(param)
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "bottom": '0%',
        "xAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_bar_stack = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'data': null,
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            'color': '#787878',
            'fontSize': 10
        },
        'axisLabel': {
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            }
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'shadow'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "bottom": '0%',
        "xAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_bar_percent = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'data': null,
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "min": 0,
        "max": 100,
        "nameTextStyle": {
            'color': '#787878',
            'fontSize': 10
        },
        'axisLabel': {
            'formatter': '{value} %',
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            }
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'shadow'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "bottom": '0%',
        "xAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_bar_stack_percent = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'data': null,
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "min": 0,
        "max": 100,
        "nameTextStyle": {
            'color': '#787878',
            'fontSize': 10
        },
        'axisLabel': {
            'formatter': '{value} %',
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            }
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'shadow'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "bottom": '0%',
        "xAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_hbar = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'yAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'data': null,
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'shadow'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "left": '0%',
        "yAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_hbar_stack = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'yAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'data': null,
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'shadow'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "left": '0%',
        "yAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_hbar_percent = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "min": 0,
        "max": 100,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'formatter': '{value} %',
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'yAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'data': null,
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'shadow'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "left": '0%',
        "yAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_hbar_stack_percent = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "min": 0,
        "max": 100,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'formatter': '{value} %',
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'yAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'data': null,
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'shadow'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "left": '0%',
        "yAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_barline = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 16,
        'itemHeight': 12
    },
    'xAxis': {
        'data': null,
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': [
        {
            'show': true,
            'type': 'value',
            'scale': false,
            'name': "",
            'nameLocation': "middle",
            "nameGap": 35,
            "nameTextStyle": {
                "color": '#787878',
                "fontSize": 10
            },
            'axisLabel': {
                'textStyle': {
                    "color": '#787878',
                    "fontSize": 10
                },
            },
            'axisLine': {
                'show': false,
            },
            'axisTick': {
                'show': false,
            },
            'splitLine': {
                'lineStyle': {
                    'color': '#e9e9e9'
                }
            }
        },
        {
            'show': true,
            'type': 'value',
            'scale': false,
            'name': "",
            'nameLocation': "middle",
            "nameGap": 35,
            "nameTextStyle": {
                "color": '#787878',
                "fontSize": 10
            },
            'axisLabel': {
                'textStyle': {
                    "color": '#787878',
                    "fontSize": 10
                },
            },
            'axisLine': {
                'show': false,
            },
            'axisTick': {
                'show': false,
            },
            'splitLine': {
                'lineStyle': {
                    'color': '#e9e9e9'
                }
            }
        }
    ],
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'cross'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "bottom": '0%',
        "xAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_barline_stack = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'xAxis': {
        'data': null,
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'inside': false,
            'textStyle': {
                'color': '#787878',
                'fontSize': 10
            },
            "rotate": 0,
        },
        'minInterval': 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': [
        {
            'show': true,
            'type': 'value',
            'scale': false,
            'name': "",
            'nameLocation': "middle",
            "nameGap": 35,
            "nameTextStyle": {
                "color": '#787878',
                "fontSize": 10
            },
            'axisLabel': {
                'textStyle': {
                    "color": '#787878',
                    "fontSize": 10
                },
            },
            'axisLine': {
                'show': false,
            },
            'axisTick': {
                'show': false,
            },
            'splitLine': {
                'lineStyle': {
                    'color': '#e9e9e9'
                }
            }
        }, {
            'show': true,
            'type': 'value',
            'scale': false,
            'name': "",
            'nameLocation': "middle",
            "nameGap": 35,
            "nameTextStyle": {
                "color": '#787878',
                "fontSize": 10
            },
            'axisLabel': {
                'textStyle': {
                    "color": '#787878',
                    "fontSize": 10
                },
            },
            'axisLine': {
                'show': false,
            },
            'axisTick': {
                'show': false,
            },
            'splitLine': {
                'lineStyle': {
                    'color': '#e9e9e9'
                }
            }
        }
    ],
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'cross'
        }
    },
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "bottom": '0%',
        "xAxisIndex": [0],
        "start": 0,
        "end": 100
    },
}

let base_chart_option_line = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'line'
        }
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 16,
        'itemHeight': 12
    },
    'xAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'type': "category",
        'data': null,
        'splitNumber': '10',
        'axisLabel': {
            'inside': false,
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
            "rotate": 0,
        },
        "minInterval": 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "xAxisIndex": [0],
        "bottom": '0%',
        "start": 0,
        "end": 100
    },
}

let base_chart_option_line_shadow = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'line'
        }
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 16,
        'itemHeight': 12
    },
    'xAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'type': "category",
        'data': null,
        'splitNumber': '10',
        'axisLabel': {
            'inside': false,
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
            "rotate": 0,
        },
        "minInterval": 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "xAxisIndex": [0],
        "bottom": '0%',
        "start": 0,
        "end": 100
    },
}

let base_chart_option_line_stack = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'tooltip': {
        'trigger': 'axis',
        'axisPointer': {
            'type': 'line'
        }
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 16,
        'itemHeight': 12
    },
    'xAxis': {
        'show': true,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'type': "category",
        'data': null,
        'splitNumber': '10',
        'axisLabel': {
            'inside': false,
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
            "rotate": 0,
        },
        "minInterval": 1,
        'axisTick': {'show': false},
        'axisLine': {
            'lineStyle': {
                'color': '#A6A6A6'
            }
        },
        'triggerEvent': true,
        'z': 10
    },
    'yAxis': {
        'show': true,
        'type': 'value',
        'scale': false,
        'name': "",
        'nameLocation': "middle",
        "nameGap": 35,
        "nameTextStyle": {
            "color": '#787878',
            "fontSize": 10
        },
        'axisLabel': {
            'textStyle': {
                "color": '#787878',
                "fontSize": 10
            },
        },
        'axisLine': {
            'show': false,
        },
        'axisTick': {
            'show': false,
        },
        'splitLine': {
            'lineStyle': {
                'color': '#e9e9e9'
            }
        }
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
    'dataZoom': {
        "type": 'slider',
        "show": false,
        "xAxisIndex": [0],
        "bottom": '0%',
        "start": 0,
        "end": 100
    },
}

let base_chart_option_pie = {
    'title': {
        'text': '',
        'subtext': '',
        'x': 'center',
        'y': '',
        'show': false
    },
    'tooltip': {
        'trigger': 'item',
        'formatter': "{a} <br/>{b} : {c} ({d}%)",
        'axisPointer': {
            'type': ''
        }
    },
    'legend': {
        'data': [],
        'x': 'left',
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'color': color,
    'series': [],
    'toolbox': toolbox,
}

let base_chart_option_radar = {
    'title': {
        'text': '基础雷达图',
        'show': false
    },
    'tooltip': {},
    'legend': {
        'data': [],
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'color': color,
    'radar': {
        'shape': 'circle',
        'indicator': [

        ],
        'splitNumber': 5,
    },
    'series': [],
    'toolbox': toolbox,
}

let base_chart_option_map = {
    "title" : {
        "text": ''
    },
    "tooltip" : {
        "trigger": 'item'
    },
    "legend": {
        "orient": 'vertical',
        "left": 'left',
        "data":[],
        'show': true,
        'itemWidth': 12,
        'itemHeight': 12
    },
    "series": [],
    "bmap": {
        "center": [104.114129, 37.550339],
        "zoom": 5,
        "roam": true,
        "mapStyle": {
            "styleJson": [
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                        "color": "#044161"
                    }
                },
                {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#064f85"
                    }
                },
                {
                    "featureType": "railway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#005b96",
                        "lightness": 1
                    }
                },
                {
                    "featureType": "highway",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry",
                    "stylers": {
                        "color": "#004981"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#00508b"
                    }
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                        "color": "#056197",
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "subway",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "manmade",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "local",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "arterial",
                    "elementType": "labels",
                    "stylers": {
                        "visibility": "off"
                    }
                },
                {
                    "featureType": "boundary",
                    "elementType": "geometry.fill",
                    "stylers": {
                        "color": "#029fd4"
                    }
                },
                {
                    "featureType": "building",
                    "elementType": "all",
                    "stylers": {
                        "color": "#1a5787"
                    }
                },
                {
                    "featureType": "label",
                    "elementType": "all",
                    "stylers": {
                        "visibility": "off"
                    }
                }
            ]
        }
    }
}

let base_chart_option_gauge = {
    'series': [],
    'tooltip': {
        'formatter': "{a} <br/>{b} : {c}"
    }
}

let base_chart_option_score_card = {
    'title': "",
    'series': []
}

let base_chart_option_index_card = {}

let base_chart_option_scatter = {
    'grid': {
        'left': 0,
        'right': 20,
        'bottom': 20,
        'containLabel': true
    },
    'title': {
        'text': '散点图标题',
        'x': 'center',
        'y': '',
        'show': false
    },
    'xAxis': {
        'splitLine': {
            'lineStyle': {
                'type': 'dashed'
            }
        }
    },
    'yAxis': {
        'splitLine': {
            'lineStyle': {
                'type': 'dashed'
            }
        },
        'scale': true
    },
    'series': [],
    'legend': {
        'data': [],
        'left': 10,
        'itemWidth': 12,
        'itemHeight': 12
    },
    'toolbox': toolbox,
}

let base_chart_option_treemap = {
    'title': {
        'text': '矩形树图',
        'show': false
    },
    'tooltip': {
        'trigger': 'item',
        'formatter': "{b}: {c}"
    },
    'toolbox': toolbox,
    'calculable': false,
    'series': [],
    'legend': {
        'data': null,
        'itemWidth': 12,
        'itemHeight': 12
    }
}

base_chart_option_dict[chart_enum.CHART_TYPE_BAR] = base_chart_option_bar
base_chart_option_dict[chart_enum.CHART_TYPE_BAR_STACK] = base_chart_option_bar_stack
base_chart_option_dict[chart_enum.CHART_TYPE_BAR_PERCENT] = base_chart_option_bar_percent
base_chart_option_dict[chart_enum.CHART_TYPE_BAR_STACK_PERCENT] = base_chart_option_bar_stack_percent
base_chart_option_dict[chart_enum.CHART_TYPE_HBAR] = base_chart_option_hbar
base_chart_option_dict[chart_enum.CHART_TYPE_HBAR_STACK] = base_chart_option_hbar_stack
base_chart_option_dict[chart_enum.CHART_TYPE_HBAR_PERCENT] = base_chart_option_hbar_percent
base_chart_option_dict[chart_enum.CHART_TYPE_HBAR_STACK_PERCENT] = base_chart_option_hbar_stack_percent
base_chart_option_dict[chart_enum.CHART_TYPE_BARLINE] = base_chart_option_barline
base_chart_option_dict[chart_enum.CHART_TYPE_BARLINE_STACK] = base_chart_option_barline_stack
base_chart_option_dict[chart_enum.CHART_TYPE_LINE] = base_chart_option_line
base_chart_option_dict[chart_enum.CHART_TYPE_LINE_SHADOW] = base_chart_option_line_shadow
base_chart_option_dict[chart_enum.CHART_TYPE_LINE_STACK] = base_chart_option_line_stack
base_chart_option_dict[chart_enum.CHART_TYPE_PIE] = base_chart_option_pie
base_chart_option_dict[chart_enum.CHART_TYPE_MAP] = base_chart_option_map
base_chart_option_dict[chart_enum.CHART_TYPE_GAUGE] = base_chart_option_gauge
base_chart_option_dict[chart_enum.CHART_TYPE_RADAR] = base_chart_option_radar
base_chart_option_dict[chart_enum.CHART_TYPE_SCATTER] = base_chart_option_scatter
base_chart_option_dict[chart_enum.CHART_TYPE_TREEMAP] = base_chart_option_treemap
base_chart_option_dict[chart_enum.CHART_TYPE_GAUGE] = base_chart_option_gauge
base_chart_option_dict[chart_enum.CHART_TYPE_INDEX_CARD] = base_chart_option_index_card
base_chart_option_dict[chart_enum.CHART_TYPE_SCORE_CARD] = base_chart_option_score_card

let getOption = function (charttype) {
  let base_option = base_chart_option_dict[charttype]
  if (JSON.stringify(base_option) !== '{}') {
    return _.cloneDeep(base_option)
  }
  return {}
}
module.exports.getOption = getOption