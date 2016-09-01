/**
 * Created by wushengping on 16/9/1.
 */
import React,{Component,PropTypes} from 'react'
import {
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'
import RootSiblings from 'react-native-root-siblings';
import {View} from 'react-native-animatable';

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
        this.container = this.container.bind(this)
    }

    static propTypes = {
        position: PropTypes.object,
        onPress: PropTypes.func,
        duration: PropTypes.number,
        container: PropTypes.element.isRequired,
        animation:PropTypes.string,
        onAnimationEnd:PropTypes.func
    };
    static defaultProps = {
        position: {top: positions.TOP, left: positions.LEFT},
        animation:'bounceInRight',
        onAnimationEnd:()=>{},
        duration:1000
    }

    container() {
        const {onPress,animation,onAnimationEnd,duration,container:containerView} = this.props

        let container = <View animation={animation} onAnimationEnd={onAnimationEnd} duration={duration}>
            {containerView}
        </View>

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