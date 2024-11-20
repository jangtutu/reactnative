import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Toast from 'react-native-toast-message';

interface EvenNumberTitleProps {
  isEven: boolean;
}

interface propType {
  clickCount : number;
  onClick: ()=> void;
}

export default function App() {

  const [clickCount, setClickCount] = useState<number>(0);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0');
    return `#${randomColor}`;
  };

  function SomeComponent(props: propType) {
    return (
      <>
        <Text style={[{fontWeight: 'bold'}, {fontSize: 20}, {backgroundColor: generateColor()}]}>SomeComponent</Text>
        <Text style={[{fontWeight: 'bold'}, {fontSize: 20}]}>들어온 데이터 {props.clickCount}</Text>
        <Button title="버튼!" onPress={() => {
          props.onClick()
      }}/>
      <NestedComponent01 clickCount={props.clickCount} onClick={()=>{ props.onClick() }}/>
      <NestedComponent02 clickCount={props.clickCount} onClick={()=>{ props.onClick() }}/>
      </>
    );
  }

  function NestedComponent01(props: propType) {
    return (
      <>
        <Text style={[{fontWeight: 'bold'}, {fontSize: 20}, {backgroundColor: generateColor()}]}>NestedComponent01</Text>
        <Text style={[{fontWeight: 'bold'}, {fontSize: 20}]}>들어온 데이터 {props.clickCount}</Text>
        <Button title="버튼!" onPress={() => {
          props.onClick()
      }}/>
      </>
    );
  }

  function NestedComponent02(props: propType) {
    return (
      <>
        <Text style={[{fontWeight: 'bold'}, {fontSize: 20}, {backgroundColor: generateColor()}]}>NestedComponent02</Text>
        <Text style={[{fontWeight: 'bold'}, {fontSize: 20}]}>들어온 데이터 {props.clickCount}</Text>
        <Button title="버튼!" onPress={() => {
          props.onClick()
      }}/>
      </>
    );
  }

  function EvenNumberTitle(props: EvenNumberTitleProps) {
    if (props.isEven) {
      return <Text>짝수입니다</Text>
    }
    return null;
  }

  const showToast = (someValue : number) => {
    Toast.show({
      type: 'success',
      text1: `someValue: ${someValue}`,
      text2: 'This is some something 👋'
    });
  }

  return (
    <View style={[styles.container, {backgroundColor: generateColor()}]}>
      <EvenNumberTitle isEven={clickCount % 2 ===0} />
      <Text style={[{fontWeight: 'bold'}, {fontSize: 20}, {backgroundColor: generateColor()}]}>TEST</Text>
      <Text style={styles.blodText}>TEST</Text>
      <Text style={styles.blodText}>클릭수 {clickCount}</Text>
      <StatusBar style="auto" />

      <Button title="버튼!" onPress={() => {
        setClickCount(clickCount + 1);
      }}/>

      <Button title="토스트 띄우기" onPress={() => {
        showToast(clickCount);
      }}/>

      <SomeComponent clickCount={clickCount} onClick={() => {
        setClickCount(clickCount +1);
      }}/>
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blodText : {
    fontWeight: 'bold',
    fontSize: 26
  }
});
