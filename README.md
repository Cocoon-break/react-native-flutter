## react-native-flutter

a component flutter on react native

## installation

	npm install react-native-flutter --save
	
##Basic Usage
there is one way to use flutter,calling api

	import Flutter from 'react-native-flutter'
	class Demo extends Component {

    componentDidMount() {
        const options = {container: <Text>this is a multiton fluter view</Text>, onPress: this.showSingleton}
        setTimeout(()=> {
            const flutter=Flutter.onShowMultiton(options)
            setTimeout(()=>{
                Flutter.onDestroy(flutter)
            },3000)
        }, 1000)
    }

    showSingleton() {
        let options = {
            container: <Text>this is a singleton fluter view</Text>,
            position: {top: 40, right: 20},
            onPress: ()=>Flutter.onDestroy()
        }
        Flutter.onShowSingleton(options)
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

the view will float on your app root view

**Flutter.onShowSingleton(options):** the options for flutter view,to control what you want to flutter,if you want to destroy it on options,you should use this function

**Flutter.onShowMultiton(options):** the same to onShowSingleton,and it will return instance.

**Flutter.onDestroy(flutter?):**if you use Flutter.onShowMultiton, the params of flutter must be return from Flutter.onShowMultiton,if use Flutter.onShowSingleton,the params of flutter not to pass

**options:**

|option|type|isRequire|des|
|:------:|:----:|:---------:|:---:|
|container|element|true|the view you want to flutter|
|position|object|false|the animate end position,it must be contain top,left,right,bottom,like this {top:100,left:20}|
|duration|number|false|the duration of the animate for flutter view|
|onPress|func|false|when you onPress flutter,the function will execute|
|onAnimationEnd|func|false|the animate end callback|
|animation|string|false|animation reference [react-native-animatable](https://github.com/oblador/react-native-animatable)|

**screenShot**

![screenShot](https://github.com/Cocoon-break/react-native-flutter/blob/master/screenGif.gif)