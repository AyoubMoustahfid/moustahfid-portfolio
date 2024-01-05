"use client";

import React from 'react';

const generateCirclePositions = (rows, columns, circleRadius, gap) => {
    const circlePositions = [];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            const cx = col * (2 * circleRadius + gap) + circleRadius;
            const cy = row * (2 * circleRadius + gap) + circleRadius;
            circlePositions.push({ cx, cy });
        }
    }

    return circlePositions;
};

const DynamicCirclesSVG = ({ size, rows, columns, circleRadius, gap }) => {
    const circlePositions = generateCirclePositions(rows, columns, circleRadius, gap);

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {circlePositions.map((position, index) => (
                <circle
                    key={index}
                    cx={position.cx}
                    cy={position.cy}
                    r={circleRadius}
                    fill="white"
                />
            ))}
        </svg>
    );
};

export default DynamicCirclesSVG;
