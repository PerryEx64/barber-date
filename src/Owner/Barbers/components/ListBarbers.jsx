import { List, ListItem, Toggle } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { selectBarbers } from '../../../../app/features/barberSlice'
import { UpdateStatusBarber } from '../../../../services/Owner'

const ListBarbers = ({ idBarbershop }) => {
  const barbers = useSelector(selectBarbers)

  const renderItemAccessory = (status, idBarber) => (
    <Toggle
      checked={status}
      status={status == true ? 'info' : 'warning'}
      onChange={(checked) =>
        UpdateStatusBarber(idBarbershop, idBarber, checked)
      }
    />
  )

  const renderItem = ({ item }) => (
    <ListItem
      title={`${item.name}`}
      description={`${item.id}`}
      accessoryRight={renderItemAccessory(item.enabled, item.id)}
    />
  )

  return (
    <List style={styles.container} data={barbers} renderItem={renderItem} />
  )
}

export default ListBarbers

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    maxHeight: '80%',
    backgroundColor: 'white'
  }
})
