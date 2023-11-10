import { Layout, Spinner, Text } from '@ui-kitten/components'
import React from 'react'
import { Alert, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import tailwind from 'twrnc'
import { selectBarberChosen } from '../../../../app/features/barberSlice'
import { GetScheduleUser } from '../../../../services/User'
import Avatar from '../../../components/Avatar'
import { Colors } from '../../../utils/Colors'
import FooterComponent from './components/FooterComponent'
import ListHeader from './components/ListHeader'
import SelectSchedule from './components/SelectSchedule'

const Schedule = () => {
  const barberChosen = useSelector(selectBarberChosen)
  const [schedule, setSchedule] = React.useState([])
  const [choose, setChoose] = React.useState(0)
  const [chooseHour, setChooseHour] = React.useState('')

  React.useEffect(() => {
    GetScheduleUser(barberChosen.id)
      .then((res) => {
        setSchedule(res)
      })
      .catch((err) => {
        Alert.alert(err)
      })
  }, [])

  return (
    <Layout level='1' style={styles.container}>
      <ScrollView horizontal={false}>
        <Text category='h5' style={tailwind`text-center my-3`}>
          {'Disponibilidad de Horarios'}
        </Text>

        <View style={styles.content}>
          <Avatar avatar={barberChosen.avatar} size={'lg'} />

          <FlatList
            style={styles.flatList}
            data={schedule.reservation}
            ListEmptyComponent={() => (
              <View style={tailwind`self-center my-3`}>
                <Spinner status='warning' style={tailwind`ml-auto mr-auto`} />
              </View>
            )}
            ListHeaderComponent={() => <ListHeader name={barberChosen.name} />}
            ListFooterComponent={() => (
              <FooterComponent chooseHour={chooseHour} />
            )}
            renderItem={({ item, index }) => (
              <SelectSchedule
                choose={choose}
                index={index}
                item={item}
                setChoose={setChoose}
                setChooseHour={setChooseHour}
              />
            )}
          />
        </View>
      </ScrollView>
    </Layout>
  )
}

export default Schedule

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  flatList: {
    marginHorizontal: 15,
    padding: 25,
    shadowRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 65,
    gap: 20,
    position: 'relative',
    borderRadius: 15,
    borderColor: Colors['bg-200']
  }
})
