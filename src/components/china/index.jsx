import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import chinaJson from 'echarts/map/json/china.json';
// 引入地图数据...
function getGeoCoordMap(data) {
    const mapName = data || 'china';
    /* 获取地图数据 */
    const geoCoordMap = {};
    const mapFeatures = echarts.getMap(mapName).geoJson.features;
    mapFeatures.forEach((v) => {
        const { name } = v.properties; // 地区名称
        geoCoordMap[name] = v.properties.cp; // 地区经纬度
    });
    return geoCoordMap;
}

function convertData(data) {
    // 转换数据
    const geoCoordMap = getGeoCoordMap('china');
    const res = [];
    for (let i = 0; i < data.length; i++) {
        const geoCoord = geoCoordMap[data[i].name]; // 数据的名字对应的经纬度
        if (geoCoord) {
            // 如果数据data对应上，
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
}
const maxSize4Pin = 30;
const minSize4Pin = 10;
echarts.registerMap('china', chinaJson);

class EchartsMap extends React.Component {
    getOption() {
        const data = [
            { name: '北京', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '天津', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '上海', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '重庆', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '河北', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '安徽', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '新疆', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '浙江', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '江西', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '山西', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '吉林', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '福建', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '广东', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '西藏', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '四川', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '宁夏', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '香港', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '澳门', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
            { name: '内蒙古', value: Math.round(Math.random() * 1000), device_number: 40, user_number: 10 },
        ];
        const valueList = data.map((o) => o.value);
        const max = Math.max(...valueList);
        const min = 0;
        const option = {
            tooltip: {
                trigger: 'item',
                formatter(params) {
                    // 鼠标滑过显示的数据
                    let toolTiphtml = '';
                    for (let i = 0; i < data.length; i++) {
                        if (params.name === data[i].name) {
                            toolTiphtml += `${data[i].name}<br><i style="display:inline-block; width: 10px; height: 10px; background: #F8BA00;margin-right: 10px;"></i>用户：${data[i].user_number}<br><i style="display:inline-block; width: 10px; height: 10px; background: #FF3BD9;margin-right: 10px;"></i>设备：${data[i].device_number}`;
                        }
                    }
                    return toolTiphtml;
                },
            },
            visualMap: {
                show: true,
                min,
                max,
                left: '2%',
                top: 'bottom',
                text: [max, min], // 文本，默认为数值文本
                calculable: false,
                seriesIndex: 1,
                orient: 'horizontal',
                inRange: {
                    color: ['#DEE7F7', '#5988D6'], // 渐变
                },
                textStyle: {
                    color: '#555',
                },
            },
            geo: {
                show: true,
                map: 'china',
                roam: false,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                top: 'center', // 组件距离容器的距离
                itemStyle: {
                    normal: {
                        areaColor: '#DEE7F7', // 没有值得时候颜色
                        borderColor: '#097bba',
                    },
                    emphasis: {
                        areaColor: '#FF3BD9', // 鼠标滑过选中的颜色
                    },
                },
            },
            series: [
                {
                    name: '散点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbolSize: '1',
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#895139', // 字体颜色
                        },
                    },
                    data,
                },
                {
                    name: 'iphone4',
                    type: 'map',
                    mapType: 'china',
                    selectedMode: 'single',
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    itemStyle: {
                        // 默认区域颜色
                        normal: {
                            borderWidth: 1, // 区域边框宽度
                            borderColor: '#fff', // 区域边框颜色
                            areaColor: '#DEE7F7', // 区域颜色
                        },
                        // 鼠标移到区域的颜色
                        emphasis: {
                            borderWidth: 0.5,
                            borderColor: '#E7CDFC',
                            areaColor: '#FF3BD9',
                        },
                    },
                    data,
                },
                {
                    name: 'iphone5',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    symbol: 'circle',
                    symbolSize(val) {
                        const a = (maxSize4Pin - minSize4Pin) / (max - min);
                        let b = minSize4Pin - a * min;
                        b = maxSize4Pin - a * max;
                        return (a * val[2] + b) * 0.5;
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter() {
                                return '';
                            },
                            textStyle: {
                                color: '#fff',
                                fontSize: 9,
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#FFC400', // 标志颜色'#F62157'
                        },
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
            ],
        };
        return option;
    }

    render() {
        return (
            <div style={{ height: '500px' }}>
                <ReactEcharts
                    option={this.getOption()}
                    notMerge
                    lazyUpdate
                    theme=""
                    onChartReady={this.onChartReadyCallback}
                    style={{ height: '500px' }}
                />
            </div>
        );
    }
}

export default EchartsMap;
