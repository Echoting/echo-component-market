import React from 'react';
import PropTypes from 'prop-types';
import './style.use.less';

export default class Button extends React.Component {
    static propTypes = {
        text: PropTypes.string,
    }
    static defaultProps = {
        text: '按钮'
    }

    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);
    }



    render() {
        const {text} = this.props;
        return (
            <a className='button-wrapper'>
                {text}
            </a>
        );
    }
}