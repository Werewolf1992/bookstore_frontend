import {connect} from 'react-redux';
import Navigation from '../components/common';
import React from 'react';
import PropTypes from 'prop-types';


class NavigationWrapper extends React.Component {

    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child)
        );
        if(this.props.disabled) {
            return (
                <div>
                    {childrenWithProps}
                </div>
            );
        } else {
            return (
                <Navigation>
                    {childrenWithProps}
                </Navigation>
            );
        }
    }
}

NavigationWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    disabled: PropTypes.bool.isRequired,
};

// eslint-disable-next-line
const mapStateToProps = (state) => ({
    disabled: state.navigation.disabled,
});

const mapDispatchToProps = {
};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationWrapper);
