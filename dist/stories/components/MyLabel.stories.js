"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['normal', 'h1', 'h2', 'h3'],
            },
        },
        color: {
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary'],
            },
        },
        fontColor: { control: 'color' },
    },
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    tags: ['autodocs'],
};
exports.default = meta;
exports.Basic = {
    args: {
        size: 'normal',
        allCaps: false,
    },
};
exports.AllCaps = {
    args: {
        size: 'normal',
        allCaps: true,
    },
};
exports.Secondary = {
    args: {
        size: 'normal',
        color: 'secondary',
    },
};
exports.Tertiary = {
    args: {
        size: 'normal',
        color: 'tertiary',
    },
};
exports.CustomFontColor = {
    args: {
        size: 'h1',
        fontColor: '#5517ac',
    },
};
exports.CustomBackgroundColor = {
    args: {
        size: 'h1',
        fontColor: '#eeeeee',
        backgroundColor: '#000000',
    },
};
