import React from 'react';

const Row = props => {
    let addclass = props.addclass;
    let classes = '';
    addclass !== undefined ? classes = classes + ' ' + addclass : addclass = '';

    return <div className={`row ${classes}`} {...props}/>;
}

export default Row;