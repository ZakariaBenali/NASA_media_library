/**
 * Function to concat two classNames
 * @param  {string} existingClass
 * @param  {string} newClass?
 * @returns string
 */
export const cls = (existingClass: string, newClass?: string): string => {
	return newClass ? `${existingClass} ${newClass}` : existingClass;
};
