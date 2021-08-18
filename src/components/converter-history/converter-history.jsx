import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {resetTable} from '../../store/action';
import dayjs from 'dayjs';
import {RowsInTableConverterHistory, ScreenWidth} from '../../const';

const ConverterHistory = () => {

  const dispatch = useDispatch();

  const table = useSelector((state) => state.LOCAL.table);

  const getListValues = (values) => {
    const windowInnerWidth = window.innerWidth;
    const rows = windowInnerWidth >= ScreenWidth.TABLET ? RowsInTableConverterHistory.TABLET : RowsInTableConverterHistory.MOBILE;
    const subarray = [];
    for (let i = 0; i < Math.ceil(values.length / rows); i++) {
      subarray[i] = values.slice((i * rows), (i * rows) + rows);
    }
    return subarray;
  };

  const getTableValues = () => {
    const valuesList = getListValues(table);
    return table.length !== 0
      ? <>
        {valuesList.map((values, i) =>
          (<div key={`history__column-${i}`} className="converter-history__column">
            {values.map((value, index) => {
              return <div key={`row-${dayjs(value.date).format(`DD-MM-YYYY`)}-${index}`} className="converter-history__row">
                <span className="converter-history__date">{dayjs(value.date).format(`DD.MM.YYYY`)}</span>
                <div className="converter-history__values">
                  <span className="converter-history__from">{value.valueInput} {value.valuteInput}</span>
                  <span className="converter-history__to">{value.valueOutput} {value.valuteOutput}</span>
                </div>
              </div>;
            })}
          </div>)
        )}
      </>
      : ``;
  };

  return <section className="converter-history">
    <h3 className="converter-history__title">История конвертаций</h3>
    <div className="converter-history__table">
      {getTableValues()}
    </div>
    <button className="converter-history__clear button" onClick={() => dispatch(resetTable())}>Очистить историю</button>
  </section>;
};

export default ConverterHistory;
