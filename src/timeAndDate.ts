export type Room = {
  Building: string;
  Name: string;
  RoomId: string;
  Ds1: string[];
  Ds2: string[];
  Ds3: string[];
  Ds4: string[];
  Ds5: string[];
  Ds6: string[];
  Ds7: string[];
  Ds8: string[];
  Ds9: string[];
  Ds10: string[];
};

type DS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

function isDuringDs(ds: DS, date: Date) {
  const dsBegin = new Date(date.getTime());
  dsBegin.setHours(7, 10);
  dsBegin.setMinutes(dsBegin.getMinutes() + 110 * (ds - 1));
  const dsEnd = new Date(date.getTime());
  dsEnd.setHours(9, 0);
  dsEnd.setMinutes(dsEnd.getMinutes() + 110 * (ds - 1));

  if (date >= dsBegin && date <= dsEnd) {
    return true;
  } else {
    return false;
  }
}
export function getCurrentDs(date: Date) {
  let getCurrentDs = 1;
  // find current DS
  if (isDuringDs(1, date)) {
    getCurrentDs = 1;
  } else if (isDuringDs(2, date)) {
    getCurrentDs = 2;
  } else if (isDuringDs(3, date)) {
    getCurrentDs = 3;
  } else if (isDuringDs(4, date)) {
    getCurrentDs = 4;
  } else if (isDuringDs(5, date)) {
    getCurrentDs = 5;
  } else if (isDuringDs(6, date)) {
    getCurrentDs = 6;
  } else if (isDuringDs(7, date)) {
    getCurrentDs = 7;
  } else if (isDuringDs(8, date)) {
    getCurrentDs = 8;
  } else if (isDuringDs(9, date)) {
    getCurrentDs = 9;
  } else if (isDuringDs(10, date)) {
    getCurrentDs = 10;
  } else {
    getCurrentDs = 0;
  }
  return getCurrentDs;
}