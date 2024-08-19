const Sidebar = ({ areaDetails }) => {
    return (
        <div style={{
            background: 'linear-gradient(180deg, #4a3fbf, #b29dff)',
            height: '100vh',
            width: '15%',
            padding: '0 1em 0 1em',
            color: 'white',
        }}>
            <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Selected Location</h2>
            {areaDetails != null && Object.keys(areaDetails).length ? (
                <div style={{
                    background: 'rgba(255, 255, 255, 0.14)',
                    backdropFilter: 'blur(10px)',
                    padding: '15px',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    color: 'white'
                }}>
                    {Object.entries(areaDetails).map(([k, v], inx) => (
                        <p key={inx} style={{ fontSize: '16px', lineHeight: '1.8' }}>
                            <strong>{k}: </strong> {v}
                        </p>
                    ))}
                </div>
            ) : (
                <p>No area selected</p>
            )}
        </div>
    );
};

export default Sidebar;
