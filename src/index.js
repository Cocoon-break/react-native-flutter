/**
 * Created by wushengping on 16/9/1.
 */
import React,{Component,PropTypes} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native'
import RootSiblings from 'react-native-root-siblings';
const SCREEN = Dimensions.get('window')
const positions = {
    TOP: 20,
    BOTTOM: -20,
    CENTER: 0,
    LEFT: 20,
    RIGHT: 20
};

class FlutterView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flutterAnimate: new Animated.Value(0),
        }
        this.container = this.container.bind(this)
    }

    static propTypes = {
        ...View.propTypes,
        position: PropTypes.object,
        onPress: PropTypes.func,
        duration: PropTypes.number,
        animateEndCallBack:PropTypes.func,
        container:PropTypes.element
    };
    static defaultProps = {
        position: {top: positions.TOP, left: positions.LEFT},
        duration: 1000
    }

    componentDidMount() {
        const {animateEndCallBack}=this.props
        this._inAnim(() => {
            if(animateEndCallBack){
                animateEndCallBack()
            }
        });
    }

    container() {
        const transformX = [{
            translateX: this.state.flutterAnimate.interpolate({
                inputRange: [0, 1],
                outputRange: [SCREEN.width, 0]
            }),
        }]

        const onPress = this.props.onPress
        let container = <Animated.View style={{transform:transformX}}>
            {this.props.container}
        </Animated.View>

        if (onPress) {
            container = <TouchableWithoutFeedback onPress={onPress}>
                {container}
            </TouchableWithoutFeedback>
        }
        return container
    }

    render() {
        const {props} =  this;
        const position = props.position;
        return <View style={[styles.defaultStyle,position]}>
            {this.container()}
        </View>
    }

    _inAnim(callback) {
        Animated.sequence([
            Animated.timing(this.state.flutterAnimate, {
                toValue: 1,
                duration: 1000,
            })
        ]).start(() => callback && callback());
    }

    _outAnim(callback) {
        Animated.sequence([
            Animated.timing(this.state.flutterAnimate, {
                toValue: 0,
                duration: 1000,
            })
        ]).start(() => callback && callback());
    }
}

const styles = StyleSheet.create({
    defaultStyle: {
        position: 'absolute'
    }
})

class Flutter extends Component {
    static displayName = 'Flutter'

    static move = (options = {})=> {
        return new RootSiblings(<FlutterView {...options}/>)
    }

    static dismiss = flutter=> {
        if (flutter instanceof RootSiblings) {
            flutter.destroy()
        }
    }

    render() {
        return null
    }
}

export default Flutter