function calculateCircleArea(radius: number): number {
    const pi: number = Math.PI;
    return pi * Math.pow(radius, 2);
}

// Example usage:
const radius: number = 5;
const area: number = calculateCircleArea(radius);
console.log("The area of the circle is:", area);