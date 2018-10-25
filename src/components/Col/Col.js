import React from 'react';


const Col = props => {
    let addclass = props.addclass;
    let classes = '';
    addclass !== undefined ? classes = classes + ' ' + addclass : addclass = '';
    let number = String(props.col);
    let col = (<div className={`col-${number} ${classes}`} {...props}/>);

    if (props.size !== undefined) {
        col = (<div className={`col-${props.size}-${number} ${classes}`} {...props} />);
    }    
    

    return col;
}

export default Col;