import { Input } from '@ui-kitten/components'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
/**
 *
 * @param {*} data Array donde se desea buscar
 * @param {*} setData Hook para guardar la informacion guardada
 * @param {*} type Campo que se desea buscar
 * @param {*} text
 * @returns
 */
const Search = ({data, setData, type}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: ''
    }
  })

  const SearchData = (form) => {
    if (form.search !== '') {
      const newData = data.filter((item) => {
        const itemData = item[type]
          ? item[type].toUpperCase()
          : ''.toUpperCase()
        const textData = form.search.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setData(newData)
    } else {
      setData(data)
    }
  }

  const IconAccesory = () => (
    <TouchableOpacity onPress={handleSubmit(SearchData)}>
      <AntDesign name='search1' size={24} color='black' />
    </TouchableOpacity>
  )
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            style={{ marginBottom: 10 }}
            placeholder='Buscar'
            value={value}
            onChangeText={onChange}
            accessoryRight={IconAccesory}
            size='medium'
          />
        )}
        name='search'
      />
    </View>
  )
}

export default Search
