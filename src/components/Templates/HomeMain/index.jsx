import React, { useState } from 'react';
import { LineGraph } from './../../index';

function HomeMain() {
    const testList = ['奈良県', '大阪府', '京都府', '兵庫県'];
    return (
        <main>
            <ul>
                {testList
                    ? testList.map((List, index) => (
                          <li key={index}>
                              <label htmlFor="">{List}</label>
                          </li>
                      ))
                    : ''}
            </ul>
            <LineGraph />
        </main>
    );
}

export default HomeMain;
