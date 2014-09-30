'use strict'

var toStyle = require('../src/toStyleString')

describe('toStyleString', function(){

    it('should transform border with numeric value', function(){
        toStyle({
            border: 20
        })
        .should
        .eql('border-width: 20px')
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
        .eql([
            'border-color: ', 'red; ',
            'border-width: ', '2px; ',
            'border-style: ', 'solid',
        ].join(''))
    })

    it('should transform nested padding', function(){
        toStyle({
            padding: {
                top: 3,
                bottom: 2
            }
        })
        .should
        .eql([
            'padding-top: ', '3px; ',
            'padding-bottom: ', '2px'
        ].join(''))
    })

    it('should transform objects with multiple keys', function(){
        toStyle({
            padding: {
                top: 3,
                bottom: 2
            },
            border: '1px solid red',
            margin: 4
        })
        .should
        .eql([
            'padding-top: ', '3px; ',
            'padding-bottom: ', '2px; ',
            'border: ', '1px solid red; ',
            'margin: ', '4px'
        ].join(''))
    })

    it('should transform objects with multiple keys - var 2', function(){
        toStyle({
            border: {
                width: 1,
                color: 'red'
            },
            padding: 4,
            margin: {
                top: 5
            }
        })
        .should
        .eql([
            'border-width: 1px; ',
            'border-color: red; ',
            'padding: 4px; ',
            'margin-top: 5px',
        ].join(''))
    })

})