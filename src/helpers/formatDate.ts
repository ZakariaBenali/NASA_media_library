import dayjs from 'dayjs/esm';
/** Function to format supported and unsupported date formats coming from NASA API
 * @param  {string} date?
 */
export const formatDate = (date: string): string => {
	const hasTime = date.includes(' ') || date.includes('T');
	const d = hasTime ? date.split(/[ T\s]/)[0] : date;
	const isUnsupported = d.includes(':');
	const newDate = isUnsupported ? d.replaceAll(':', '-') : d;
	const newFormat = 'MMMM D, YYYY';
	return dayjs(newDate).isValid() ? dayjs(newDate).format(newFormat) : date;
};
