import React, { useEffect, useState } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import './_style.scss';
import '../../../css/app.scss';

const ConsultantOperatorBarChart = ({ operatorStats, consultantStats }) => {

    const legendStyle = {
        marginTop: 5,
        position: 'relative'
    };

    const formatInput = () => {
        let arr = [];
        const anger = { name: "Enojo", Operador: (operatorStats.anger * 100).toFixed(2), Consultante: (consultantStats.anger  * 100).toFixed(2)};
        const happiness = { name: "Felicidad", Operador: (operatorStats.happiness * 100).toFixed(2), Consultante: (consultantStats.happiness  * 100).toFixed(2)};
        const neutrality = { name: "Neutralidad", Operador: (operatorStats.neutrality * 100).toFixed(2), Consultante: (consultantStats.neutrality * 100).toFixed(2) };
        const sadness = { name: "Tristeza", Operador: (operatorStats.sadness * 100).toFixed(2), Consultante: (consultantStats.sadness * 100).toFixed(2) };
        const fear = { name: "Miedo", Operador: (operatorStats.fear * 100).toFixed(2), Consultante: (consultantStats.fear * 100).toFixed(2) };
        arr.push(anger, happiness, neutrality, sadness, fear);
        return arr;
    }

    const data = formatInput();


    return (
        <>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend wrapperStyle={legendStyle} />
                <Bar dataKey="Consultante" fill="#8884d8" />
                <Bar dataKey="Operador" fill="#82ca9d" />
            </BarChart>
        </>
    );
}

export default ConsultantOperatorBarChart;