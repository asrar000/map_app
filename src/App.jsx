import React, { useState } from 'react';
import MapComponent from './MapComponent';
import Sidebar from './Sidebar';

const App = () => {
    const [areaDetails, setAreaDetails] = useState(null);

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar areaDetails={areaDetails} />
            <div style={{ flexGrow: 1 }}>
                <MapComponent setAreaDetails={setAreaDetails} />
            </div>
        </div>
    );
};

export default App;
