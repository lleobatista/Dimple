import React from 'react'
import {Calendar, LocaleConfig} from 'react-native-calendars'

const CalendarView = () => {  

  LocaleConfig.locales['pt'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.', 'Jul.', 'Ago.', 'Set..', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: 'Hoje\'hj'
  };

  LocaleConfig.defaultLocale = 'pt';

  return(
    <Calendar
      minDate={new Date()}
      maxDate={'2021-05-30'}
      hideExtraDays={true}
      disableMonthChange={true}
      onMonthChange={(month) => {console.log('month changed', month)}}
      monthFormat={'MMMM yyyy'}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      onDayPress={(day) => {console.log('selected day', day)}}
      
      style={{
        height:370,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
	        height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}
      theme={{
        backgroundColor: '#3A64FF',
        calendarBackground: '#3A64FF',
        textSectionTitleColor: 'white',
        todayTextColor: 'white',
        dayTextColor: 'white',
        textDisabledColor: '#567AFF',
        disableArrowLeft: 'white',
        onPressArrowRight: 'white',
        monthTextColor: 'white',
        indicatorColor: 'blue',
        textDayFontWeight: '300',
        textMonthFontWeight: 'normal',
        textDayHeaderFontWeight: 'bold',
        textDayHeaderFontSize: 10,
        textDayFontSize: 15,
        textMonthFontSize: 25,
        'stylesheet.calendar.header': {
          arrowImage: {
            tintColor: 'white',
          }
        }
      }}
    />
  )
}

export default CalendarView;