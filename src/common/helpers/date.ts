import moment from 'moment';

export const getLast30Days = () => {
  const today = moment();
  const thirtyDaysAgo = moment().subtract(30, 'days');
  return { $gte: thirtyDaysAgo.toDate(), $lte: today.toDate() };
};

export const getLastWeek = () => {
  const today = moment();
  const sevenDaysAgo = moment().subtract(7, 'days');
  return { $gte: sevenDaysAgo.toDate(), $lte: today.toDate() };
};

export const getLastYear = () => {
  const today = moment();
  const oneYearAgo = moment().subtract(1, 'year');
  return { $gte: oneYearAgo.toDate(), $lte: today.toDate() };
};

export const getAllTime = () => {
  const today = moment();
  const oneYearAgo = moment().subtract(100, 'year');
  return { $gte: oneYearAgo.toDate(), $lte: today.toDate() };
};

export const getLastHour = () => {
  const today = moment();
  const oneHourAgo = moment().subtract(1, 'hour');
  return { $gte: oneHourAgo.toDate(), $lte: today.toDate() };
};

export const getSortDate = (sortDate: string) => {
  switch (sortDate) {
    case 'last30Days':
      return getLast30Days();
    case 'lastWeek':
      return getLastWeek();
    case 'lastYear':
      return getLastYear();
    default:
      return getAllTime();
  }
};
