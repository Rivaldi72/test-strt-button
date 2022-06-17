import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CardView from '../../molecules/CardView';
import HeaderPanel from '../../molecules/HeaderPanel';

export default function LabTabs() {
    const [value, setValue] = React.useState('2');
    const [age, setAge] = React.useState('');

    const handleTab = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Box sx={{ width: '100%', typography: 'body1' }} className="mainContainer bottomShadow">
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                        <TabList
                            onChange={handleTab}
                            aria-label="lab API tabs example"
                            variant='fullWidth'
                            indicatorColor="secondary"
                            textColor="inherit"
                        >
                            <Tab label="Public IDO" value="1" />
                            <Tab label="Private IDO" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        Kosong
                    </TabPanel>
                    <TabPanel value="2">
                        <HeaderPanel></HeaderPanel>
                    </TabPanel>
                </TabContext>
            </Box >
            <Box sx={{ width: '100%', typography: 'body1' }} className="mainContainer">
                <TabContext value={value}>
                    <TabPanel value="1">
                        Kosong
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="row">
                            <CardView></CardView>
                            <CardView></CardView>
                            <CardView></CardView>
                            <CardView></CardView>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
}