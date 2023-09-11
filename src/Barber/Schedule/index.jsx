import { Button, Layout, Text, Toggle } from '@ui-kitten/components'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Avatar from '../../components/Avatar'
import { Colors } from '../../utils/Colors'
import useSchedule from '../hooks/useSchedule'

const Schedule = () => {
  const {
    onSaveSchedule,
    onCreateSchedule,
    onChangeChecked,
    schedule,
    change
  } = useSchedule()

  const listHeader = () => (
    <Text category='label' style={{ textAlign: 'center', marginTop: 10 }}>
      {'Horarios Disponibles'}
    </Text>
  )

  const renderItemSchedule = ({ item, index }) => (
    <View key={index} style={styles.contentList}>
      <Text>{item.hour}</Text>
      <Toggle
        checked={item.status}
        onChange={(checked) => onChangeChecked(checked, index)}
      />
    </View>
  )

  return (
    <Layout level='1' style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text category='h6'>{'Horario de atencion'}</Text>
        <Text category='s1' status='danger'>
          {'Selecciona los horarios que atenderas el dia de hoy!'}
        </Text>
      </View>
      {schedule == null ? (
        <Button style={styles.btn} status='info' onPress={onCreateSchedule}>
          {'Crear Calendario'}
        </Button>
      ) : (
        <View style={styles.content}>
          <Avatar avatar={1} size={'md'} />
          <FlatList
            data={schedule}
            style={styles.flatList}
            ListHeaderComponent={listHeader}
            renderItem={renderItemSchedule}
          />

          {change == 0 ? (
            <></>
          ) : (
            <Button
              disabled={change == 2 ? true : false}
              style={styles.btnSave}
              status='info'
              appearance='outline'
              onPress={onSaveSchedule}
            >
              {'Guardar Horario'}
            </Button>
          )}
        </View>
      )}
    </Layout>
  )
}

export default Schedule

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 20,
    marginTop: 15
  },
  btn: {
    marginHorizontal: 15,
    marginTop: 25
  },
  flatList: {
    marginHorizontal: 15,
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 25,
    shadowRadius: 10,
    borderWidth: 1,
    marginTop: 55,
    gap: 20,
    position: 'relative',
    borderRadius: 15,
    borderColor: Colors['bg-200']
  },
  contentList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 15
  },
  btnSave: {
    marginTop: 20,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
