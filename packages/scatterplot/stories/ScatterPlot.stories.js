import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ScatterPlot } from '../index'

const sampleData = [
    {
        id: 'girls low',
        data: [
            { id: 0, x: 0, y: 2.0 },
            { id: 1, x: 1, y: 2.1 },
            { id: 2, x: 2, y: 2.3 },
            { id: 3, x: 3, y: 2.5 },
            { id: 4, x: 4, y: 2.7 },
            { id: 5, x: 5, y: 2.9 },
            { id: 6, x: 6, y: 3.0 },
            { id: 7, x: 7, y: 3.2 },
            { id: 8, x: 8, y: 3.3 },
            { id: 9, x: 9, y: 3.5 },
            { id: 10, x: 10, y: 3.6 },
            { id: 11, x: 11, y: 3.8 },
            { id: 12, x: 12, y: 3.9 },
            { id: 13, x: 13, y: 4.0 },
        ],
    },
    {
        id: 'girls med',
        data: [
            { id: 0, x: 0, y: 3.2 },
            { id: 1, x: 1, y: 3.3 },
            { id: 2, x: 2, y: 3.6 },
            { id: 3, x: 3, y: 3.8 },
            { id: 4, x: 4, y: 4.1 },
            { id: 5, x: 5, y: 4.3 },
            { id: 6, x: 6, y: 4.6 },
            { id: 7, x: 7, y: 4.8 },
            { id: 8, x: 8, y: 5.0 },
            { id: 9, x: 9, y: 5.2 },
            { id: 10, x: 10, y: 5.4 },
            { id: 11, x: 11, y: 5.5 },
            { id: 12, x: 12, y: 5.7 },
            { id: 13, x: 13, y: 5.8 },
        ],
    },
    {
        id: 'girls high',
        data: [
            { id: 0, x: 0, y: 4.8 },
            { id: 1, x: 1, y: 5.1 },
            { id: 2, x: 2, y: 5.4 },
            { id: 3, x: 3, y: 5.7 },
            { id: 4, x: 4, y: 6.1 },
            { id: 5, x: 5, y: 6.5 },
            { id: 6, x: 6, y: 6.8 },
            { id: 7, x: 7, y: 7.1 },
            { id: 8, x: 8, y: 7.3 },
            { id: 9, x: 9, y: 7.6 },
            { id: 10, x: 10, y: 7.8 },
            { id: 11, x: 11, y: 8.1 },
            { id: 12, x: 12, y: 8.3 },
            { id: 13, x: 13, y: 8.5 },
        ],
    },
    {
        id: 'boys low',
        data: [
            { id: 0, x: 0, y: 2.5 },
            { id: 1, x: 1, y: 2.6 },
            { id: 2, x: 2, y: 2.8 },
            { id: 3, x: 3, y: 3.1 },
            { id: 4, x: 4, y: 3.3 },
            { id: 5, x: 5, y: 3.5 },
            { id: 6, x: 6, y: 3.8 },
            { id: 7, x: 7, y: 4.0 },
            { id: 8, x: 8, y: 4.2 },
            { id: 9, x: 9, y: 4.4 },
            { id: 10, x: 10, y: 4.5 },
            { id: 11, x: 11, y: 4.7 },
            { id: 12, x: 12, y: 4.9 },
            { id: 13, x: 13, y: 5.0 },
        ],
    },
    {
        id: 'boys med',
        data: [
            { id: 0, x: 0, y: 3.3 },
            { id: 1, x: 1, y: 3.5 },
            { id: 2, x: 2, y: 3.8 },
            { id: 3, x: 3, y: 4.1 },
            { id: 4, x: 4, y: 4.4 },
            { id: 5, x: 5, y: 4.7 },
            { id: 6, x: 6, y: 4.9 },
            { id: 7, x: 7, y: 5.2 },
            { id: 8, x: 8, y: 5.4 },
            { id: 9, x: 9, y: 5.6 },
            { id: 10, x: 10, y: 5.8 },
            { id: 11, x: 11, y: 6.0 },
            { id: 12, x: 12, y: 6.2 },
            { id: 13, x: 13, y: 6.4 },
        ],
    },
    {
        id: 'boys high',
        data: [
            { id: 0, x: 0, y: 5.0 },
            { id: 1, x: 1, y: 5.3 },
            { id: 2, x: 2, y: 5.6 },
            { id: 3, x: 3, y: 6.0 },
            { id: 4, x: 4, y: 6.4 },
            { id: 5, x: 5, y: 6.8 },
            { id: 6, x: 6, y: 7.2 },
            { id: 7, x: 7, y: 7.5 },
            { id: 8, x: 8, y: 7.8 },
            { id: 9, x: 9, y: 8.0 },
            { id: 10, x: 10, y: 8.3 },
            { id: 11, x: 11, y: 8.5 },
            { id: 12, x: 12, y: 8.8 },
            { id: 13, x: 13, y: 9.0 },
        ],
    },
]

const commonProps = {
    width: 900,
    height: 500,
    margin: { top: 20, right: 20, bottom: 80, left: 80 },
    symbolSize: 10,
    axisBottom: {
        format: d => `week ${d}`,
    },
    axisLeft: {
        tickSize: 16,
        format: d => `${d} kg`,
    },
    data: sampleData,
    legends: [
        {
            anchor: 'bottom-left',
            direction: 'row',
            translateY: 60,
            itemWidth: 130,
            itemHeight: 12,
            symbolSize: 12,
            symbolShape: 'circle',
        },
    ],
}

const stories = storiesOf('ScatterPlot', module)

const importStatement = `
~~~javascript
import { ScatterPlot } from '@nivo/scatterplot'
~~~
`

stories.add(
    'default',
    withInfo(importStatement)(() => <ScatterPlot {...commonProps} data={[sampleData[1]]} />)
)

stories.add('multiple series', withInfo(importStatement)(() => <ScatterPlot {...commonProps} />))

stories.add(
    'alternative colors',
    withInfo(importStatement)(() => <ScatterPlot {...commonProps} colors="category10" />)
)

stories.add(
    'using time scales',
    withInfo(importStatement)(() => (
        <ScatterPlot
            {...commonProps}
            data={[
                {
                    id: 'apples',
                    data: [
                        { x: '2018-01-01', y: 7 },
                        { x: '2018-01-02', y: 5 },
                        { x: '2018-01-03', y: 11 },
                        { x: '2018-01-04', y: 9 },
                        { x: '2018-01-05', y: 12 },
                        { x: '2018-01-06', y: 16 },
                        { x: '2018-01-07', y: 13 },
                        { x: '2018-01-08', y: 13 },
                    ],
                },
                {
                    id: 'oranges',
                    data: [
                        { x: '2018-01-04', y: 14 },
                        { x: '2018-01-05', y: 14 },
                        { x: '2018-01-06', y: 15 },
                        { x: '2018-01-07', y: 11 },
                        { x: '2018-01-08', y: 10 },
                        { x: '2018-01-09', y: 12 },
                        { x: '2018-01-10', y: 9 },
                        { x: '2018-01-11', y: 7 },
                    ],
                },
            ]}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                precision: 'day',
            }}
            axisBottom={{
                format: '%b %d',
            }}
        />
    ))
)

stories.add(
    'symbol size',
    withInfo(importStatement)(() => <ScatterPlot {...commonProps} symbolSize={24} />)
)

stories.add(
    'varying symbol size',
    withInfo(importStatement)(() => (
        <ScatterPlot {...commonProps} symbolSize={d => d.x + d.y * 2} />
    ))
)

stories.add(
    'custom tooltip',
    withInfo(importStatement)(() => (
        <ScatterPlot
            {...commonProps}
            tooltip={({ id, serie, x, y, color }) => (
                <span style={{ color }}>
                    <strong>
                        {id} ({serie})
                    </strong>
                    : {`x: ${x}, y: ${y}`}
                </span>
            )}
            theme={{
                tooltip: {
                    container: {
                        background: '#333',
                    },
                },
            }}
        />
    ))
)

stories.add(
    'using mouse enter/leave',
    withInfo(importStatement)(() => (
        <ScatterPlot
            {...commonProps}
            onMouseEnter={(data, e) => {
                console.log({ is: 'mouseenter', data, event: e }) // eslint-disable-line
            }}
            onMouseLeave={(data, e) => {
                console.log({ is: 'mouseleave', data, event: e }) // eslint-disable-line
            }}
        />
    ))
)
