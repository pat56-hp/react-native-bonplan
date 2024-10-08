import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import ProfileSheet from './ProfileSheet';

registerSheet('profileSheet', ProfileSheet);
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'profileSheet': SheetDefinition<{
      payload: {
        user: Object
      }
    }>;
  }
}
 
export {};