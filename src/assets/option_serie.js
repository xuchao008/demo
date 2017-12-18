// from api.bi.chart import enum as chart_enum
// import copy
const _ = require('lodash')
let base_serie_option_dict = {}
const chart_enum = require('./enym.js');

module.exports.get_base_serie_option = function (serietype) {
  base_option = base_serie_option_dict[serietype]
  if (JSON.stringify(base_option) !== '{}') {
    return _.cloneDeep(base_option)
  }
  return {}
}

let base_serie_option_bar = {
  'name': '',
  'type': 'bar',
  'barMaxWidth': '100',
  'animation': false,
  'label': {
    'normal': {
      'show': true,
      'position': 'top'
    }
  },
  'itemStyle': {
    'normal': {
    }
  }
}

let base_serie_option_bar_stack = {
  'name': '',
  'type': 'bar',
  'barMaxWidth': '100',
  'animation': false,
  'stack': "stack",
  'barGap': "0%",
  'label': {
    'normal': {
      'show': true,
    }
  },
}

let base_serie_option_bar_percent = {
  'name': '',
  'type': 'bar',
  'barMaxWidth': '100',
  'animation': false,
  'barGap': "0%",
  'label': {
    'normal': {
      'show': true,
      'position': 'top'
    }
  },
}

let base_serie_option_bar_stack_percent = {
  'name': '',
  'type': 'bar',
  'barMaxWidth': '100',
  'animation': false,
  'stack': "stack",
  'barGap': "0%",
  'label': {
    'normal': {
      'show': true,
    }
  },
}

let base_serie_option_hbar = {
  'name': '',
  'type': 'bar',
  'barMaxWidth': '100',
  'animation': false,
  'label': {
    'normal': {
      'show': true,
      'position': 'right'
    }
  },
}

let base_serie_option_hbar_stack = {
  'name': '',
  'type': 'bar',
  'barMaxWidth': '100',
  'animation': false,
  'stack': "stack",
  'label': {
    'normal': {
      'show': true,
    }
  },
}

let base_serie_option_hbar_percent = {
  'name': '',
  'type': 'bar',
  'barMaxWidth': '100',
  'animation': false,
  'label': {
    'normal': {
      'show': true,
      'position': 'right'
    }
  },
}

let base_serie_option_hbar_stack_percent = {
  'name': '',
  'type': 'bar',
  'barMaxWidth': '100',
  'animation': false,
  'stack': "stack",
  'label': {
    'normal': {
      'show': true,
    }
  },
}

let base_serie_option_barline = base_serie_option_bar

let base_serie_option_barline_stack = base_serie_option_bar_stack

let base_serie_option_barline_line = {
  'name': '',
  'type': 'line',
  'symbol': 'emptyCircle',
  'showSymbol': false,
  'showAllSymbol': true,
  'animation': false,
  'yAxisIndex': 1,
}

let base_serie_option_line = {
  'name': '',
  'type': 'line',
  'symbol': 'emptyCircle',
  'showSymbol': false,
  'showAllSymbol': true,
  'animation': false,
}

let base_serie_option_line_shadow = {
  'name': '',
  'type': 'line',
  'symbol': 'emptyCircle',
  'showSymbol': false,
  'showAllSymbol': true,
  'animation': false,
  'areaStyle': {
    'normal': {
      'opacity': 0.4
    }
  },
}

let base_serie_option_line_stack = {
  'name': '',
  'type': 'line',
  'symbol': 'emptyCircle',
  'showSymbol': false,
  'showAllSymbol': true,
  'animation': false,
  'areaStyle': {
    'normal': {
      'opacity': 0.4
    }
  },
  'stack': 'stack',
}

let base_serie_option_pie = {
  'name': '',
  'data': [],
  'type': 'pie',
  'radius': '55%',
  'center': ['50%', '60%'],
  'label': {
    'normal': {
      'formatter': "{c} ({d} %)"
    }
  },
  'itemStyle': {
    'emphasis': {
      'shadowBlur': 10,
      'shadowOffsetX': 0,
      'shadowColor': 'rgba(0, 0, 0, 0.5)'
    }
  },
  'animation': false,
  'z': 2
}

let base_serie_option_radar = {
  'name': '',
  'type': 'radar',
  'data': [],
  'animation': false,
  'symbol': 'null'
}

let base_serie_option_map = {
  "name": '',
  "type": 'map',
  "coordinateSystem": 'bmap',
  "roam": false,
  "label": {
    "normal": {
      "show": false
    },
    "emphasis": {
      "show": true
    }
  },
  "data": []
}

let base_serie_option_gauge = {
  'type': 'gauge',
  'startAngle': 220,
  'endAngle': -40,
  'min': 0,
  'max': 200,
  'precision': 0,
  'splitNumber': 4,
  'axisLine': {
    'show': true,
    'lineStyle': {
      'color': [[0, '#53a4f4'], [1, '#53a4f4']],
      'width': 30
    }
  },
  'axisTick': {
    'show': true,
    'splitNumber': 10,
    'length': 8,
    'lineStyle': {
      'color': '#eee',
      'width': 1,
      'type': 'solid'
    }
  },
  'axisLabel': {
    'show': true,
    'textStyle': {
      'color': '#333',
      'fontSize': 16
    }
  },
  'splitLine': {
    'show': true,
    'length': 30,
    'lineStyle': {
      'color': '#eee',
      'width': 2,
      'type': 'solid'
    }
  },
  'pointer': {
    'length': '80%',
    'width': 8,
    'color': '#506078'
  },
  'title': {
    'show': true,
    'offsetCenter': ['0%', 130],
    'textStyle': {
      'color': '#616161',
      'fontSize': 20
    }
  },
  'detail': {
    'show': true,
    'backgroundColor': 'rgba(0,0,0,0)',
    'offsetCenter': ['0%', 70],
    'textStyle': {
      'color': '#484848',
      'fontSize': 60,
      'fontWeight': 'bold'
    }
  },
  'data': []
}

let base_serie_option_score_card = {
  'name': '',
  'data': []
}

let base_serie_option_scatter = {
  'name': '',
  //'data': [[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
  'type': 'scatter',
  'symbolSize': '$$self.sizeFunc$$',
  'label': {
    'emphasis': {
      'show': true,
      'formatter': '$$self.formatterFunc$$',
      'position': 'top'
    }
  },
  'itemStyle': {
    'normal': {
      'shadowBlur': 10,
      'shadowColor': 'rgba(120, 36, 50, 0.5)',
      'shadowOffsetY': 5
    }
  },
  'animation': false
}

let base_serie_option_treemap = {
  'name': '矩形图',
  'type': 'treemap',
  'itemStyle': {
    'normal': {
      'label': {
        'show': true,
        'formatter': "{b}"
      },
      'borderWidth': 1
    },
    'emphasis': {
      'label': {
        'show': true
      }
    }
  },
  'data': [
  ],
  'animation': false
}

let base_serie_option_index_card = {};
base_serie_option_dict[chart_enum.CHART_TYPE_BAR] = base_serie_option_bar
base_serie_option_dict[chart_enum.CHART_TYPE_BAR_STACK] = base_serie_option_bar_stack
base_serie_option_dict[chart_enum.CHART_TYPE_BAR_PERCENT] = base_serie_option_bar_percent
base_serie_option_dict[chart_enum.CHART_TYPE_BAR_STACK_PERCENT] = base_serie_option_bar_stack_percent
base_serie_option_dict[chart_enum.CHART_TYPE_HBAR] = base_serie_option_hbar
base_serie_option_dict[chart_enum.CHART_TYPE_HBAR_STACK] = base_serie_option_hbar_stack
base_serie_option_dict[chart_enum.CHART_TYPE_HBAR_PERCENT] = base_serie_option_hbar_percent
base_serie_option_dict[chart_enum.CHART_TYPE_HBAR_STACK_PERCENT] = base_serie_option_hbar_stack_percent
base_serie_option_dict[chart_enum.CHART_TYPE_BARLINE] = base_serie_option_barline
base_serie_option_dict[chart_enum.CHART_TYPE_BARLINE_STACK] = base_serie_option_barline_stack
base_serie_option_dict["barline_line"] = base_serie_option_barline_line
base_serie_option_dict[chart_enum.CHART_TYPE_LINE] = base_serie_option_line
base_serie_option_dict[chart_enum.CHART_TYPE_LINE_SHADOW] = base_serie_option_line_shadow
base_serie_option_dict[chart_enum.CHART_TYPE_LINE_STACK] = base_serie_option_line_stack
base_serie_option_dict[chart_enum.CHART_TYPE_PIE] = base_serie_option_pie
base_serie_option_dict[chart_enum.CHART_TYPE_MAP] = base_serie_option_map
base_serie_option_dict[chart_enum.CHART_TYPE_GAUGE] = base_serie_option_gauge
base_serie_option_dict[chart_enum.CHART_TYPE_SCORE_CARD] = base_serie_option_score_card
base_serie_option_dict[chart_enum.CHART_TYPE_RADAR] = base_serie_option_radar
base_serie_option_dict[chart_enum.CHART_TYPE_SCATTER] = base_serie_option_scatter
base_serie_option_dict[chart_enum.CHART_TYPE_TREEMAP] = base_serie_option_treemap
base_serie_option_dict[chart_enum.CHART_TYPE_INDEX_CARD] = base_serie_option_index_card

