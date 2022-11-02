import React from 'react';

function Error({checkValidity}) {
	return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{checkValidity}</div>
}

export default Error;
