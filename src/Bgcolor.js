import React, { useState } from 'react'
import Select from 'react-select'

function Bgcolor()
{

    var colors = [
        {
            value:1,
            label:"red"
        },
        {
            value:2,
            label:"blue"
        },
        {
            value:3,
            label:"orange"
        },
        {
            value:4,
            label:"green"
        },
        {
            value:5,
            label:"pink"
        },
        {
            value:6,
            label:"purple"
        },
        {
            value:7,
            label:"brown"
        },
        {
            value:8,
            label:"black"
        },
        {
            value:9,
            label:"violet"
        },
        ];
        var [setbgcolor,ddvalue]= useState(colors.label);
        var ddlhandle = e =>
        {
            ddvalue(e.label);
        }
    return(

        <div>
            <style>{'body {background-color:'+setbgcolor+';}'}</style>
            <Select options={colors} onChange={ddlhandle}></Select>
            <center>
               <b>The background color is : {setbgcolor}</b> 
            </center>
        </div>
    );
}
export default Bgcolor;