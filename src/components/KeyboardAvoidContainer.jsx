import { Layout } from '@ui-kitten/components'
import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native'

const KeyboardAvoidContainer = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout level='1' style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1}}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
            {children}
        </KeyboardAvoidingView>
      </Layout>
    </SafeAreaView>
  )
}

export default KeyboardAvoidContainer
