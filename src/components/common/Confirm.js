import React from 'react';
import { Text, View, Modal } from 'react-native'; 
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {

    const { cardSectionStyle, textStyle, containerStyle } = style;

    return(
        <Modal animationType="slide" onRequestClose={() => {}} transparent visible={visible}>
           <View style= { containerStyle }>
            <CardSection style= { cardSectionStyle }>
                <Text style= { textStyle }>{ children} </Text>
            </CardSection>

            <CardSection>
                <Button argsOnPress={onAccept}  >Yes</Button>
                <Button argsOnPress={onDecline} >No</Button>
            </CardSection>
            </View>            
        </Modal>
    );
};

const style = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 25,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        bachgroundColor: 'rbga(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm };