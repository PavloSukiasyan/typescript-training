/**
 * 
 * Calculate BMI
 * 
 * Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

 */

/**
 * Calculates the Body Mass Index (BMI) based on the given weight and height.
 *
 * @param {number} weight - The weight of the person in kilograms.
 * @param {number} height - The height of the person in meters.
 * @return {string} The BMI category: "Underweight", "Normal", "Overweight", or "Obese".
 */

export function bmi(weight: number, height: number): string {
  const bmiValue = weight / (height * height);
  if (bmiValue <= 18.5) return 'Underweight';
  if (bmiValue <= 25) return 'Normal';
  if (bmiValue <= 30) return 'Overweight';
  return 'Obese';
}

console.log(bmi(50, 1.71));
console.log(bmi(70, 1.71));
console.log(bmi(86, 1.71));
console.log(bmi(114, 1.71));
