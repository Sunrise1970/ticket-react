import React from 'react';
import { SearchBar, City, ScenicList } from '../../components'

let searchList = [
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my commsssssssssent"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"},
    {image:"http://pic.lvmama.com//uploads/pc/place2/2016-01-27/7ab0b41a-c52e-41dd-8632-85bce8e6e040.jpg", body:"thi is my comment"}
];
export default function Home () {
    return (
        <div>
            <SearchBar history={history}/>
            <City />
            <ScenicList searchList={searchList} />
        </div>
    )
}