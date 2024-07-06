import Papa from 'papaparse';

export interface DealData {
  Image: string;
  Title: string;
  Description: string;
  Conditions: string;
  Expiration: string;
  Link: string;
}

export const fetchSheetData = async (url: string): Promise<DealData[]> => {
  try {
    const response = await fetch(url);
    const csvText = await response.text();
    const data = Papa.parse<DealData>(csvText, { header: true }).data;
    return data;
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return [];
  }
};