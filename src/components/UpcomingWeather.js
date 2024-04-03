import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    dt_text: '2023-02-18 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_text: '2023-02-18 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_text: '2023-02-18 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
]

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default UpcomingWeather
