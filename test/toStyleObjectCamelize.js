'use strict'

var to = require('../src/toStyleObject')
var toStyle = function(obj){
    return to(obj, {camelize: true})
}

describe('toStyleObject:camelize', function(){

    it('should transform borderRadius correctly', function(){
        toStyle({
            borderRadius: 5
        })
        .should
        .eql({
            'borderRadius': '5px'
        })
    })

    it('should transform correcly a nested object', function(){
        toStyle({
            'border-radius': 10,
            border: {
                color: 'red'
            },
            'padding-top': 10
        })
        .should
        .eql({
            'borderRadius': '10px',
            'borderColor': 'red',
            'paddingTop': '10px'
        })
    })

    it('should work correctly on a nested border', function() {
        toStyle({
            border: {
                color: 'red',
                width: 2,
                style: 'solid'
            }
        })
        .should
        .eql({
            'borderWidth': '2px',
            'borderColor': 'red',
            'borderStyle': 'solid',
        })
    })

    it('should work correctly on a nested border with radius', function() {
        toStyle({
            border: {
                color: 'red',
                width: 2,
                style: 'solid',
                radius: {
                    top: 1,
                    bottom: {
                        left: 3,
                        right: 4
                    }
                }
            }
        })
        .should
        .eql({
            'borderWidth': '2px',
            'borderColor': 'red',
            'borderStyle': 'solid',
            'borderTopLeftRadius': '1px',
            'borderTopRightRadius': '1px',
            'borderBottomLeftRadius': '3px',
            'borderBottomRightRadius': '4px'
        })
    })

})