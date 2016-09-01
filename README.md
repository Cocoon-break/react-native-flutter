## react-native-flutter

a component flutter on react native

## installation

	npm install react-native-flutter --save
	
##Basic Usage
there is one way to use flutter,calling api

	import Flutter from 'react-native-flutter'
	class Demo extends Component {

    componentDidMount() {
        setTimeout(()=> {
        	const options={container:<Text>this is a fluter view</Text>}
            const flutter = Flutter.move(options)
            setTimeout(()=>Flutter.dismiss(flutter),3000)
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
	}

####api for flutter 
**Flutter.move(options):** the options for flutter view,to control what you want to flutter

**Flutter.dismiss(flutter):** dismiss the view on you screen

**options:**

|option|type|isRequire|des|
|:------:|:----:|:---------:|:---:|
|container|element|true|the view you want to flutter|
|position|object|false|the animate end position,it must be contain top,left,right,bottom,like this {top:100,left:20}|
|duration|number|false|the duration of the animate for flutter view|
|onPress|func|false|when you onPress flutter,the function will execute|
|onAnimationEnd|func|false|the animate end callback|
|animation|string|false|animation reference [react-native-animatable](https://github.com/oblador/react-native-animatable)|