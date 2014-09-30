'use strict'

var toStyle = require('../src/toStyleObject')

describe('toStyleObject', function(){

    it('should transform border with numeric value', function(){
        toStyle({
            border: 20
        })
        .should
        .eql({
            'border-width': '20px'
        })
    })

    it('should transform nested border', function(){
        toStyle({
            border: {
                color: 'red',
                width: 2,
                style: 'solid'
            }
        })
        .should
        .eql({
            'border-width': '2px',
            'border-color': 'red',
            'border-style': 'solid',
        })
    })

    it('should transform nested padding', function(){
        toStyle({
            padding: {
                top: 3,
                bottom: 2
            }
        })
        .should
        .eql({
            'padding-top': '3px',
            'padding-bottom': '2px'
        })
    })

    it('should transform objects with multiple keys', function(){
        toStyle({
            padding: {
                top: 3,
                bottom: 2
            },
            border: '1px solid red',
            margin: 4,
            borderRadius: 5
        })
        .should
        .eql({
            'padding-top': '3px',
            'padding-bottom': '2px',
            'border': '1px solid red',
            'margin': '4px',
            'border-radius': '5px'
        })
    })

    it('should work fine with zIndex', function(){
        toStyle({
            'zIndex': 4
        }, { camelize: true})
        .should
        .eql({
            'zIndex': 4
        })
    })
})