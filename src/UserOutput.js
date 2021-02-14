import { buildQueries } from '@testing-library/react';
import React from 'react';

const UserOutput = props => {

    const pStyle={
        fontWeight: 'bold',
        textAlign:'center',
        color:'blue',
        backgroundColor:'beige',
        fontSize:'large'
    }
        return (
            <div>
                <p style={pStyle}>This is an example which is about what we've been learning.</p>
                <p>Welcome : {props.username}</p>
                <p>Your password seems not hard as we expect : {props.password}</p>
            </div>
        )

}
export default UserOutput;