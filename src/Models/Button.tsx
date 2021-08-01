export type ButtonPropType = {
    label: string,
    value: string,
    classes: string,
    onButtonPress: Function;
};

export type buttonListType = {
    name: string,
    value: string,
    classes: string
}

export const buttonList: Array<buttonListType> = [{
    name: 'AC',
    value: 'AC',
    classes: 'green',
},
{
    name: '±',
    value: '±',
    classes: 'green',
},
{
    name: '%',
    value: '%',
    classes: 'green',
},
{
    name: '÷',
    value: '/',
    classes: 'orange',
},
{
    name: '7',
    value: '7',
    classes: '',
}, {
    name: '8',
    value: '8',
    classes: '',
}
    , {
    name: '9',
    value: '9',
    classes: '',
},
{
    name: '×',
    value: '*',
    classes: 'orange',
}, {
    name: '4',
    value: '4',
    classes: '',
},
{
    name: '5',
    value: '5',
    classes: '',
},
{
    name: '6',
    value: '6',
    classes: '',
}, {
    name: '-',
    value: '-',
    classes: 'orange',
}, {
    name: '1',
    value: '1',
    classes: '',
}, {
    name: '2',
    value: '2',
    classes: '',
}, {
    name: '3',
    value: '3',
    classes: '',
}, {
    name: '+',
    value: '+',
    classes: 'orange',
},
{
    name: '0',
    value: '0',
    classes: '',
},
{
    name: '.',
    value: '.',
    classes: '',
},
{
    name: '=',
    value: '=',
    classes: 'orange long-btn',
}
];