import React from 'react';

const Container = props => {
    let addclass = props.addclass;
    let classes = '';
    addclass !== undefined ? classes = classes + ' ' + addclass : addclass = '';

    return <div className={`container${props.fluid ? "-fluid" : ""} ${classes}`} {...props}/>;
}

export default Container;